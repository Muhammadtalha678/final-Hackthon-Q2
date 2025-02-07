import Link from 'next/link';
import Image from 'next/image'
const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-white shadow-lg p-5 fixed flex flex-col">
            <div className="flex items-center mb-5">
                <Image src="/images/mainLogo.png" alt="Furniro Logo" width={40} height={40} />
                <h2 className="text-2xl font-bold ml-2">Furniro</h2>
            </div>
            <ul className="flex-grow">
                <li className="mb-3"><Link href="/" className="text-yellow-700 font-semibold">Users</Link></li>
                <li className="mb-3"><Link href="/" className="text-yellow-700 font-semibold">Products</Link></li>
                <li className="mb-3"><Link href="/" className="text-yellow-700 font-semibold">Orders</Link></li>
            </ul>
            <div className="mt-auto">
                <button className="bg-yellow-700 text-white py-2 px-4 rounded-lg w-full">Admin</button>
            </div>
        </div>
    );
};

export default Sidebar;
