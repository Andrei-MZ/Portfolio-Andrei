import Link from "next/link";
import Nav from './Nav';
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";


export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/">
      <h1 className="text-xl font-semibold">Andrei MZ
      <span className="text-accent">.</span>
      </h1>
      </Link>

      <div className="hidden xl:flex items-center gap-8">
      <Nav/>
      <Link href="https://wa.me/5551999172556" target="_blank">
        <Button>Contrate-me</Button>
      </Link>
      </div>

      <div className="xl:hidden">
        <MobileNav />
      </div>
    </div>
    </header>
    
  );
}
