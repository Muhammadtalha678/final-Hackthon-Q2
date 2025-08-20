import z from 'zod'
export const checkOutValidationSchema = z.object({
    firstname: z
        .string({ message: "Name is required" })
        .min(3, { message: "Name should be at least 3 characters" })
        .optional(),

    lastname: z
        .string({ message: "Last name is required" })
        .min(3, { message: "Name should be at least 3 characters" })
        .optional(),

    username: z
        .string({ message: "User name is required" })
        .min(3, { message: "Name should be at least 3 characters" })
        .optional(),

    email: z
        .string({ message: "Email is required" })
        .email({ message: "Please provide a valid email address" }),

    address: z
        .string({ message: "Address is required" })
        .min(3, { message: "Address should be at least 3 characters" }),

    country: z
        .string({ message: "Country is required" })
        .min(3, { message: "Country should be at least 3 characters" })
        .default("Pakistan"),
    province: z
        .string({ message: "Province is required" })
        .min(3, { message: "Province should be at least 3 characters" })
        .default("Sindh"),

    town: z
        .string({ message: "Town is required" })
        .min(3, { message: "Town should be at least 3 characters" })
        .default("Karachi"),

    zipcode: z
        .string({ message: "Zipcode is required" })
        .min(3, { message: "Zipcode should be at least 3 characters" })
        .max(10, { message: "Zipcode should be not be greate tha 10 characters" })
        .refine((val) => /^[0-9]+$/.test(val), {  // Custom validation using regex
            message: "Zipcode should contain only numbers",
        }), //refine allow to add custom errors for validation

    phone: z
        .string({ message: "Phone is required" })
        .refine((val) => /^03\d{9}$/.test(val), {
            message: "Invalid phone number. Must start with '03' and have 11 digits.",
        }),

    product_detail: z.array(
        z.object({ productId: z.string(), productName: z.string(), productPrice: z.number(), quantity_sold: z.number(), _key: z.string() })
    ),

    sales_price: z.number({ message: "Total Sale is required" })
})

export type CheckOutValidationSchema = z.infer<typeof checkOutValidationSchema>;