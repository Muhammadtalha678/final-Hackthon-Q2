'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
interface Hero2Props {
  title: string;
  backgroundImage: string;
  // links: { name: string; href: string }[];
}

export const Hero2: React.FC<Hero2Props> = ({ title, backgroundImage }) => {
  const pathname = usePathname()

  const links = [
    { name: "Home", href: '/' },
    { name: pathname.charAt(1).toUpperCase() + pathname.slice(2, pathname.length), href: pathname },
  ]
  return (
    <div className="relative w-full h-56 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div> {/* Overlay */}
      <div className="relative z-10 text-center">
        <Image src='/images/mainLogo.png' width={100} height={100} alt="" />
        <h1 className="text-3xl font-bold text-black">{title}</h1>
        <nav className="mt-2 text-sm text-gray-600">
          {links.map((link, index) => (
            <span key={index}>
              <Link href={link.href} className="font-medium  text-white hover:text-gray-700">
                {link.name}
              </Link>
              {index < links.length - 1 && <span className="mx-2 text-2xl font-medium text-white">›</span>}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
};

