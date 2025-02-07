
import { Button } from "@/components/ui/button";
import { headers } from 'next/headers'
import Link from "next/link";
export default async function Unauthorized() {

    return (
        <div className="flex flex-col gap-3 justify-center items-center h-screen">
            <h1 className="text-red-600 text-3xl font-bold">Access Denied</h1>
            <Link href={`/`}>
                <Button variant={'btnSecondary'}>Go Back</Button>
            </Link>
        </div>
    );
}
