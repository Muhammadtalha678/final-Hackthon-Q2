// components/SaveUserData.js
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function SaveUserData() {
    const { user, isLoaded, isSignedIn } = useUser(); // Get user details from Clerk

    useEffect(() => {
        // Only call the API if the user is signed in and data is loaded
        if (isSignedIn && isLoaded) {
            // Make an API call to save user data to Sanity
            fetch("/api/save-user-to-sanity", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: user.id, // Clerk User ID
                    email: user.primaryEmailAddress?.emailAddress, // Clerk Email
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("User data saved to Sanity", data);
                })
                .catch((error) => {
                    console.error("Error saving user data", error);
                });
        }
    }, [user, isLoaded, isSignedIn]); // Trigger the effect whenever user data changes

    return null; // This component doesn't need to render anything
}
