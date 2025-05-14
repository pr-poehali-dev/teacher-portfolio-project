
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <span className="text-primary font-montserrat font-bold text-lg md:text-xl">Портфолио педагога</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Обо мне
          </button>
          <button 
            onClick={() => scrollToSection('achievements')}
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Достижения
          </button>
          <button 
            onClick={() => scrollToSection('extracurricular')}
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Внеурочная деятельность
          </button>
          <button 
            onClick={() => scrollToSection('hobbies')}
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Хобби
          </button>
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <Icon name="Menu" className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
