'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useClerk, UserButton } from '@clerk/nextjs';

const Sidebar = () => {
    const { user } = useClerk();

    return (
        <div className="w-64 h-screen bg-white shadow-lg p-5 fixed flex flex-col">
            <div className="flex flex-col items-center mb-5">
                <Image src="/images/mainLogo.png" alt="Furniro Logo" width={48} height={48} />
                <h2 className="text-2xl font-bold mt-2">Furniro</h2>
            </div>
            <div className="flex flex-col items-center gap-2 mb-5">
                <UserButton />
                <h2 className="text-lg font-bold">{user?.fullName || 'User'}</h2>
            </div>
            <ul className="flex-grow">
                <li className="mb-3"><Link href="/" className="text-yellow-700 font-semibold hover:underline">Users</Link></li>
                <li className="mb-3"><Link href="/" className="text-yellow-700 font-semibold hover:underline">Products</Link></li>
                <li className="mb-3"><Link href="/" className="text-yellow-700 font-semibold hover:underline">Orders</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;