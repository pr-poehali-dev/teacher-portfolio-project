
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Иванова М.А.</h3>
            <p className="max-w-xs">
              Учитель русского языка и литературы высшей категории. Педагогический стаж: 15 лет.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Контакты</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Icon name="Mail" className="h-5 w-5" />
                <span>ivanova.ma@school.edu</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" className="h-5 w-5" />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" className="h-5 w-5" />
                <span>Гимназия №15, г. Москва</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Социальные сети</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Icon name="Vk" className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Icon name="MessageCircle" className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Icon name="YoutubeIcon" className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-white/80">
              Подписывайтесь на мои профессиональные аккаунты
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} Портфолио педагога. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
