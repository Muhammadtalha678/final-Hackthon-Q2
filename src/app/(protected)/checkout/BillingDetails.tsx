'use client'
import { useClerk } from "@clerk/nextjs";
import { useState } from "react";
import { useForm } from 'react-hook-form'

export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    companyName: string;
    country: string;
    address: string;
    town: string;
    province: string;
    zipcode: string;
    phone: string;
    additionalInfo: string;
}

export default function BillingDetails() {
    const { user } = useClerk()

    // create object of information using use state
    const [formData, setFormData] = useState({
        firstName: user?.firstName || '',
        lastName: user?.lastName || '',
        email: user?.emailAddresses[0]?.emailAddress || '',
        country: 'Pakistan', // set by default to Pakistan
        address: '',
        town: 'Karachi', // set by default to Karachi
        province: 'Sindh', // set by default to Sindh
        zipcode: '',
        phone: '',
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const customSubmit = (data: Partial<FormData>) => {
        console.log("data", data);

        setFormData((pre) => (
            {
                ...pre, ...data
            }
        ))

    }
    console.log(formData);
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

                {/* <div className="mt-4">
                <label className="block text-sm font-medium">Company Name (Optional)</label>
                <input type="text" className="w-full p-2 border rounded-lg" />
            </div> */}

                <div className="mt-4">
                    <label className="block text-sm font-medium">Country / Region</label>
                    <p className="cursor-not-allowed w-full p-2 border rounded-lg bg-gray-100 text-gray-600">{formData.country || `Pakistan`}</p>
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium">Street Address</label>
                    <input {...register('address', { required: true })}
                        type="text" className="w-full p-2 border rounded-lg" name="address"
                    />
                </div>
                {errors.address && errors.address.type === 'required' && (
                    <p className='text-red-600 font-bold pt-1'>Address is Required</p>
                )}

                <div className="mt-4">
                    <label className="block text-sm font-medium">Town / City</label>
                    <p className="cursor-not-allowed w-full p-2 border rounded-lg bg-gray-100 text-gray-600">{formData.town || `Karachi`}</p>
                </div>


                <div className="mt-4">
                    <label className="block text-sm font-medium">Province</label>
                    <p className="cursor-not-allowed w-full p-2 border rounded-lg bg-gray-100 text-gray-600">{formData.province || `Sindh`}</p>
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium">ZIP Code</label>
                    <input {...register('zipcode', { required: true })}
                        type="text" className="w-full p-2 border rounded-lg" name="zipcode" />
                </div>
                {errors.zipcode && errors.zipcode.type === 'required' && (
                    <p className='text-red-600 font-bold pt-1'>Zip code is Required</p>
                )}

                <div className="mt-4">
                    <label className="block text-sm font-medium">Phone</label>
                    <input {...register('phone', { required: true })}
                        type="text" className="w-full p-2 border rounded-lg" name="phone" />
                </div>
                {errors.phone && errors.phone.type === 'required' && (
                    <p className='text-red-600 font-bold pt-1'>Phone is Required</p>
                )}

                <div className="mt-4">
                    <label className="block text-sm font-medium">Email Address</label>
                    <p className="cursor-not-allowed w-full p-2 border rounded-lg bg-gray-100 text-gray-600">{user?.emailAddresses[0].emailAddress}</p>
                </div>
                {/* <div className="mt-4">
                <label className="block text-sm font-medium">Additional Information</label>
                <textarea className="w-full p-2 border rounded-lg bg-gray-100" placeholder="Additional information"></textarea>
            </div> */}
                {/* <button type="submit">Submit</button> */}
            </form>

        </div>
    );
}
