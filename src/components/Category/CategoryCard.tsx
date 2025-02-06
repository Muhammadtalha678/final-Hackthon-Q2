import Link from "next/link";
import Image from "next/image";

interface CategoryCardProps {
    image: string;
    title: string;
    id: string
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ image, title, id }) => {
    return (
        <div className="bg-white rounded-lg  overflow-hidden">
            <Link href={`/categories/${title.split(' ').join('-').toLowerCase()}/${id}`}>
                <Image width={500} height={500} src={image} alt={title} className="w-full h-64 object-fill rounded-lg" />
            </Link>
            <div className="p-4">
                <h3 className="text-[24px] leading-[36px] font-semibold text-gray-800 text-center">{title}</h3>
            </div>
        </div>
    );
};