
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-accent/50 to-background py-20 md:py-28">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 animate-stagger">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Иванова Мария Александровна
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Учитель русского языка и литературы высшей категории
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            Более 15 лет помогаю ученикам находить вдохновение в мире литературы
            и совершенствовать владение русским языком.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary hover:bg-primary/90">
              Связаться со мной
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Мои публикации
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -z-10 rounded-full bg-secondary/50 w-72 h-72 md:w-80 md:h-80 -top-5 -left-5"></div>
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Фото учителя" 
              className="rounded-xl w-72 h-72 md:w-80 md:h-80 object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
