
import Icon from "@/components/ui/icon";

const Hobbies = () => {
  return (
    <section id="hobbies" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          Хобби и увлечения
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-stagger">
          {/* Первая колонка с фото */}
          <div className="md:col-span-1 space-y-6">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Чтение книг" 
                className="w-full h-64 object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1599050751991-95f756839012?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Путешествия" 
                className="w-full h-64 object-cover transition-transform hover:scale-105"
              />
            </div>
          </div>
          
          {/* Хобби карточки */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="card flex flex-col items-center text-center group">
              <div className="p-3 bg-accent rounded-full mb-4 group-hover:bg-accent/70 transition-colors">
                <Icon name="BookOpen" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Литература</h3>
              <p className="text-gray-600">
                Люблю зарубежную классику и современную русскую прозу. Участвую в книжном клубе 
                и пишу собственные критические заметки.
              </p>
            </div>
            
            <div className="card flex flex-col items-center text-center group">
              <div className="p-3 bg-accent rounded-full mb-4 group-hover:bg-accent/70 transition-colors">
                <Icon name="PlaneTakeoff" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Путешествия</h3>
              <p className="text-gray-600">
                Посетила более 20 стран. Особенно люблю места, связанные с литературой и 
                историей. Веду блог о своих путешествиях.
              </p>
            </div>
            
            <div className="card flex flex-col items-center text-center group">
              <div className="p-3 bg-accent rounded-full mb-4 group-hover:bg-accent/70 transition-colors">
                <Icon name="PenLine" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Каллиграфия</h3>
              <p className="text-gray-600">
                Изучаю разные стили письма. Создаю поздравительные открытки и 
                сертификаты с уникальным рукописным текстом.
              </p>
            </div>
            
            <div className="card flex flex-col items-center text-center group">
              <div className="p-3 bg-accent rounded-full mb-4 group-hover:bg-accent/70 transition-colors">
                <Icon name="Utensils" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Кулинария</h3>
              <p className="text-gray-600">
                Экспериментирую с рецептами разных стран. Регулярно провожу 
                кулинарные вечера для друзей и коллег.
              </p>
            </div>
          </div>
        </div>
        
        {/* Цитата */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="text-6xl text-primary/20 mb-4">"</div>
          <blockquote className="text-xl md:text-2xl italic text-gray-700 mb-4">
            Учитель живет до тех пор, пока учится сам. Как только он перестает учиться, в нем умирает учитель.
          </blockquote>
          <cite className="text-sm text-gray-500">— К.Д. Ушинский</cite>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
