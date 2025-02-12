// schemas/user.ts
import { Rule } from '@sanity/types';

export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        {
            name: 'userId',
            title: 'User ID',
            type: 'string',
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'name',
            title: 'User Name',
            type: 'string',
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule: Rule) => Rule.required().email(),
        },
        {
            name: 'role',
            title: 'Role',
            type: 'string',
            options: {
                list: [
                    { title: 'Admin', value: 'admin' },
                    { title: 'User', value: 'user' },
                ],
            },
            validation: (Rule: Rule) => Rule.required().required(),
            initialValue: 'User', // Default value
        },

        {
            name: 'address',
            title: 'Address',
            type: 'string',
            validation: (Rule: Rule) => Rule.optional(),
        },
        {
            name: 'city',
            title: 'City',
            type: 'string',
            initialValue: 'Karachi',

        },
        {
            name: 'state',
            title: 'Province',
            type: 'string',
            initialValue: 'Sindh', // Default value

        },
        {
            name: 'country',
            title: 'Country',
            type: 'string',
            initialValue: 'Pakistan', // Default value

        },
        {
            name: 'zipCode',
            title: 'Zip Code',
            type: 'string',
            validation: (Rule: Rule) => Rule.optional(),
        },
        {
            name: 'phoneNumber',
            title: 'Phone Number',
            type: 'string',
            validation: (Rule: Rule) => Rule.optional(),
        },
        {
            name: 'orders',
            title: 'Orders',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'orderId',
                            title: 'Order ID',
                            type: 'string',
                            validation: (Rule: Rule) => Rule.required(),
                        },
                        {
                            name: 'productId',
                            title: 'Product ID',
                            type: 'string',
                        },
                        {
                            name: 'productName',
                            title: 'Product Name',
                            type: 'string',
                        },
                        {
                            name: 'productPrice',
                            title: 'Product Price',
                            type: 'number',
                        },
                        {
                            name: 'quantity',
                            title: 'Quantity',
                            type: 'number',
                            validation: (Rule: Rule) => Rule.required(),
                        },
                    ],
                },
            ],
            validation: (Rule: Rule) => Rule.optional(),
        }
    ],
};
