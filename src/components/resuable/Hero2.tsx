
import Image from "next/image";
import Link from "next/link";

interface Hero2Props {
  title: string;
  backgroundImage: string;
  links: { name: string; href: string }[];
}

export const Hero2: React.FC<Hero2Props> = ({ title, backgroundImage, links }) => {
  return (
    <div className="relative w-full h-56 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div> {/* Overlay */}
      <div className="relative z-10 text-center">
      <Image src='/images/mainLogo.png' width={100} height={100} alt=""/>
        <h1 className="text-3xl font-bold text-black">{title}</h1>
        <nav className="mt-2 text-sm text-gray-600">
          {links.map((link, index) => (
            <span key={index}>
              <Link href={link.href} className="font-medium text-black hover:text-gray-700">
                {link.name}
              </Link>
              {index < links.length - 1 && <span className="mx-2">›</span>}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
};

   