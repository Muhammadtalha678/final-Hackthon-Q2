'use client'
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
const Pagination = ({ totalPages }: { totalPages: number }) => {
  const router = useRouter()
  const searchParam = useSearchParams()

  const currentPage = searchParam.get('page') || '1'
  const perPage = searchParam.get('perPage') || '8'
  return (
    <nav aria-label="Page navigation example" className="flex justify-center mb-10">
      <ul className="inline-flex items-center space-x-2 text-sm">
        {
          Number(currentPage) > 1 &&
          <li>
            <button onClick={() => router.push(`/shop?page=${Number(currentPage) - 1}&perPage=${perPage}`)}
              className="flex items-center justify-center px-4 py-2 bg-[#F5F1EB] text-black font-medium rounded-md">
              Prev
            </button>
          </li>
        }

        {
          Array(totalPages).fill(null).map((_ele, ind) => (
            <li key={ind}>
              <button onClick={() => router.push(`/shop?page=${ind + 1}&perPage=${perPage}`)} className={`flex items-center justify-center px-4 py-2 font-medium rounded-md
                 ${Number(currentPage) === ind + 1 ? 'bg-[#B08A47] text-white' : 'bg-[#F5F1EB] text-black'}`}>
                {/* 'bg-[#B08A47] text-white':'"bg-[#F5F1EB] text-black' */}
                {ind + 1}
              </button>
            </li>
          ))
        }

        <li>
          <button onClick={() => router.push(`/shop?page=${Number(currentPage) + 1}&perPage=${perPage}`)} disabled={Number(currentPage) === totalPages}
            className="flex items-center justify-center px-4 py-2 bg-[#F5F1EB] text-black font-medium rounded-md">
            Next
          </button>
        </li>

      </ul>
    </nav>
  );
};

export default Pagination;
