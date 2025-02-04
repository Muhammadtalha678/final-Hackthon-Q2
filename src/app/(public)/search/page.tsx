import { client } from '@/sanity/lib/client'
import React from 'react'

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
