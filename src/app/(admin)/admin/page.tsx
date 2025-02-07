import Sidebar from '@/components/Admin/SideBar'
import React from 'react'

const AdminHomepage = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="ml-64 p-5 w-full">
                <h1 className="text-3xl font-bold mb-5">Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white p-5 shadow rounded-lg">
                        <h2 className="text-xl font-semibold text-yellow-700">Users</h2>
                        <p className="text-2xl font-bold">100</p>
                    </div>
                    <div className="bg-white p-5 shadow rounded-lg">
                        <h2 className="text-xl font-semibold text-yellow-700">Products</h2>
                        <p className="text-2xl font-bold">250</p>
                    </div>
                    <div className="bg-white p-5 shadow rounded-lg">
                        <h2 className="text-xl font-semibold text-yellow-700">Pending Orders</h2>
                        <p className="text-2xl font-bold">30</p>
                    </div>
                    <div className="bg-white p-5 shadow rounded-lg">
                        <h2 className="text-xl font-semibold text-yellow-700">Completed Orders</h2>
                        <p className="text-2xl font-bold">120</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminHomepage
