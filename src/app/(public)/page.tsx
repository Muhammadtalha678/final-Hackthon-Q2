import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center">
      <SignedIn>
        <UserButton/>
      </SignedIn>
    </div>
  );
}
