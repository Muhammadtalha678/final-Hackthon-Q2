import { ALL_CATEGORY_QUERY } from "@/lib/quries";
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await client.fetch(ALL_CATEGORY_QUERY)
        return NextResponse.json({
            error:false,message:"Data Fetch Successfully",data:response
        })
    } catch (error) {
        const err = error as Error
        return NextResponse.json({
            error:true,message:err.message,data:null
        })
    }
}