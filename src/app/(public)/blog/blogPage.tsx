import { Search, Calendar, User } from "lucide-react";

const BlogPage = () => {
    const blogs = [
        {
            id: 1,
            title: "Going all-in with millennial design",
            date: "14 Oct 2022",
            category: "Wood",
            author: "Admin",
            image: "/images/cat1.png",
            excerpt:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        },
        {
            id: 2,
            title: "Exploring new ways of decorating",
            date: "14 Oct 2022",
            category: "Handmade",
            author: "Admin",
            image: "/images/cat2.png",
            excerpt:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        },
        {
            id: 3,
            title: "Handmade pieces that took time to make",
            date: "14 Oct 2022",
            category: "Wood",
            author: "Admin",
            image: "/images/cat3.png",
            excerpt:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        },
    ];

    const categories = [
        { name: "Crafts", count: 2 },
        { name: "Design", count: 8 },
        { name: "Handmade", count: 7 },
        { name: "Interior", count: 1 },
        { name: "Wood", count: 6 },
    ];

    const recentPosts = [
        {
            title: "Going all-in with millennial design",
            date: "03 Aug 2022",
            image: "/images/p5.png",
        },
        {
            title: "Exploring new ways of decorating",
            date: "03 Aug 2022",
            image: "/images/p1.png",
        },
        {
            title: "Handmade pieces that took time to make",
            date: "03 Aug 2022",
            image: "/images/p2.png",
        },
        {
            title: "Modern home in Milan",
            date: "03 Aug 2022",
            image: "/images/p3.png",
        },
        {
            title: "Colorful office redesign",
            date: "03 Aug 2022",
            image: "/images/p4.jpg",
        },
    ];

    return (
        <div className="container mx-auto px-6 lg:px-12 py-8">
            <div className="flex flex-col lg:flex-row gap-10">
                {/* Blog Posts */}
                <div className="w-full lg:w-2/3">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="mb-10">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="rounded-lg w-full h-64 object-cover"
                            />
                            <div className="mt-4 flex items-center space-x-4 text-gray-500 text-sm">
                                <User size={16} /> <span>{blog.author}</span>
                                <Calendar size={16} /> <span>{blog.date}</span>
                                <span>📁 {blog.category}</span>
                            </div>
                            <h2 className="text-2xl font-semibold mt-2">{blog.title}</h2>
                            <p className="text-gray-600 mt-2">{blog.excerpt}</p>
                            <a href="#" className="text-gray-900 font-medium mt-4 inline-block border-b-2 border-gray-900">
                                Read more
                            </a>
                        </div>
                    ))}
                </div>

                {/* Sidebar */}
                <div className="w-full lg:w-1/3">
                    {/* Search Bar */}
                    <div className="relative mb-6">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 outline-none"
                        />
                        <Search className="absolute top-3 right-4 text-gray-500" size={18} />
                    </div>

                    {/* Categories */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-4">Categories</h3>
                        <ul className="space-y-2">
                            {categories.map((cat, index) => (
                                <li key={index} className="flex justify-between text-gray-700">
                                    {cat.name} <span className="text-gray-500">{cat.count}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Recent Posts */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
                        <ul className="space-y-4">
                            {recentPosts.map((post, index) => (
                                <li key={index} className="flex items-center space-x-4">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-16 h-16 object-cover rounded-md"
                                    />
                                    <div>
                                        <p className="text-gray-900 text-sm font-medium">{post.title}</p>
                                        <span className="text-gray-500 text-xs">{post.date}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-10">
                <button className="px-4 py-2 bg-yellow-600 text-white rounded-md">1</button>
                <button className="px-4 py-2 border border-gray-300 text-gray-600 mx-2 rounded-md">2</button>
                <button className="px-4 py-2 border border-gray-300 text-gray-600 mx-2 rounded-md">3</button>
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">Next</button>
            </div>
        </div>
    );
};

export default BlogPage;