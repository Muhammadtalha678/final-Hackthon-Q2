"use client";
import { useClerk } from "@clerk/nextjs";
import { LogOut, Settings } from "lucide-react";
import { useState } from "react";

export default function CustomUserButton() {
    const { signOut, user, openUserProfile } = useClerk(); // Logout function
    const [isOpen, setIsOpen] = useState(false);

    // If no user is logged in, don't render the button
    if (!user) return null;

    return (
        <div className="">
            {/* Avatar Button with a nice hover effect */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-full transition-all"
            >
                <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full text-gray-800 font-semibold">
                    {user.firstName ? user.firstName[0] : "U"}
                </div>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-40 z-50 mt-2 w-64 bg-white border rounded-md shadow-lg p-4 transition-all">
                    {/* User Info Section */}
                    <div className="flex items-center gap-3 mb-4 border-b pb-3">
                        <div className="w-12 h-12 flex items-center justify-center bg-gray-300 rounded-full text-gray-800 font-semibold">
                            {user.firstName ? user.firstName[0] : "U"}
                        </div>
                        <div>
                            <p className="text-lg font-medium text-gray-800">{user.fullName || "User"}</p>
                            <p className="text-xs text-gray-500">{user.primaryEmailAddress?.emailAddress}</p>
                        </div>
                    </div>

                    {/* List of Actions */}
                    <div className="space-y-2">
                        {/* Settings Button */}
                        <button
                            onClick={() => openUserProfile()}
                            className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                            <Settings className="w-5 h-5" />
                            Manage Account
                        </button>

                        {/* Sign Out Button */}
                        <button
                            onClick={() => signOut()}
                            className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-500 hover:bg-gray-100 rounded-md"
                        >
                            <LogOut className="w-5 h-5" />
                            Sign Out
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
