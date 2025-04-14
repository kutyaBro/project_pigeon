import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FeaturedProducts from "@/components/featured-products"
import CategoryList from "@/components/category-list"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-gray-800">
            <span className="text-gray-800">Голубь</span>
            <span className="text-gray-500">Супермаркет</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/products" className="text-sm font-medium hover:text-gray-600">
              Все товары
            </Link>
            <Link href="/products/groceries" className="text-sm font-medium hover:text-gray-600">
              Продукты
            </Link>
            <Link href="/products/household" className="text-sm font-medium hover:text-gray-600">
              Бытовые товары
            </Link>
            <Link href="/products/electronics" className="text-sm font-medium hover:text-gray-600">
              Электроника
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/cart">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Добро пожаловать в Голубь Супермаркет
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Свежие продукты, низкие цены и быстрая доставка прямо к вашей двери.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-none shadow-sm">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Свежие продукты</h3>
                  <p className="text-gray-600 text-sm">
                    Мы доставляем только самые свежие продукты от местных производителей.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-none shadow-sm">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-600"
                    >
                      <circle cx="8" cy="21" r="1" />
                      <circle cx="19" cy="21" r="1" />
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Быстрая доставка</h3>
                  <p className="text-gray-600 text-sm">Доставка в день заказа для всех заказов, сделанных до 12:00.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-none shadow-sm">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-amber-600"
                    >
                      <path d="M12 2v20" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Низкие цены</h3>
                  <p className="text-gray-600 text-sm">Мы гарантируем лучшие цены на все наши товары.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl font-bold mb-8">Популярные категории</h2>
            <CategoryList />
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl font-bold mb-8">Популярные товары</h2>
            <FeaturedProducts />
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-gray-300">
        <div className="container px-4 py-12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Голубь Супермаркет</h3>
              <p className="text-sm">Ваш надежный поставщик свежих продуктов и товаров для дома.</p>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4 text-white">Категории</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/products/groceries" className="hover:text-white">
                    Продукты
                  </Link>
                </li>
                <li>
                  <Link href="/products/household" className="hover:text-white">
                    Бытовые товары
                  </Link>
                </li>
                <li>
                  <Link href="/products/electronics" className="hover:text-white">
                    Электроника
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4 text-white">Информация</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="hover:text-white">
                    О нас
                  </Link>
                </li>
                <li>
                  <Link href="/delivery" className="hover:text-white">
                    Доставка
                  </Link>
                </li>
                <li>
                  <Link href="/contacts" className="hover:text-white">
                    Контакты
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4 text-white">Контакты</h4>
              <address className="text-sm not-italic">
                <p>ул. Примерная, 123</p>
                <p>Москва, Россия</p>
                <p className="mt-2">Телефон: +7 (123) 456-78-90</p>
                <p>Email: info@golub-market.ru</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>© 2025 Голубь Супермаркет. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
