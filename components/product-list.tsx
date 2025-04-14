"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const products = [
  {
    id: 1,
    name: "Молоко Домик в деревне 3.2%",
    price: 89.9,
    oldPrice: 109.9,
    image: "/placeholder.svg?height=200&width=200",
    category: "dairy",
    isNew: false,
    isDiscount: true,
  },
  {
    id: 2,
    name: "Хлеб Бородинский",
    price: 45.5,
    oldPrice: null,
    image: "/placeholder.svg?height=200&width=200",
    category: "bakery",
    isNew: false,
    isDiscount: false,
  },
  {
    id: 3,
    name: "Яблоки Голден",
    price: 129.9,
    oldPrice: 159.9,
    image: "/placeholder.svg?height=200&width=200",
    category: "fruits",
    isNew: false,
    isDiscount: true,
  },
  {
    id: 4,
    name: "Куриное филе охлажденное",
    price: 289.9,
    oldPrice: null,
    image: "/placeholder.svg?height=200&width=200",
    category: "meat",
    isNew: true,
    isDiscount: false,
  },
  {
    id: 5,
    name: "Сыр Российский 50%",
    price: 219.9,
    oldPrice: 259.9,
    image: "/placeholder.svg?height=200&width=200",
    category: "dairy",
    isNew: false,
    isDiscount: true,
  },
  {
    id: 6,
    name: "Стиральный порошок Tide",
    price: 349.9,
    oldPrice: null,
    image: "/placeholder.svg?height=200&width=200",
    category: "household",
    isNew: false,
    isDiscount: false,
  },
  {
    id: 7,
    name: "Шоколад Алёнка",
    price: 79.9,
    oldPrice: 99.9,
    image: "/placeholder.svg?height=200&width=200",
    category: "groceries",
    isNew: false,
    isDiscount: true,
  },
  {
    id: 8,
    name: "Бананы",
    price: 89.9,
    oldPrice: null,
    image: "/placeholder.svg?height=200&width=200",
    category: "fruits",
    isNew: false,
    isDiscount: false,
  },
  {
    id: 9,
    name: "Чай Greenfield",
    price: 159.9,
    oldPrice: 189.9,
    image: "/placeholder.svg?height=200&width=200",
    category: "groceries",
    isNew: false,
    isDiscount: true,
  },
  {
    id: 10,
    name: "Кофе Jardin",
    price: 399.9,
    oldPrice: null,
    image: "/placeholder.svg?height=200&width=200",
    category: "groceries",
    isNew: true,
    isDiscount: false,
  },
  {
    id: 11,
    name: "Творог 9%",
    price: 119.9,
    oldPrice: null,
    image: "/placeholder.svg?height=200&width=200",
    category: "dairy",
    isNew: false,
    isDiscount: false,
  },
  {
    id: 12,
    name: "Макароны Barilla",
    price: 129.9,
    oldPrice: 149.9,
    image: "/placeholder.svg?height=200&width=200",
    category: "groceries",
    isNew: false,
    isDiscount: true,
  },
]

export default function ProductList() {
  const [cart, setCart] = useState<number[]>([])
  const [sortBy, setSortBy] = useState("popular")

  const addToCart = (productId: number) => {
    setCart([...cart, productId])
  }

  // Sort products based on selected option
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price
    if (sortBy === "price-desc") return b.price - a.price
    if (sortBy === "name") return a.name.localeCompare(b.name)
    // Default: popular (no sorting)
    return 0
  })

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-500">Показано {products.length} товаров</p>
        <div className="flex items-center gap-2">
          <span className="text-sm">Сортировать по:</span>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Популярности" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Популярности</SelectItem>
              <SelectItem value="price-asc">Цене (по возрастанию)</SelectItem>
              <SelectItem value="price-desc">Цене (по убыванию)</SelectItem>
              <SelectItem value="name">Названию</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden h-full flex flex-col">
            <div className="relative">
              <Link href={`/products/${product.category}/${product.id}`}>
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />
              </Link>
              <div className="absolute top-2 left-2 flex flex-col gap-1">
                {product.isNew && <Badge className="bg-green-500 hover:bg-green-600">Новинка</Badge>}
                {product.isDiscount && <Badge className="bg-red-500 hover:bg-red-600">Скидка</Badge>}
              </div>
            </div>
            <CardContent className="p-4 flex-grow">
              <Link href={`/products/${product.category}/${product.id}`}>
                <h3 className="font-medium text-sm line-clamp-2 hover:text-gray-600">{product.name}</h3>
              </Link>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-bold">{product.price.toFixed(2)} ₽</span>
                {product.oldPrice && (
                  <span className="text-sm text-gray-500 line-through">{product.oldPrice.toFixed(2)} ₽</span>
                )}
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button
                onClick={() => addToCart(product.id)}
                className="w-full"
                variant={cart.includes(product.id) ? "secondary" : "default"}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                {cart.includes(product.id) ? "В корзине" : "В корзину"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
