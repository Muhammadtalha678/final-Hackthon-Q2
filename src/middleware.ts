import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";

const isProtectedRoutes = createRouteMatcher(['/shipment', '/cart', '/checkout'])

export default clerkMiddleware(async (auth, req) => {
    const url = new URL(req.url)
    if (isProtectedRoutes(req)) await auth.protect()

    if (url.pathname === '/checkout') {
        console.log(url.pathname);
        //get previous route where it come from 
        const referrer = req.headers.get('referer')
        // console.log(!referrer); if user come from unkonu=wn url
        console.log(!referrer?.includes('/cart')); //if previous route not contain '/cart' then also redirect
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
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};