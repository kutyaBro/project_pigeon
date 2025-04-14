"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Minus, Plus, ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

// This would normally come from a database
const product = {
  id: 1,
  name: "Молоко Домик в деревне 3.2%",
  price: 89.9,
  oldPrice: 109.9,
  description:
    "Молоко питьевое пастеризованное 3,2% «Домик в деревне» производится из отборного молока, которое проходит строгий контроль качества. Продукт обладает нежным сливочным вкусом и насыщенным ароматом.",
  category: "dairy",
  images: [
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500",
  ],
  isNew: false,
  isDiscount: true,
  inStock: true,
  weight: "930 мл",
  brand: "Домик в деревне",
  country: "Россия",
  nutritionalValue: {
    calories: "58 ккал",
    proteins: "3.0 г",
    fats: "3.2 г",
    carbohydrates: "4.7 г",
  },
  relatedProducts: [
    {
      id: 5,
      name: "Сыр Российский 50%",
      price: 219.9,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 11,
      name: "Творог 9%",
      price: 119.9,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Хлеб Бородинский",
      price: 45.5,
      image: "/placeholder.svg?height=100&width=100",
    },
  ],
}

export default function ProductPage({ params }: { params: { category: string; id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [inCart, setInCart] = useState(false)
  const [inWishlist, setInWishlist] = useState(false)

  const incrementQuantity = () => setQuantity(quantity + 1)
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1)
  }

  const addToCart = () => {
    setInCart(true)
    // Here you would normally add the product to the cart in your state management
  }

  const toggleWishlist = () => {
    setInWishlist(!inWishlist)
    // Here you would normally add/remove the product from the wishlist
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-800">
          Главная
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/products" className="hover:text-gray-800">
          Все товары
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href={`/products/${params.category}`} className="hover:text-gray-800">
          {params.category === "dairy"
            ? "Молочные продукты"
            : params.category === "bakery"
              ? "Хлебобулочные изделия"
              : params.category === "fruits"
                ? "Фрукты и овощи"
                : params.category === "meat"
                  ? "Мясо и птица"
                  : params.category === "household"
                    ? "Бытовые товары"
                    : "Продукты"}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-800">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <div className="mb-4 rounded-lg overflow-hidden border">
            <img
              src={product.images[activeImage] || "/placeholder.svg"}
              alt={product.name}
              className="w-full aspect-square object-contain"
            />
          </div>
          <div className="flex gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`border rounded overflow-hidden w-20 h-20 ${
                  activeImage === index ? "ring-2 ring-offset-2 ring-gray-500" : ""
                }`}
                onClick={() => setActiveImage(index)}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-start justify-between mb-2">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <Button
              variant="ghost"
              size="icon"
              className={inWishlist ? "text-red-500" : "text-gray-400"}
              onClick={toggleWishlist}
            >
              <Heart className={`h-6 w-6 ${inWishlist ? "fill-current" : ""}`} />
            </Button>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-bold">{product.price.toFixed(2)} ₽</span>
            {product.oldPrice && <span className="text-gray-500 line-through">{product.oldPrice.toFixed(2)} ₽</span>}
            {product.isDiscount && (
              <Badge className="bg-red-500 hover:bg-red-600">
                Скидка {Math.round(((product.oldPrice! - product.price) / product.oldPrice!) * 100)}%
              </Badge>
            )}
          </div>

          <div className="mb-6">
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-sm">
              <span className="text-gray-500">Бренд:</span> {product.brand}
            </div>
            <div className="text-sm">
              <span className="text-gray-500">Вес:</span> {product.weight}
            </div>
            <div className="text-sm">
              <span className="text-gray-500">Страна:</span> {product.country}
            </div>
            <div className="text-sm">
              <span className="text-gray-500">Наличие:</span>{" "}
              {product.inStock ? (
                <span className="text-green-600">В наличии</span>
              ) : (
                <span className="text-red-600">Нет в наличии</span>
              )}
            </div>
          </div>

          <Separator className="my-6" />

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded">
              <button className="px-3 py-2 text-gray-600 hover:bg-gray-100" onClick={decrementQuantity}>
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-4 py-2 font-medium">{quantity}</span>
              <button className="px-3 py-2 text-gray-600 hover:bg-gray-100" onClick={incrementQuantity}>
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <Button className="flex-1" onClick={addToCart} disabled={!product.inStock || inCart}>
              <ShoppingCart className="h-5 w-5 mr-2" />
              {inCart ? "В корзине" : "Добавить в корзину"}
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="details" className="mb-12">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="details">Детали продукта</TabsTrigger>
          <TabsTrigger value="nutrition">Пищевая ценность</TabsTrigger>
          <TabsTrigger value="reviews">Отзывы</TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="pt-4">
          <div className="prose max-w-none">
            <p>
              Молоко питьевое пастеризованное 3,2% «Домик в деревне» производится из отборного молока, которое проходит
              строгий контроль качества. Продукт обладает нежным сливочным вкусом и насыщенным ароматом.
            </p>
            <p>
              Молоко «Домик в деревне» — это источник кальция и витамина D, которые необходимы для здоровья костей и
              зубов. Регулярное употребление молока способствует укреплению иммунитета и общему оздоровлению организма.
            </p>
            <p>
              Продукт упакован в удобную картонную упаковку с крышкой, которая сохраняет свежесть молока и защищает его
              от внешних воздействий.
            </p>
            <h3>Условия хранения</h3>
            <p>
              Хранить при температуре от +2°C до +6°C. После вскрытия упаковки хранить в холодильнике не более 48 часов.
            </p>
            <h3>Срок годности</h3>
            <p>14 суток с даты изготовления.</p>
          </div>
        </TabsContent>
        <TabsContent value="nutrition" className="pt-4">
          <div className="max-w-md">
            <h3 className="font-semibold mb-4">Пищевая ценность на 100 г продукта:</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-50 p-3 rounded">
                <div className="text-sm text-gray-500">Калорийность</div>
                <div className="font-medium">{product.nutritionalValue.calories}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <div className="text-sm text-gray-500">Белки</div>
                <div className="font-medium">{product.nutritionalValue.proteins}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <div className="text-sm text-gray-500">Жиры</div>
                <div className="font-medium">{product.nutritionalValue.fats}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <div className="text-sm text-gray-500">Углеводы</div>
                <div className="font-medium">{product.nutritionalValue.carbohydrates}</div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="pt-4">
          <div className="text-center py-8">
            <h3 className="text-lg font-semibold mb-2">Отзывов пока нет</h3>
            <p className="text-gray-500 mb-4">Будьте первым, кто оставит отзыв об этом товаре</p>
            <Button>Написать отзыв</Button>
          </div>
        </TabsContent>
      </Tabs>

      <div>
        <h2 className="text-xl font-bold mb-6">Похожие товары</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {product.relatedProducts.map((relatedProduct) => (
            <Link key={relatedProduct.id} href={`/products/${product.category}/${relatedProduct.id}`} className="group">
              <div className="border rounded-lg overflow-hidden transition-all group-hover:shadow-md">
                <div className="aspect-square">
                  <img
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-medium line-clamp-2 group-hover:text-gray-600">{relatedProduct.name}</h3>
                  <p className="mt-1 font-semibold">{relatedProduct.price.toFixed(2)} ₽</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
