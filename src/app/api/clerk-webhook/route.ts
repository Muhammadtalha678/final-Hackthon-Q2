import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { id, firstName, lastName, email } = await req.json();
        if (!email || !id) {
            return NextResponse.json({ error: true, message: "Invalid Data", data: null })

        }
        const checkUserExists = await client.fetch(`*[_type == "user" && email == $email][0]`, { email })
        if (checkUserExists) {
            return NextResponse.json({ error: true, message: "User Already Exists", data: null })

        }

        const user = await client.create({
            _type: 'user',
            userId: id,
            name: `${firstName} ${lastName}`,
            email: email,
            role: "user",
        })
        return NextResponse.json({ error: true, message: "User created in Sanity", data: user })
    } catch (error) {

        return NextResponse.json({ data: "Error" + error })
    }
}