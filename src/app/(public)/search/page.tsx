import { client } from '@/sanity/lib/client'
import { Metadata } from 'next';
import React from 'react'


export async function generateMetadata({ searchParams }: { searchParams: Promise<{ q: string }> }): Promise<Metadata> {
    const { q } = await searchParams
    const searchQuery = q ? `Results for "${q}"` : "Search";

    return {
        title: `${searchQuery} | Furniro`,
    };
}

const Search = async ({ searchParams }: { searchParams: Promise<{ q: string }> }) => {
    const { q } = await searchParams
    const searchProducts = await client.fetch(`*[_type == "products" && name match $q]`, { q })
    console.log(searchProducts);

    return (
        <div>

        </div>
    )
}

export default Search
