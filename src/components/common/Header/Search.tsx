'use client'
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Product } from "@/interfaces/Product";
import { useRouter } from "next/navigation";

const SearchCompo = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [showSuggestionsBox, setShowSuggestionsBox] = useState(false);
  const router = useRouter()
  useEffect(() => {
    const fetchSuggestion = async () => {
      if (searchQuery.trim()) {
        try {

          const response = await client.fetch(`*[_type == "products" && name match $searchQuery]`, { searchQuery })
          if (!response) {
            throw new Error("Error Fetching Products");
          }
          console.log(response);

          setSuggestions(response)
          setShowSuggestionsBox(true)
        } catch (error) {
          const err = error as Error
          throw err;

        }
        setShowSuggestionsBox(true)
      }
      else {
        setShowSuggestionsBox(false)
      }
    }
    const timer = setTimeout(fetchSuggestion, 300);
    return () => clearTimeout(timer)
  }, [searchQuery])



  const handleSuggestionSubmit = () => {
    setShowSuggestionsBox(false)
    router.push(`/search?q=${searchQuery}`)
  }

  return (
    <form className="w-full flex flex-col px-4 py-2 space-x-2" >
      {/* Wrapper to make sure input and suggestions align */}
      <div className="relative w-full">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for products..."
          className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e6b477] bg-white text-sm text-[#e6b477]"
        />

        {showSuggestionsBox &&
          <ul className=" top-full left-0 bg-white border border-gray-300 rounded-lg shadow-md mt-1 z-50 
      w-full max-h-60 overflow-y-auto">
            {
              suggestions.length > 0 ?
                suggestions.map((e, i) => (
                  <li onClick={() => handleSuggestionSubmit()}
                    key={i}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-black"
                  >
                    {
                      e.name
                    }
                  </li>
                )) :
                <li

                  className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-black"
                >
                  No suggesstion
                </li>

            }
          </ul>
        }
      </div>
    </form>


  );
};

export default SearchCompo;
