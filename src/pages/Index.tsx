import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const menuItems = [
    {
      name: "Классическая",
      price: "250₽",
      description: "Курица, овощи, фирменный соус",
      image: "/img/3ca82b67-3f46-44d8-96bf-3a07874d20d8.jpg"
    },
    {
      name: "Мясная",
      price: "300₽",
      description: "Говядина, свежие овощи, специальный соус",
      image: "/img/f04faaa4-88a2-47fb-abe1-fd4d92f43c2a.jpg"
    },
    {
      name: "Острая",
      price: "280₽",
      description: "Курица, перец халапеньо, острый соус",
      image: "/img/3ca82b67-3f46-44d8-96bf-3a07874d20d8.jpg"
    },
    {
      name: "Вегетарианская",
      price: "220₽",
      description: "Фалафель, свежие овощи, хумус",
      image: "/img/f04faaa4-88a2-47fb-abe1-fd4d92f43c2a.jpg"
    }
  ];

  const reviews = [
    {
      name: "Анна К.",
      rating: 5,
      text: "Лучшая шаурма в городе! Всегда свежая и вкусная"
    },
    {
      name: "Дмитрий П.",
      rating: 5,
      text: "Быстрая доставка, горячая еда. Рекомендую!"
    },
    {
      name: "Мария С.",
      rating: 5,
      text: "Заказываю регулярно. Качество всегда на высоте"
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Beef" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-secondary">SHCLO</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#hero" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#menu" className="text-foreground hover:text-primary transition-colors">Меню</a>
            <a href="#delivery" className="text-foreground hover:text-primary transition-colors">Доставка</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:flex">Заказать</Button>
          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </header>

      <section id="hero" className="pt-24 pb-16 px-4 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center min-h-[600px]">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary leading-tight">
              SHAWARMA<br />DELIVERY
            </h1>
            <p className="text-xl text-muted-foreground">
              Свежая шаурма с доставкой за 30 минут
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="text-lg px-8">
                Заказать сейчас
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Меню
              </Button>
            </div>
            <div className="flex gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={20} className="text-primary" />
                <span className="text-sm">30 мин</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Truck" size={20} className="text-primary" />
                <span className="text-sm">Бесплатно от 500₽</span>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <img 
              src="https://v3.fal.media/files/kangaroo/MUZPTf9UJ0snwG8-M51mi_output.png" 
              alt="Shawarma" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary">Меню</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover-scale">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{item.price}</span>
                    <Button>Заказать</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary">Доставка</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Icon name="MapPin" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold">Зоны доставки</h3>
              <p className="text-muted-foreground">Доставляем по всему городу в пределах 10 км</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Icon name="Clock" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold">Время доставки</h3>
              <p className="text-muted-foreground">Среднее время доставки 30 минут</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Icon name="DollarSign" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold">Стоимость</h3>
              <p className="text-muted-foreground">Бесплатно при заказе от 500₽</p>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary">Отзывы</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{review.text}</p>
                  <p className="font-bold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary">Контакты</h2>
          <Card>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                  <span className="text-lg">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  <span className="text-lg">г. Москва, ул. Примерная, 1</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Clock" size={24} className="text-primary" />
                  <span className="text-lg">Ежедневно с 10:00 до 23:00</span>
                </div>
              </div>
              
              <div className="pt-6 border-t space-y-4">
                <h3 className="text-xl font-bold">Оставить заявку</h3>
                <Input placeholder="Ваше имя" />
                <Input placeholder="Телефон" type="tel" />
                <Textarea placeholder="Комментарий к заказу" />
                <Button className="w-full" size="lg">Отправить</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Beef" size={24} className="text-primary" />
            <span className="text-xl font-bold">SHCLO</span>
          </div>
          <p className="text-white/70">© 2024 SHCLO. Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
