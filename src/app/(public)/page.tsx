// import { Button } from "@/components/ui/button";
// import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, useUser } from "@clerk/nextjs";
import Category from "@/components/home/Category";
import Hero from "@/components/home/Hero";
import OurProducts from "@/components/home/OurProducts";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser()
  // console.log(user?.id);

  return (
    // <div className="flex justify-center items-center">
    //   <h1 className="text-4xl text-green-950">{user ? 'Dashboard' : 'Login'}</h1>
    // </div>
    <div>
      <Hero />
      <Category />
      <OurProducts />
    </div>
  );
}
