
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Extracurricular from "@/components/Extracurricular";
import Hobbies from "@/components/Hobbies";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Extracurricular />
        <Hobbies />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
