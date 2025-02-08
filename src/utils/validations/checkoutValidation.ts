import z from 'zod'
export const checkOutValidationSchema = z.object({
    firstname: z
        .string({ message: "Name is required" })
        .min(3, { message: "Name should be at least 3 characters" }),
    lastname: z
        .string({ message: "Last name is required" })
        .min(3, { message: "Name should be at least 3 characters" }),

    email: z
        .string({ message: "Email is required" })
        .email({ message: "Please provide a valid email address" }),

    country: z
        .string({ message: "Country is required" })
        .min(3, { message: "Country should be at least 3 characters" }),

    address: z
        .string({ message: "Address is required" })
        .min(3, { message: "Address should be at least 3 characters" }),

    town: z
        .string({ message: "Town is required" })
        .min(3, { message: "Town should be at least 3 characters" }),

    province: z
        .string({ message: "Province is required" })
        .min(3, { message: "Province should be at least 3 characters" }),

    zipcode: z
        .string({ message: "Country is required" })
        .min(3, { message: "Country should be at least 3 characters" })
        .refine((val) => /^[0-9]+$/.test(val), {  // Custom validation using regex
            message: "Zipcode should contain only numbers",
        }), //refine allow to add custom errors for validation

    phone: z
        .string()
        .refine((val) => /^03\d{9}$/.test(val), {
            message: "Invalid Pakistani phone number. Must start with '03' and have 11 digits.",
        })
})

export type CheckOutValidationSchema = z.infer<typeof checkOutValidationSchema>;