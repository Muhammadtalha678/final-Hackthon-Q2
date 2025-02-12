"use server";

import { CheckOutValidationSchema } from "@/utils/validations/checkoutValidation";

export async function checkoutAction(prevState: unknown, formData: CheckOutValidationSchema) {
    console.log(prevState, formData);


}
