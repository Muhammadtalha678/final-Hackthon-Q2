import { client } from "@/sanity/lib/client";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { email, userID } = await req.json()
    if (!email || !userID) return NextResponse.json({ error: true, message: "User ID and email are, required", data: null })
    const user = await client.create({
        _type: 'users',
        user_id: userID,
        email: email,
    })
    return NextResponse.json({
        data: { error: false, message: "User Register Succesfully", data: user }
    })
}