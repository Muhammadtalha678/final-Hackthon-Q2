'use client'
import { Star, StarHalf, Star as StarOutline, ChevronDown } from "lucide-react";
import Link from "next/link";

interface Product {
    id: number;
    name: string;
    price: string;
    rating: number;
    reviews: number;
    image: string;
}

export default function ProductSelection() {
    // const [selectedProduct, setSelectedProduct] = useState<string>("");

    const products: Product[] = [
        {
            id: 1,
            name: "Asgaard Sofa",
            price: "Rs. 250,000.00",
            rating: 4.7,
            reviews: 204,
            image: "/images/cat1.png", // Replace with actual image
        },
        {
            id: 2,
            name: "Outdoor Sofa Set",
            price: "Rs. 224,000.00",
            rating: 4.2,
            reviews: 150,
            image: "/images/cat2.png", // Replace with actual image
        },
    ];

    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        return (
            <div className="flex text-yellow-500">
                {[...Array(fullStars)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                ))}
                {halfStar && <StarHalf size={16} fill="currentColor" />}
                {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
                    <StarOutline key={i} size={16} />
                ))}
            </div>
        );
    };

    return (
        <div className="flex space-x-6 bg-white p-6 rounded-lg shadow-lg">
            {/* Left Section */}
            <div className="w-1/4">
                <h2 className="text-lg font-semibold">Go to Product page for more Products</h2>
                <Link href='/shop'>

                    <button className="mt-2 px-4 py-2 border border-gray-400 rounded-md text-gray-600 hover:bg-gray-100">
                        View More
                    </button>
                </Link>
            </div>

            {/* Products */}
            <div className="flex-1 flex space-x-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-gray-100 p-4 rounded-lg w-1/3">
                        <img src={product.image} alt={product.name} className="w-full rounded-md" />
                        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                        <p className="text-yellow-600 font-bold">{product.price}</p>
                        <div className="flex items-center space-x-2">
                            {renderStars(product.rating)}
                            <span className="text-gray-500 text-sm">{product.reviews} Review</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Section */}
            <div className="w-1/4">
                <h2 className="text-lg font-semibold">Add A Product</h2>
                <div className="relative mt-2">
                    <select
                        className="appearance-none w-full p-2 border rounded-md bg-white"
                    // onChange={(e) => setSelectedProduct(e.target.value)}
                    >
                        <option value="">Choose a Product</option>
                        {products.map((product) => (
                            <option key={product.id} value={product.id}>
                                {product.name}
                            </option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-3 text-gray-500" size={16} />
                </div>
            </div>
        </div>
    );
}