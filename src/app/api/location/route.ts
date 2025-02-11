import { getLocation } from "@/lib/getLocation";
import { NextResponse } from "next/server";

//create thi api to fetch location in frontend securly 

export async function GET() {
    try {
        const { country, region, city, postal } = await getLocation()
        return NextResponse.json({
            error: false, message: "LocationFetch Successfully", data: { country, region, city, postal }
        })
    } catch (error) {
        const err = error as Error
        return NextResponse.json({
            error: true, message: err.message, data: null
        })

    }
}