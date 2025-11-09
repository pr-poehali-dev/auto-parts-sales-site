import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Part {
  id: string;
  name: string;
  price: number;
  image: string;
  inStock: boolean;
  deliveryDays: number;
  category: string;
  article: string;
}

const parts: Part[] = [
  {
    id: '1',
    name: 'Тормозные колодки',
    price: 2500,
    image: 'https://cdn.poehali.dev/projects/72290c47-20f7-4324-b28a-ea7db0511767/files/d918ab11-a9a2-4b4e-8a43-ff1d5a9801d9.jpg',
    inStock: true,
    deliveryDays: 1,
    category: 'Тормозная система',
    article: 'BRK-2024-01'
  },
  {
    id: '2',
    name: 'Масляный фильтр',
    price: 450,
    image: 'https://cdn.poehali.dev/projects/72290c47-20f7-4324-b28a-ea7db0511767/files/999cc988-f44a-4c7e-84a9-0e54e788c5ce.jpg',
    inStock: true,
    deliveryDays: 1,
    category: 'Фильтры',
    article: 'FLT-2024-05'
  },
  {
    id: '3',
    name: 'Поршневая группа',
    price: 8900,
    image: 'https://cdn.poehali.dev/projects/72290c47-20f7-4324-b28a-ea7db0511767/files/412c33f2-7a40-4584-89d5-e5b0e2955c04.jpg',
    inStock: false,
    deliveryDays: 3,
    category: 'Двигатель',
    article: 'ENG-2024-12'
  },
  {
    id: '4',
    name: 'Амортизаторы передние',
    price: 5400,
    image: 'https://cdn.poehali.dev/projects/72290c47-20f7-4324-b28a-ea7db0511767/files/d918ab11-a9a2-4b4e-8a43-ff1d5a9801d9.jpg',
    inStock: true,
    deliveryDays: 2,
    category: 'Подвеска',
    article: 'SUS-2024-08'
  },
  {
    id: '5',
    name: 'Свечи зажигания',
    price: 350,
    image: 'https://cdn.poehali.dev/projects/72290c47-20f7-4324-b28a-ea7db0511767/files/999cc988-f44a-4c7e-84a9-0e54e788c5ce.jpg',
    inStock: true,
    deliveryDays: 1,
    category: 'Зажигание',
    article: 'IGN-2024-03'
  },
  {
    id: '6',
    name: 'Радиатор охлаждения',
    price: 7200,
    image: 'https://cdn.poehali.dev/projects/72290c47-20f7-4324-b28a-ea7db0511767/files/412c33f2-7a40-4584-89d5-e5b0e2955c04.jpg',
    inStock: false,
    deliveryDays: 5,
    category: 'Система охлаждения',
    article: 'COL-2024-15'
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [vinSearch, setVinSearch] = useState('');

  const filteredParts = parts.filter(part => 
    part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    part.article.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card border-b border-border backdrop-blur-sm bg-opacity-95">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Wrench" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">АвтоЗапчасти</h1>
            </div>
            
            <nav className="hidden md:flex gap-6">
              <button 
                onClick={() => setActiveSection('home')}
                className={`font-semibold transition-colors ${activeSection === 'home' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
              >
                Главная
              </button>
              <button 
                onClick={() => setActiveSection('catalog')}
                className={`font-semibold transition-colors ${activeSection === 'catalog' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
              >
                Каталог
              </button>
              <button 
                onClick={() => setActiveSection('vin')}
                className={`font-semibold transition-colors ${activeSection === 'vin' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
              >
                Поиск по VIN
              </button>
              <button 
                onClick={() => setActiveSection('delivery')}
                className={`font-semibold transition-colors ${activeSection === 'delivery' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
              >
                Доставка
              </button>
              <button 
                onClick={() => setActiveSection('contacts')}
                className={`font-semibold transition-colors ${activeSection === 'contacts' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
              >
                Контакты
              </button>
            </nav>

            <Button variant="default" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      {activeSection === 'home' && (
        <main className="fade-in">
          <section className="relative py-20 md:py-32 bg-gradient-to-br from-card via-background to-card overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Качественные запчасти для вашего авто
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Широкий ассортимент оригинальных и аналоговых запчастей. Быстрая доставка по всей России.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg" onClick={() => setActiveSection('catalog')}>
                    <Icon name="Search" size={20} className="mr-2" />
                    Перейти в каталог
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg" onClick={() => setActiveSection('vin')}>
                    <Icon name="Scan" size={20} className="mr-2" />
                    Поиск по VIN
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-card">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold mb-12 text-center">Популярные категории</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: 'Disc', name: 'Тормозная система', count: '1,245 товаров' },
                  { icon: 'Cog', name: 'Двигатель', count: '3,567 товаров' },
                  { icon: 'Gauge', name: 'Подвеска', count: '892 товара' },
                  { icon: 'Zap', name: 'Электрика', count: '2,134 товара' },
                  { icon: 'Droplet', name: 'Фильтры', count: '756 товаров' },
                  { icon: 'Wind', name: 'Климат-контроль', count: '423 товара' }
                ].map((category, index) => (
                  <Card key={index} className="hover-scale cursor-pointer border-border hover:border-primary transition-colors">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon name={category.icon} size={32} className="text-primary" />
                      </div>
                      <CardTitle className="text-xl">{category.name}</CardTitle>
                      <CardDescription>{category.count}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold mb-12 text-center">Почему выбирают нас</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { icon: 'ShieldCheck', title: 'Гарантия качества', text: 'Все товары сертифицированы' },
                  { icon: 'Truck', title: 'Быстрая доставка', text: 'От 1 дня по всей России' },
                  { icon: 'Headphones', title: 'Поддержка 24/7', text: 'Всегда готовы помочь' },
                  { icon: 'CreditCard', title: 'Удобная оплата', text: 'Наличными или картой' }
                ].map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={feature.icon} size={36} className="text-secondary" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      )}

      {activeSection === 'catalog' && (
        <main className="py-12 fade-in">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8">Каталог запчастей</h2>
            
            <div className="mb-8">
              <div className="relative max-w-xl">
                <Input
                  type="text"
                  placeholder="Поиск по названию или артикулу..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-lg"
                />
                <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredParts.map((part) => (
                <Card key={part.id} className="overflow-hidden hover-scale">
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img 
                      src={part.image} 
                      alt={part.name}
                      className="w-full h-full object-cover"
                    />
                    {part.inStock ? (
                      <Badge className="absolute top-4 right-4 bg-green-600">
                        <Icon name="Check" size={14} className="mr-1" />
                        В наличии
                      </Badge>
                    ) : (
                      <Badge className="absolute top-4 right-4 bg-yellow-600">
                        <Icon name="Clock" size={14} className="mr-1" />
                        Под заказ
                      </Badge>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{part.name}</CardTitle>
                    <CardDescription>Артикул: {part.article}</CardDescription>
                    <CardDescription>{part.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-bold text-primary">{part.price} ₽</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Truck" size={16} />
                      <span>Доставка: {part.deliveryDays} {part.deliveryDays === 1 ? 'день' : 'дня'}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" size="lg">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      Добавить в корзину
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </main>
      )}

      {activeSection === 'vin' && (
        <main className="py-12 fade-in">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold mb-8">Поиск по VIN или номеру</h2>
            
            <Card>
              <CardHeader>
                <CardTitle>Найдите нужные запчасти</CardTitle>
                <CardDescription>Введите VIN-код автомобиля или номер запчасти для точного подбора</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="vin">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="vin">По VIN-коду</TabsTrigger>
                    <TabsTrigger value="article">По артикулу</TabsTrigger>
                  </TabsList>
                  <TabsContent value="vin" className="space-y-4 mt-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">VIN-код (17 символов)</label>
                      <Input
                        type="text"
                        placeholder="Например: WBADT43452G123456"
                        value={vinSearch}
                        onChange={(e) => setVinSearch(e.target.value.toUpperCase())}
                        maxLength={17}
                        className="h-12 text-lg font-mono"
                      />
                    </div>
                    <Button size="lg" className="w-full">
                      <Icon name="Search" size={20} className="mr-2" />
                      Найти запчасти
                    </Button>
                  </TabsContent>
                  <TabsContent value="article" className="space-y-4 mt-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Артикул или OEM-номер</label>
                      <Input
                        type="text"
                        placeholder="Например: BRK-2024-01"
                        className="h-12 text-lg"
                      />
                    </div>
                    <Button size="lg" className="w-full">
                      <Icon name="Search" size={20} className="mr-2" />
                      Найти запчасть
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Icon name="Target" size={32} className="text-primary mb-2" />
                  <CardTitle>Точный подбор</CardTitle>
                  <CardDescription>Найдем именно ту запчасть, которая подходит вашему авто</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Icon name="FileCheck" size={32} className="text-primary mb-2" />
                  <CardTitle>Проверка VIN</CardTitle>
                  <CardDescription>Расшифровка и проверка VIN-кода в базе данных</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Icon name="Sparkles" size={32} className="text-primary mb-2" />
                  <CardTitle>Аналоги</CardTitle>
                  <CardDescription>Подберем аналоги от проверенных производителей</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </main>
      )}

      {activeSection === 'delivery' && (
        <main className="py-12 fade-in">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold mb-8">Доставка и оплата</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Truck" size={24} className="text-primary" />
                    Способы доставки
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Home" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Курьерская доставка</h4>
                      <p className="text-muted-foreground">По Москве и МО — от 300 ₽, 1-2 дня</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Package" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Пункт выдачи</h4>
                      <p className="text-muted-foreground">СДЭК, Boxberry — от 200 ₽, 2-5 дней</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Самовывоз</h4>
                      <p className="text-muted-foreground">Бесплатно, готово через 2 часа</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="CreditCard" size={24} className="text-primary" />
                    Способы оплаты
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="CreditCard" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Банковская карта</h4>
                      <p className="text-muted-foreground">Visa, Mastercard, МИР — онлайн на сайте</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Wallet" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Наличные</h4>
                      <p className="text-muted-foreground">При получении курьеру или в пункте выдачи</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Building" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Для юридических лиц</h4>
                      <p className="text-muted-foreground">Безналичный расчет по счету с НДС</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      )}

      {activeSection === 'contacts' && (
        <main className="py-12 fade-in">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold mb-8">Контакты</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Свяжитесь с нами</CardTitle>
                  <CardDescription>Мы всегда готовы помочь вам с выбором запчастей</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Телефон</h4>
                      <p className="text-lg">+7 (495) 123-45-67</p>
                      <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-lg">info@avtozapchasti.ru</p>
                      <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Адрес</h4>
                      <p className="text-lg">г. Москва, ул. Автозаводская, 23</p>
                      <p className="text-sm text-muted-foreground">Пн-Сб: 9:00-20:00, Вс: 10:00-18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Напишите нам</CardTitle>
                  <CardDescription>Оставьте заявку и мы свяжемся с вами</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Имя</label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон</label>
                      <Input placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Сообщение</label>
                      <Input placeholder="Чем мы можем помочь?" />
                    </div>
                    <Button className="w-full" size="lg">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      )}

      <footer className="bg-card border-t border-border mt-20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Wrench" size={28} className="text-primary" />
                <span className="text-xl font-bold">АвтоЗапчасти</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Надежный поставщик качественных автозапчастей с 2010 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Двигатель</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Тормозная система</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Подвеска</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Электрика</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Гарантии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@avtozapchasti.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Москва
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 АвтоЗапчасти. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}