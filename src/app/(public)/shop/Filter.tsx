"use client";

import { useEffect, useState } from "react";
import { List, Grid, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

export default function ProductToolbar({ totalLength }: { totalLength: number }) {
  const searchParam = useSearchParams()
  const router = useRouter()

  const currentPage = searchParam.get('page') || '1'
  const perPage = searchParam.get('perPage') || '8'
  const sortedBy = searchParam.get('sortBy') || 'default'
  const [view, setView] = useState<"grid" | "list">("grid");
  const [itemsPerPage, setItemsPerPage] = useState(Number(perPage));

  const [sortBy, setSortBy] = useState(sortedBy);


  const startIndex = (Number(currentPage) - 1) * Number(perPage) + 1
  //  (1-1)*8 + 1 => 0+1 = 1
  //  (2-1)*8 + 1 => 8+1 = 9
  const endIndex =
    startIndex + Number(perPage) > totalLength ? totalLength : startIndex + Number(perPage) - 1
  // 1       +        7        >      10     ?      10     : 1          +         7        - 1
  // 8       +        7        >      10     ?      10    
  useEffect(() => {
    if (itemsPerPage !== 8) {
      const timer = setTimeout(() => {
        router.push(`/shop?page=${Number(currentPage)}&perPage=${itemsPerPage}`)
      }, 200);

      return () => clearTimeout(timer)
    }

  }, [itemsPerPage])
  useEffect(() => {
    if (sortBy !== 'default') {
      const timer = setTimeout(() => {
        router.push(`/shop?page=${Number(currentPage)}&perPage=${itemsPerPage}&sortBy=${sortBy}`)
      }, 200);

      return () => clearTimeout(timer)

    }
  }, [sortBy])
  return (
    <div className="flex items-center justify-between bg-[#f9f3eb] p-4 rounded-lg mb-10">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        {/* Filter Button */}
        <Button variant="outline">
          <Filter className="w-5 h-5 mr-2" />
          Filter
        </Button>

        {/* View Toggle */}
        <button onClick={() => setView("grid")} className={`${view === "grid" ? "text-black" : "text-gray-500"} p-2`}>
          <Grid className="w-5 h-5" />
        </button>
        <button onClick={() => setView("list")} className={`${view === "list" ? "text-black" : "text-gray-500"} p-2`}>
          <List className="w-5 h-5" />
        </button>

        {/* Results Count */}
        <span className="text-gray-600">Showing {startIndex}-{endIndex} of {totalLength} results</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Items per Page */}
        <span className="text-black">Show</span>
        <Input
          type="number"
          value={itemsPerPage}
          onChange={(e) => {
            const value = Number(e.target.value)
            if (value < 1) setItemsPerPage(1)
            else if (value > totalLength) setItemsPerPage(10)
            else
              setItemsPerPage(Number(e.target.value));
          }}
          className="w-16 text-center"
        />

        {/* Sorting Dropdown */}
        <span className="text-black">Sort by</span>
        <Select onValueChange={setSortBy} defaultValue={sortBy}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Default" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="popularity">Popularity</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}