// app/not-found.tsx
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
            <div className="max-w-md text-center">
                <h1 className="text-[80px] leading-[100px] font-bold text-gray-800">404</h1>
                <h2 className="text-[32px] font-semibold text-gray-700">Page Not Found</h2>
                <p className="text-gray-600 mt-2 text-lg">
                    Oops! The page you are looking for does not exist.
                </p>
                <Link href="/">
                    <button className="mt-6 px-6 py-3 bg-gray-800 text-white text-lg font-medium rounded-lg transition hover:bg-gray-900">
                        Go to Homepage
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
