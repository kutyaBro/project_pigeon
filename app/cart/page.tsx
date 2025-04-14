"use client"

import { useState } from "react"
import Link from "next/link"
import { Trash2, ArrowLeft, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

// Sample cart data
const initialCartItems = [
  {
    id: 1,
    name: "Молоко Домик в деревне 3.2%",
    price: 89.9,
    quantity: 2,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    name: "Сыр Российский 50%",
    price: 219.9,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 7,
    name: "Шоколад Алёнка",
    price: 79.9,
    quantity: 3,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [promoCode, setPromoCode] = useState("")

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discount = promoCode === "GOLUB20" ? subtotal * 0.2 : 0
  const deliveryFee = subtotal > 2000 ? 0 : 199
  const total = subtotal - discount + deliveryFee

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Корзина</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <div className="flex justify-center mb-4">
            <ShoppingBag className="h-16 w-16 text-gray-300" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Ваша корзина пуста</h2>
          <p className="text-gray-500 mb-6">Добавьте товары в корзину, чтобы оформить заказ</p>
          <Button asChild>
            <Link href="/products">Перейти к покупкам</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Товары в корзине ({cartItems.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium">{item.name}</h3>
                        <div className="text-sm text-gray-500 mt-1">{item.price.toFixed(2)} ₽ за шт.</div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border rounded">
                            <button
                              className="px-3 py-1 text-gray-600"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </button>
                            <span className="px-3 py-1">{item.quantity}</span>
                            <button
                              className="px-3 py-1 text-gray-600"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                          <button className="text-red-500 hover:text-red-700" onClick={() => removeItem(item.id)}>
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                      <div className="text-right font-semibold">{(item.price * item.quantity).toFixed(2)} ₽</div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/products">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Продолжить покупки
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Сумма заказа</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Подытог</span>
                    <span>{subtotal.toFixed(2)} ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Доставка</span>
                    <span>{deliveryFee === 0 ? "Бесплатно" : `${deliveryFee.toFixed(2)} ₽`}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Скидка</span>
                      <span>-{discount.toFixed(2)} ₽</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Итого</span>
                    <span>{total.toFixed(2)} ₽</span>
                  </div>

                  <div className="pt-4">
                    <p className="text-sm mb-2">Промокод</p>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Введите промокод"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                      <Button variant="outline">Применить</Button>
                    </div>
                    {promoCode === "GOLUB20" && (
                      <p className="text-green-600 text-sm mt-2">Промокод применен! Скидка 20%</p>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Оформить заказ</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}
