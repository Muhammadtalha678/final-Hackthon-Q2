import { CATEGORY_PRODUCTS } from "@/lib/quries";
import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const id = (await params).id // 'a', 'b', or 'c'
        console.log(id);

        if (!id) {
            return NextResponse.json({
                error: true, message: "PRoduct of that Category was Not Found", data: null
            })
        }
        const response = await client.fetch(CATEGORY_PRODUCTS, { id: id })

        if (!response) {
            return NextResponse.json({
                error: true, message: "PRoduct of that Category was Not Found", data: null
            })
        }
        return NextResponse.json({
            error: false, message: "Product Found of provided Category id", data: response
        })

    } catch (error) {
        const er = error as Error
        return NextResponse.json({
            error: true, message: er.message, data: null
        })
    }
}