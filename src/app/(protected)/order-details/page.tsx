// app/order-details/page.tsx
import React from 'react';
import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { auth } from "@clerk/nextjs/server";
import { Sale, ProductDetail } from '@/interfaces/sales'; // Adjust the import path as needed

export const metadata: Metadata = {
    title: "Order Details | Furniro",
    description: "Find best furniture for your home and other places.",
};

const OrderDetail = async () => {
    const user = (await auth()).userId;

    // Fetch all orders for this user
    const orders: Sale[] = await client.fetch(`*[_type == "sales" && customerId == $user]{
    _id,
    product_detail,
    sales_price,
    paymentStatus,
    deliveryStatus,
    deliveryAddress
  }`, { user });

    return (
        <div className="p-4 md:p-8 lg:p-12">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">Your Orders</h1>

            {orders.length === 0 ? (
                <p className="text-center text-gray-500">No orders found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-3 border text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Order ID</th>
                                <th className="px-4 py-3 border text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Products</th>
                                <th className="px-4 py-3 border text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Total Price</th>
                                <th className="px-4 py-3 border text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Payment Status</th>
                                <th className="px-4 py-3 border text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Delivery Status</th>
                                <th className="px-4 py-3 border text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Delivery Address</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {orders.map((order: Sale) => (
                                <tr key={order._id} className="text-center text-sm">
                                    <td className="px-4 py-4 border whitespace-nowrap">{order._id}</td>
                                    <td className="px-4 py-4 border text-left">
                                        {order.product_detail?.map((p: ProductDetail) => (
                                            <div key={p.productId} className="mb-1 last:mb-0">
                                                <span className="font-medium text-gray-900">{p.productName}</span> x {p.quantity_sold} (${p.productPrice})
                                            </div>
                                        ))}
                                    </td>
                                    <td className="px-4 py-4 border whitespace-nowrap">${order.sales_price.toFixed(2)}</td>
                                    <td className="px-4 py-4 border whitespace-nowrap">{order.paymentStatus}</td>
                                    <td className="px-4 py-4 border whitespace-nowrap">{order.deliveryStatus}</td>
                                    <td className="px-4 py-4 border text-left">
                                        {order.deliveryAddress?.name}, {order.deliveryAddress?.address}, {order.deliveryAddress?.city}, {order.deliveryAddress?.country}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default OrderDetail;