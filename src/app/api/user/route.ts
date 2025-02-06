import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { email, userId, userName } = await req.json()

        if (!email || !userId || !userName) return NextResponse.json({ error: true, message: "User Name USer ID and email are, required", data: null })

        // Check if user already exists in Sanity
        const existingUser = await client.fetch(`*[_type == "user" && userId == $userId][0]`, { userId });

        if (existingUser) {
            return NextResponse.json({
                error: false,
                message: "User already exists",
                data: existingUser,
            });
        }

        // Create new user
        const newUser = await client.create({
            _type: "user",
            userId: userId,
            userName: userName,// Clerk ID
            email: email,
            role: "user", // Default role
            city: "Karachi",
            state: "Sindh",
            country: "Pakistan",
        });
        return NextResponse.json({
            data: { error: false, message: "User Register Succesfully", data: newUser }
        })
    } catch (error) {
        const err = error as Error
        return NextResponse.json({
            error: true,
            message: err.message,
            data: null,
        });
    }
}