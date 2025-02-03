"use client";

import { useState } from "react";
import { List, Grid, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function ProductToolbar() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [itemsPerPage, setItemsPerPage] = useState("16");
  const [sortBy, setSortBy] = useState("default");

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
        <span className="text-gray-600">Showing 1-{itemsPerPage} of 32 results</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Items per Page */}
        <span className="text-black">Show</span>
        <Input
          type="number"
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(e.target.value)}
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