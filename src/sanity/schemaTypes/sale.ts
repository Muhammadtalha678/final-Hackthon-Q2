export default {
    name: "sales", // Collection name in Sanity
    type: "document", // This tells Sanity it’s a main schema
    title: "Sales",
    fields: [
        {
            name: "customerId",
            type: "string",
            title: "Customer ID",
        },
        {
            name: "product_detail",
            type: "array",
            title: "Product Detail",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "productId", type: "string", title: "Product ID" },
                        { name: "productName", type: "string", title: "Product Name" },
                        { name: "productPrice", type: "number", title: "Product Price" },
                        { name: "quantity_sold", type: "number", title: "Quantity Sold" },
                    ],
                },
            ],
        },
        {
            name: "sales_price",
            type: "number",
            title: "Sales Price",
        },
        {
            name: "paymentStatus",
            type: "string",
            title: "Payment Status",
            options: {
                list: ["Cash on delivery", "Paid", "Failed", "pending"], // Dropdown options
            },
        },
        {
            name: "deliveryStatus",
            type: "string",
            title: "Delivery Status",
            options: {
                list: ["pending", "processing", "shipped", "delivered", "cancelled", "returned"], // Dropdown options
            },

        },
        {
            name: "deliveryAddress",
            type: "object",
            title: "Delivery Address",
            fields: [
                { name: "name", type: "string", title: "Name" },
                { name: "address", type: "string", title: "Address" },
                { name: "city", type: "string", title: "City" },
                { name: "country", type: "string", title: "Country" },
                { name: "zipcode", type: "string", title: "Zip Code" },
            ],
        },
    ],
};
