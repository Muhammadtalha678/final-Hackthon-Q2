import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { client } from '@/sanity/lib/client'
// import { getLocation } from '@/lib/getLocation'

export async function POST(req: Request) {
    const SIGNING_SECRET = process.env.SIGNING_SECRET

    if (!SIGNING_SECRET) {
        throw new Error('Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local')
    }

    // Create new Svix instance with secret
    const wh = new Webhook(SIGNING_SECRET)

    // Get headers
    const headerPayload = await headers()
    const svix_id = headerPayload.get('svix-id')
    const svix_timestamp = headerPayload.get('svix-timestamp')
    const svix_signature = headerPayload.get('svix-signature')

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error: Missing Svix headers', {
            status: 400,
        })
    }

    // Get body
    const payload = await req.json()
    const body = JSON.stringify(payload)

    let evt: WebhookEvent

    // Verify payload with headerss
    try {
        evt = wh.verify(body, {
            'svix-id': svix_id,
            'svix-timestamp': svix_timestamp,
            'svix-signature': svix_signature,
        }) as WebhookEvent
    } catch (err) {
        console.error('Error: Could not verify webhook:', err)
        return new Response('Error: Verification error', {
            status: 400,
        })
    }

    // Do something with payload
    // For this guide, log payload to console
    const userId = evt.data.id
    const eventType = evt.type
    if (eventType === 'user.created') {
        const { email_addresses, username } = evt.data
        const email = email_addresses[0].email_address;
        if (!email) {
            return Response.json({ error: true, message: "Email is missing" }, { status: 400 });
        }

        // Check if user already exists in Sanity
        const sanityUser = await client.fetch(`*[_type == 'user' && email == $email][0]`, { email })
        if (sanityUser) {
            return Response.json({ error: true, message: "User already exists" })
        }
        // const location = await getLocation()
        let country = "Unknown";
        let state = "Unknown";
        let city = "Unknown";
        let zipCode = "Unknown";

        try {
            const response = await fetch(`https://ipapi.co/json`)
            if (!response.ok) throw new Error("Failed to fetch location data");
            const data = await response.json();

            country = data?.country_name || "Unknown";
            state = data?.region || "Unknown";
            city = data?.city || "Unknown";
            zipCode = data?.postal || "Unknown";
        } catch (error) {
            console.error("Location fetch failed:", error);
        }


        // Naya user Sanity me create karein
        try {
            const user = await client.create({
                _type: 'user',
                userId: userId,
                name: `${username}`,
                email: email,
                role: "user",
                country: country,
                state: state,
                city: city,
                zipCode: zipCode,
                // country: data.country_name,
                // state: data.region,
                // city: data.city,
                // zipCode: data.postal
            })
            return Response.json({ error: false, message: "User created in Sanity", data: user }, { status: 200 })

        } catch (error) {
            const err = error as Error
            return Response.json({ error: true, message: err.message, data: null }, { status: 500 })

        }
    }
    if (eventType === 'user.deleted') {
        const getUser = await client.fetch(`*[_type == 'user' && userId == $userId][0]`, { userId })
        if (getUser) {
            try {
                const user = await client.delete(getUser._id)
                return Response.json({ error: false, message: "User Delete Successfully", data: user }, { status: 200 })

            } catch (error) {
                const err = error as Error
                return Response.json({ error: true, message: err.message, data: null }, { status: 500 })

            }
        }
    }
    console.log(`Received webhook with ID ${userId} and event type of ${eventType}`)
    console.log('Webhook payload:', body)

    return new Response('Webhook received', { status: 200 })
}