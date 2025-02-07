import React from 'react'
import "../globals.css";

const AdminLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="max-w-[1440px] mx-auto">

            {children}

        </div>
    )
}

export default AdminLayout
