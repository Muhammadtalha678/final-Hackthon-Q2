"use client";
import CheckoutSummary from "./CheckoutSubTotal";
import { useClerk } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form'
import { checkOutValidationSchema, CheckOutValidationSchema } from "@/utils/validations/checkoutValidation";
import { zodResolver } from '@hookform/resolvers/zod'
import DialogLoader from "@/components/DialogLoader/DialogLoader";
import { Button } from "@/components/ui/button";
import { useCart } from '@/context/CartContext'
import { redirect } from "next/navigation";
import { v4 as uuidv4 } from 'uuid'
import { loadStripe } from '@stripe/stripe-js'

export default function CheckoutForm() {
    const { cart } = useCart()

    if (cart.length === 0) {
        redirect('/cart')
    }
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
    const { user } = useClerk();
    const [pending, setPending] = useState(false) //react 19 hook
    const [errorMessage, setErrorMessage] = useState<string>("")
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<CheckOutValidationSchema>({
        resolver: zodResolver(checkOutValidationSchema)
    })
    useEffect(() => { //for initial run or user is change which is rare case
        if (user) { //if user value is available 
            // console.log(user.lastName);

            setValue('firstname', user?.firstName || "")
            setValue('lastname', user?.lastName || "")
            setValue('email', user?.emailAddresses[0].emailAddress || "")
            const totalPrice = cart.reduce((total: number, item) => total + (item.productPrice * item.productQuantity), 0)

            const finalSalesPrice = totalPrice >= 10000 ? totalPrice : totalPrice + 200
            setValue('product_detail', cart.map((e) => (
                {
                    _key: uuidv4(),
                    productId: e.productId, productName: e.productName, productPrice: e.productPrice, quantity_sold: e.productQuantity,
                }
            )) || [])
            setValue('sales_price', finalSalesPrice || 0)
        }
    }, [user, setValue, cart])
    // console.log(pending);


    const customSubmit = async (checkoutData: CheckOutValidationSchema) => {
        // startTransition(() => {

        //     formAction(data)
        // })
        try {
            setPending(true)
            const res = await fetch("/api/payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ formData: checkoutData }),
            })
            if (!res.ok) {
                // this error come when request not found
                throw new Error("Invalid request");
            }
            const data = await res.json();
            if (data.body?.error) {

                throw new Error(data.body?.error);
            }
            const stripe = await stripePromise;
            await stripe?.redirectToCheckout({ sessionId: data.id });
        } catch (error: unknown) {
            if (error instanceof Error) {
                setErrorMessage(error.message)
                console.error("Checkout Error:", error.message)
            }
        } finally {

            setPending(false)
        }
    }

    return (
        // state?.message && !state.error ?
        //     <SuccessDialog />
        //     :
        <div>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <form onSubmit={handleSubmit(customSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {errors.product_detail && (
                    <p className='text-red-600 font-bold pt-1'>{`Product Detail is ${errors.product_detail.message}`}</p>
                )}
                {errors.sales_price && (
                    <p className='text-red-600 font-bold pt-1'>{errors.sales_price.message}</p>
                )}

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
                    <Button variant={'btnSecondary'} className="w-full mt-6 text-white py-2 rounded-lg" disabled={pending}>
                        Place Order
                    </Button>
                </div>
            </form>
            <DialogLoader isOpen={pending} />
            {/* <p>{state?.message}</p> */}
        </div>
    );
}
