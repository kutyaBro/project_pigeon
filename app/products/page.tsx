import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import ProductList from "@/components/product-list"

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Все товары</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-6">
              <h2 className="font-semibold mb-4">Фильтры</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-3">Категории</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Checkbox id="category-all" />
                      <label htmlFor="category-all" className="ml-2 text-sm">
                        Все категории
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="category-groceries" />
                      <label htmlFor="category-groceries" className="ml-2 text-sm">
                        Продукты
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="category-dairy" />
                      <label htmlFor="category-dairy" className="ml-2 text-sm">
                        Молочные продукты
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="category-bakery" />
                      <label htmlFor="category-bakery" className="ml-2 text-sm">
                        Хлебобулочные изделия
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="category-meat" />
                      <label htmlFor="category-meat" className="ml-2 text-sm">
                        Мясо и птица
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="category-fruits" />
                      <label htmlFor="category-fruits" className="ml-2 text-sm">
                        Фрукты и овощи
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="category-household" />
                      <label htmlFor="category-household" className="ml-2 text-sm">
                        Бытовые товары
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-3">Цена</h3>
                  <Slider defaultValue={[0, 1000]} min={0} max={1000} step={10} />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm">0 сом</span>
                    <span className="text-sm">1000 сом</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-3">Специальные предложения</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Checkbox id="special-discount" />
                      <label htmlFor="special-discount" className="ml-2 text-sm">
                        Со скидкой
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="special-new" />
                      <label htmlFor="special-new" className="ml-2 text-sm">
                        Новинки
                      </label>
                    </div>
                  </div>
                </div>

                <Button className="w-full">Применить фильтры</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-3">
          <ProductList />
        </div>
      </div>
    </div>
  )
}
