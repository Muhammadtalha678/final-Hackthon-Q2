"use server";

// import { client } from "@/sanity/lib/client";
import { CheckOutValidationSchema } from "@/utils/validations/checkoutValidation";

export async function checkoutAction(formData: CheckOutValidationSchema) {
    console.log(formData);



}
