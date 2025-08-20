import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { } from '@clerk/nextjs'
import { client } from "./sanity/lib/client";

// define route for protected and admin route 
const isProtectedRoutes = createRouteMatcher(['/shipment', '/cart', '/checkout', '/order-details', '/admin/:path*'])
const isAdminRoute = createRouteMatcher('/admin/:path*')

export default clerkMiddleware(async (auth, req) => {
    const url = new URL(req.url)  //to get current pathname
    const user = (await auth()).userId

    //  Agar protected route hai, to authentication required hai
    if (isProtectedRoutes(req)) {
        await auth.protect()
    }

    // Agar admin route hai, tabhi Sanity se role fetch karo aur match kro...
    if (isAdminRoute(req)) {

        //   Sanity se user ka role fetch karo
        const sanityUser = await client.fetch(`*[_type == "user" && userId == $user][0]`, { user });


        // Agar user "Admin" nahi hai, to unauthorized page pe bhej do
        if (url.pathname === '/admin' && sanityUser?.role !== 'admin') {
            return NextResponse.redirect(new URL('/unauthorized ', req.url))

        }
    }

    // ya srf checkout pr chly gi route ky liye ha
    if (url.pathname === '/checkout' && req.method === "GET") {
        // console.log(url.pathname);
        //get previous route where it come from
        const referrer = req.headers.get('referer')
        // console.log(!referrer); if user come from unkonu=wn url
        // console.log(!referrer?.includes('/cart')); //if previous route not contain '/cart' then also redirect
        // to cart

        if (!referrer || !referrer.includes('/cart')) {
            // console.log(!referrer?.includes('/cart'));
            return Response.redirect(new URL('/cart', req.url))
        }

    }

    // Proceed with the request if no redirection is needed
    return NextResponse.next()
});



export const config = {
    matcher: [
        '/admin/:path*',
        "/shipment",
        "/cart",
        "/checkout",
        "/order-details",
        '/api/(.*)', // Always run for API routes
    ],
};