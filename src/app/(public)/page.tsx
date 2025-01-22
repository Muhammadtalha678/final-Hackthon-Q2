import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex justify-center">
      <SignedIn>
        <UserButton/>
      </SignedIn>
    </div>
  );
}
