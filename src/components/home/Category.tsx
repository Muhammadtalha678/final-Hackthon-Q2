import { CategoryInterface } from "@/interfaces/Category";
import { urlFor } from "@/sanity/lib/image";
import CategoryCardSkeleton from "../Skeletons/Category/CategoryCardSkeleton";
import { CategoryCard } from "../Category/CategoryCard";
import Link from "next/link";
import { Button } from "../ui/button";


const Category = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/category`)
  if (!response.ok) throw new Error("Category not Found");

  const { error, message, data }: { error: boolean, message: string, data: CategoryInterface[] } = await response.json()
  // console.log(error,message,data);

  if (error) {
    console.log("error", error);

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
            data.slice(0, 3).map((category, index) => (
              <CategoryCard key={index} id={category._id} image={urlFor(category.image).url()} title={category.title} />
            )) :
            [...Array(3)].map((_, index) => (
              <CategoryCardSkeleton key={index} />
            ))
        }
      </div>
      {
        data.length > 0 &&
        <Link href={'/categories'}>
          <Button variant={'btnPrimary'} className='mt-5'>Show More</Button>
        </Link>
      }
    </div>

  )
}

export default Category



