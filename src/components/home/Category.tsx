import { CategoryInterface } from "@/interfaces/Category";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";


const Category = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/category`)
    if (!response.ok) throw new Error("Category not Found");

    const {error,message,data}:{error:boolean,message:string,data:CategoryInterface[]} = await response.json()
      console.log(error,message,data);
      
      if (error) {
        console.log("error",error);
        
        throw new Error(message);
        
      }
    
  return (
    <div className="container mx-auto mt-16 px-4 lg:px-16 text-center py-6">
      <h2 className="font-bold text-[32px] leading-[48px]">Browse The Range</h2>
      <p className="mt-2 text-gray-600 font-normal text-[20px] leading-[30px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {
            data.length > 0 ?
            data.map((category, index) => (
                <CategoryCard key={index} id={category._id} image={urlFor(category.image).url()} title={category.title} />
            )) :
            <h1>No Category Not Fund</h1>
            
        }
      </div>
    </div>

  )
}

export default Category

interface CategoryCardProps {
  image: string;
  title: string;
  id:string
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, title,id }) => {
  return (
    <div className="bg-white rounded-lg  overflow-hidden">
      <Link href={`/category/${title.split(' ').join('-').toLowerCase()}/${id}`}>
        <Image width={200} height={200} src={image} alt={title} className="w-full md:h-[480px] h-[360px] object-fill rounded-lg" />
      </Link>
      <div className="p-4">
        <h3 className="text-[24px] leading-[36px] font-semibold text-gray-800 ">{title}</h3>
      </div>
    </div>
  );
};

