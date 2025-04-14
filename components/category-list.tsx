import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    id: "groceries",
    name: "Продукты",
    image: "/placeholder.svg?height=200&width=200",
    count: 120,
  },
  {
    id: "dairy",
    name: "Молочные продукты",
    image: "/placeholder.svg?height=200&width=200",
    count: 45,
  },
  {
    id: "bakery",
    name: "Хлебобулочные изделия",
    image: "/placeholder.svg?height=200&width=200",
    count: 38,
  },
  {
    id: "meat",
    name: "Мясо и птица",
    image: "/placeholder.svg?height=200&width=200",
    count: 52,
  },
  {
    id: "fruits",
    name: "Фрукты и овощи",
    image: "/placeholder.svg?height=200&width=200",
    count: 87,
  },
  {
    id: "household",
    name: "Бытовые товары",
    image: "/placeholder.svg?height=200&width=200",
    count: 64,
  },
]

export default function CategoryList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((category) => (
        <Link key={category.id} href={`/products/${category.id}`}>
          <Card className="h-full transition-all hover:shadow-md">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="w-full aspect-square rounded-md overflow-hidden mb-4">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium text-sm">{category.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{category.count} товаров</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
