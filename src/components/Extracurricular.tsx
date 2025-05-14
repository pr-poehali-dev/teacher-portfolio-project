
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Extracurricular = () => {
  return (
    <section id="extracurricular" className="section bg-accent/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          Внеурочная деятельность
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-stagger">
          <div className="card group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Icon name="BookOpen" className="h-8 w-8 text-primary" />
              </div>
              <Badge className="bg-secondary text-primary">2020 - сейчас</Badge>
            </div>
            <h3 className="text-xl font-semibold mb-2">Литературный клуб "Живое слово"</h3>
            <p className="text-gray-600 mb-4">
              Еженедельные встречи с учениками 8-11 классов для обсуждения литературных произведений,
              развития навыков анализа текста и творческих способностей.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-background">Чтение</Badge>
              <Badge variant="outline" className="bg-background">Дискуссия</Badge>
              <Badge variant="outline" className="bg-background">Творчество</Badge>
            </div>
          </div>
          
          <div className="card group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Icon name="PenTool" className="h-8 w-8 text-primary" />
              </div>
              <Badge className="bg-secondary text-primary">2018 - сейчас</Badge>
            </div>
            <h3 className="text-xl font-semibold mb-2">Школьная газета "Перспектива"</h3>
            <p className="text-gray-600 mb-4">
              Руководство школьной редакцией. Ученики пробуют себя в журналистике, 
              развивают навыки письма и работы в команде.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-background">Журналистика</Badge>
              <Badge variant="outline" className="bg-background">Редактирование</Badge>
              <Badge variant="outline" className="bg-background">Командная работа</Badge>
            </div>
          </div>
          
          <div className="card group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Icon name="Theater" className="h-8 w-8 text-primary" />
              </div>
              <Badge className="bg-secondary text-primary">2019 - сейчас</Badge>
            </div>
            <h3 className="text-xl font-semibold mb-2">Школьный театр "Вдохновение"</h3>
            <p className="text-gray-600 mb-4">
              Постановка литературных произведений школьной программы. 
              Ежегодно проводим 3-4 представления для учеников, родителей и гостей школы.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-background">Актерское мастерство</Badge>
              <Badge variant="outline" className="bg-background">Сценография</Badge>
              <Badge variant="outline" className="bg-background">Выступления</Badge>
            </div>
          </div>
          
          <div className="card group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Icon name="Rocket" className="h-8 w-8 text-primary" />
              </div>
              <Badge className="bg-secondary text-primary">2021 - сейчас</Badge>
            </div>
            <h3 className="text-xl font-semibold mb-2">Олимпиадная подготовка</h3>
            <p className="text-gray-600 mb-4">
              Индивидуальные и групповые занятия для подготовки учеников к олимпиадам 
              по русскому языку и литературе различных уровней.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-background">Углубленное изучение</Badge>
              <Badge variant="outline" className="bg-background">Практические занятия</Badge>
              <Badge variant="outline" className="bg-background">Конкурсы</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
