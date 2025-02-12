"use client";
import { checkoutAction } from "@/app/actions/actions";
import CheckoutSummary from "./CheckoutSubTotal";
import { useClerk } from "@clerk/nextjs";
import { useActionState, useEffect, startTransition } from "react";
import { useForm } from 'react-hook-form'
import { checkOutValidationSchema, CheckOutValidationSchema } from "@/utils/validations/checkoutValidation";
import { zodResolver } from '@hookform/resolvers/zod'
import DialogLoader from "@/components/DialogLoader/DialogLoader";

export default function CheckoutForm() {
    const { user } = useClerk();
    const [state, formAction, pending] = useActionState(checkoutAction, null) //react 19 hook
    console.log(state)
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<CheckOutValidationSchema>({
        resolver: zodResolver(checkOutValidationSchema)
    })
    useEffect(() => { //for initial run or user is change which is rare case
        console.log("sdsdqd");

        if (user) { //if user value is available 
            setValue('firstname', user?.firstName || "")
            setValue('lastname', user?.lastName || "")
            setValue('email', user?.emailAddresses[0].emailAddress || "")
        }
    }, [user, setValue])

    const customSubmit = async (data: CheckOutValidationSchema) => {
        startTransition(() => {
            formAction(data)

        })
    }

    return (
        <div>

            <form onSubmit={handleSubmit(customSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column - Billing Form */}
                <div>
                    {
                        user?.username ?
                            <div className="grid grid-cols-1 gap-4">
                                <div>

                                    <label className="block text-sm font-medium">Full Name</label>
                                    <p className="w-full p-2 border rounded-lg bg-gray-100 text-gray-600">
                                        {user?.username}
                                    </p>
                                </div>
                            </div> :

                            <div className="grid grid-cols-2 gap-4">
                                <div>

                                    <label className="block text-sm font-medium">First Name</label>
                                    <p className="w-full p-2 border rounded-lg bg-gray-100 text-gray-600">
                                        {user?.firstName}
                                    </p>
                                    {errors.firstname && (
                                        <p className='text-red-600 font-bold pt-1'>
                                            {errors.firstname.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Last Name</label>
                                    <p className="w-full p-2 border rounded-lg bg-gray-100 text-gray-600">
                                        {user?.lastName}
                                    </p>
                                    {errors.lastname && (
                                        <p className='text-red-600 font-bold pt-1'>{errors.lastname.message}</p>
                                    )}
                                </div>
                            </div>
                    }


                    <div className="mt-4">
                        <label className="block text-sm font-medium">Email Address</label>
                        <p className="w-full p-2 border rounded-lg bg-gray-100 text-gray-600">
                            {user?.emailAddresses[0].emailAddress}
                        </p>
                        {errors.email && (
                            <p className='text-red-600 font-bold pt-1'>{errors.email.message}</p>
                        )}
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-medium">Phone</label>
                        <input {...register('phone')} name="phone" type="tel" className="w-full p-2 border rounded-lg" />
                    </div>
                    {errors.phone && (
                        <p className='text-red-600 font-bold pt-1'>{errors.phone.message}</p>
                    )}

                    <div className="mt-4">
                        <label className="block text-sm font-medium">Country / Region</label>
                        <p className="w-full p-2 border rounded-lg bg-gray-100 text-gray-600">
                            Pakistan
                        </p>
                        {errors.country && (
                            <p className='text-red-600 font-bold pt-1'>{errors.country.message}</p>
                        )}

                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-medium">Street Address</label>
                        <input {...register('address')} name="address" type="text" className="w-full p-2 border rounded-lg" />
                    </div>
                    {errors.address && (
                        <p className='text-red-600 font-bold pt-1'>{errors.address.message}</p>
                    )}

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                            <label className="block text-sm font-medium">Town / City</label>
                            <p className="w-full p-2 border rounded-lg bg-gray-100 text-gray-600">
                                Karachi
                            </p>
                        </div>
                        {errors.town && (
                            <p className='text-red-600 font-bold pt-1'>{errors.town.message}</p>
                        )}
                        <div>
                            <label className="block text-sm font-medium">Province</label>
                            <p className="w-full p-2 border rounded-lg bg-gray-100 text-gray-600">
                                Sindh
                            </p>
                        </div>
                        {errors.province && (
                            <p className='text-red-600 font-bold pt-1'>{errors.province.message}</p>
                        )}
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-medium">ZIP Code</label>
                        <input {...register('zipcode')} name="zipcode" type="text" className="w-full p-2 border rounded-lg" />
                    </div>
                    {errors.zipcode && (
                        <p className='text-red-600 font-bold pt-1'>{errors.zipcode.message}</p>
                    )}
                </div>

                {/* Right Column - Order Summary */}
                <div className="bg-gray-100 p-6 rounded-lg">
                    <CheckoutSummary />
                    <button
                        type="submit"
                        className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                    >
                        Place Order
                    </button>
                </div>
            </form>
            <DialogLoader isOpen={pending} />
        </div>
    );
}
