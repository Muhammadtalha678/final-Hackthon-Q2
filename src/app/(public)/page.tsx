import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <SignedIn>
        <UserButton/>
      </SignedIn>
    </div>
  );
}
