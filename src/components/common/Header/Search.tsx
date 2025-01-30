import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SearchCompo = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Prevent unnecessary redirects
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${searchQuery.trim()}`);
    }
  };

  // Use effect for real-time search after a delay (debounce-like)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim()) {
        router.push(`/search?q=${searchQuery.trim()}`);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <form className="w-full flex flex-col px-4 py-2 space-x-2" onSubmit={handleSubmit}>
      <div className="flex w-full space-x-2"> {/* Ensures full width layout */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for products..."
          className="flex-1 h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#007580] bg-white text-sm"
        />
        <button
          type="submit"
          className="h-12 px-6 rounded-lg bg-[#f9f1e7] text-black text-sm hover:bg-[#e6b477]"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchCompo;
