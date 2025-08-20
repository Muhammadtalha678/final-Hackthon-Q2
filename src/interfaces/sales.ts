// types.ts or app/types/index.ts (create this file)

export interface ProductDetail {
    productId: string;
    productName: string;
    productPrice: number;
    quantity_sold: number;
}

export interface DeliveryAddress {
    name: string;
    address: string;
    city: string;
    country: string;
    zipcode: string;
}

export interface Sale {
    _id: string;
    product_detail: ProductDetail[];
    sales_price: number;
    paymentStatus: "Cash on delivery" | "Paid" | "Failed" | "pending";
    deliveryStatus: "pending" | "processing" | "shipped" | "delivered" | "cancelled" | "returned";
    deliveryAddress: DeliveryAddress;
}