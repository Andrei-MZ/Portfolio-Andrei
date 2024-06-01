import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
  <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        {/* text */}
        <div className="text-center xl:text-left">
          <span className="text-xl">Front-end Developer</span>
          <h1 className="h1 mb-6">
            Olá sou <br/>
            <span className="text-accent">Andrei Zebrowski</span>
            </h1>
          <p className="max-w-[500px] mb-9 text-white/80">Sou estudando e desenvolvedor Front-end apaixonado por tecnologia e com uma insaciável vontade de aprender.</p>
        </div>
        {/* photo */}
        <div>photo</div>
      </div>
    </div>
  </section>
  );
};

export default Home
