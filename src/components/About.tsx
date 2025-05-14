
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          Обо мне
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 animate-stagger">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Icon name="GraduationCap" className="h-6 w-6 text-primary" />
                Образование
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold">Московский педагогический государственный университет</p>
                <p className="text-gray-600">Филологический факультет, с отличием</p>
                <p className="text-gray-500 text-sm">2005-2010</p>
              </div>
              <div>
                <p className="font-semibold">Курсы повышения квалификации</p>
                <p className="text-gray-600">"Современные методики преподавания литературы"</p>
                <p className="text-gray-500 text-sm">2022</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Icon name="Briefcase" className="h-6 w-6 text-primary" />
                Опыт работы
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold">Гимназия №15</p>
                <p className="text-gray-600">Учитель русского языка и литературы высшей категории</p>
                <p className="text-gray-500 text-sm">2015 - настоящее время</p>
              </div>
              <div>
                <p className="font-semibold">Школа №42</p>
                <p className="text-gray-600">Учитель русского языка и литературы</p>
                <p className="text-gray-500 text-sm">2010-2015</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div id="achievements" className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Достижения
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-stagger">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="p-4 bg-accent/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Trophy" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Почетный учитель</h3>
                <p className="text-gray-600 text-center">
                  Награждена знаком "Почетный работник общего образования РФ" за значительные успехи в области образования.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="p-4 bg-accent/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Победитель конкурса</h3>
                <p className="text-gray-600 text-center">
                  Лауреат городского конкурса "Учитель года" в номинации "Инновации в образовании".
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="p-4 bg-accent/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Medal" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Ученики-призеры</h3>
                <p className="text-gray-600 text-center">
                  Подготовила 17 призеров всероссийских олимпиад по русскому языку и литературе.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
