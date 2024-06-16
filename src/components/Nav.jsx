"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "sobre",
        path: "/sobre",
    },
    {
        name: "trabalho",
        path: "/trabalho",
    },
];

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                const isActive = link.path === pathname;
                return (
                    <Link 
                        href={link.path} 
                        key={index} 
                        className={`capitalize font-medium hover:text-accent transition-all ${isActive ? 'text-accent border-b-2 border-accent' : ''}`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;
