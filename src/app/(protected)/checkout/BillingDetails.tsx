'use client'
import { useClerk } from "@clerk/nextjs";
import { useState } from "react";
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckOutValidationSchema, checkOutValidationSchema } from "@/utils/validations/checkoutValidation";
export default function BillingDetails() {
    const { user } = useClerk()

    const { register, handleSubmit, formState: { errors } } = useForm<CheckOutValidationSchema>({
        resolver: zodResolver(checkOutValidationSchema),
        defaultValues: {
            firstname: user?.firstName || "",
            lastname: user?.lastName || ""
        }
    })

    const customSubmit = (data: CheckOutValidationSchema) => {
        console.log("data", data);
    }
    return (
        <div className="">
            <h2 className="text-2xl font-bold mb-6">Billing details</h2>

            <form id="billingForm" onSubmit={handleSubmit(customSubmit)}>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium">First Name</label>
                        <p className="cursor-not-allowed w-full p-2 border rounded-lg bg-gray-100 text-gray-600">{user?.firstName || 'N/A'}</p>

                    </div>
                    <div>
                        <label className="block text-sm font-medium">Last Name</label>
                        <p className=" w-full p-2 border rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed">{user?.lastName || 'N/A'}</p>
                    </div>
                </div>
                <div className="mt-4">
                    <label className="block text-sm font-medium">Email Address</label>
                    <p className="cursor-not-allowed w-full p-2 border rounded-lg bg-gray-100 text-gray-600">{user?.emailAddresses[0].emailAddress}</p>
                </div>
                <div className="mt-4">
                    <label className="block text-sm font-medium">Phone</label>
                    <input {...register("phone")}
                        type="tel" className="w-full p-2 border rounded-lg" name="phone" />
                </div>
                {errors.phone && (
                    <p className='text-red-600 font-bold pt-1'>{errors.phone.message}</p>
                )}

                <div className="mt-4">
                    <label className="block text-sm font-medium">Country / Region</label>
                    <p className="cursor-not-allowed w-full p-2 border rounded-lg bg-gray-100 text-gray-600">{`Pakistan`}</p>
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium">Street Address</label>
                    <input {...register('address')}
                        type="text" className="w-full p-2 border rounded-lg" name="address"
                    />
                </div>
                {errors.address && (
                    <p className='text-red-600 font-bold pt-1'>{errors.address.message}</p>
                )}

                <div className="mt-4">
                    <label className="block text-sm font-medium">Town / City</label>
                    <p className="cursor-not-allowed w-full p-2 border rounded-lg bg-gray-100 text-gray-600">{`Karachi`}</p>
                </div>


                <div className="mt-4">
                    <label className="block text-sm font-medium">Province</label>
                    <p className="cursor-not-allowed w-full p-2 border rounded-lg bg-gray-100 text-gray-600">{`Sindh`}</p>
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium">ZIP Code</label>
                    <input {...register('zipcode')}
                        type="text" className="w-full p-2 border rounded-lg" name="zipcode" />
                </div>
                {errors.zipcode && (
                    <p className='text-red-600 font-bold pt-1'>{errors.zipcode.message}</p>
                )}
                {/* <button type="submit">Submit</button> */}
            </form>

        </div>
    );
}

