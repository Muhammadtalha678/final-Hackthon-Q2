import { defineType } from "sanity";

export default defineType({
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'discountPrice',
            title: 'Discount Price',
            type: 'number',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image' }],
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
        },
        {
            name: 'colors',
            title: 'Colors',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'sizes',
            title: 'Sizes',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: "category",
            title: "Category",
            type: "reference",
            to: [{ type: "categories" }],
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'number',
        },
        {
            name: 'stock',
            title: 'Stock',
            type: 'number',
        },
        {
            name: 'minimunOrderQuantity',
            title: 'Minimum Order Quantity',
            type: 'number',
        },
        {
            name: 'sku',
            title: 'SKU',
            type: 'string',
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {

                list: [
                    { title: "Rustic", value: "rustic" },
                    {
                        title: "Vase",
                        value: "vase",
                    },
                    { title: "Home decor", value: "home decor" },
                    { title: "Vintag", value: "vintage" },
                    { title: "Interior design", value: "interior design" },
                ],
            },
        },

        {
            name: 'isNew',
            title: 'New',
            type: 'boolean',
        },
        {
            name: 'reviews',
            title: 'Reviews',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'rating',
                            title: 'Rating',
                            type: 'number',
                        },
                        {
                            name: 'comments',
                            title: 'Comments',
                            type: 'text',
                        },
                        {
                            name: 'date',
                            title: 'Date',
                            type: 'datetime',
                        },
                        {
                            name: 'reviwerName',
                            title: 'Reviewer Name',
                            type: 'string',
                        },
                        {
                            name: 'reviwerEmail',
                            title: 'Reviewer Email',
                            type: 'string',
                        },
                    ],
                },
            ],
        },
        {
            name: 'general',
            title: 'General',
            type: 'object',
            fields: [
                {
                    name: 'salesPackage',
                    title: 'Sales Package',
                    type: 'string',
                },
                {
                    name: 'modelNo',
                    title: 'Model Number',
                    type: 'string',
                },
                {
                    name: 'brand',
                    title: 'Brand',
                    type: 'string',
                },
                {
                    name: 'secondaryMaterial',
                    title: 'Secondary Material',
                    type: 'array',
                    of: [{ type: 'string' }],
                },
                {
                    name: 'upholsteryMaterial',
                    title: 'Upholstery Material',
                    type: 'array',
                    of: [{ type: 'string' }],
                },
                {
                    name: 'upholsteryColors',
                    title: 'Upholstery Colors',
                    type: 'array',
                    of: [{ type: 'string' }],
                },
                {
                    name: 'configuration',
                    title: 'Configuration',
                    type: 'string',
                },
            ],
        },
        {
            name: 'product',
            title: 'Product Details',
            type: 'object',
            fields: [
                {
                    name: 'fillingMaterial',
                    title: 'Filling Material',
                    type: 'string',
                },
                {
                    name: 'finishTypeColors',
                    title: 'Finish Type Colors',
                    type: 'array',
                    of: [{ type: 'string' }],
                },
                {
                    name: 'adjustableHeadrest',
                    title: 'Adjustable Headrest',
                    type: 'boolean',
                },
                {
                    name: 'maximumLoadCapacity',
                    title: 'Maximum Load Capacity',
                    type: 'string',
                },
                {
                    name: 'originOfManufature',
                    title: 'Origin of Manufacture',
                    type: 'string',
                },
            ],
        },
        {
            name: 'dimensions',
            title: 'Dimensions',
            type: 'object',
            fields: [
                {
                    name: 'width',
                    title: 'Width',
                    type: 'string',
                },
                {
                    name: 'height',
                    title: 'Height',
                    type: 'string',
                },
                {
                    name: 'depth',
                    title: 'Depth',
                    type: 'string',
                },
                {
                    name: 'weight',
                    title: 'Weight',
                    type: 'string',
                },
                {
                    name: 'seatHeight',
                    title: 'Seat Height',
                    type: 'string',
                },
                {
                    name: 'legHeight',
                    title: 'Leg Height',
                    type: 'string',
                },
            ],
        },
        {
            name: 'warranty',
            title: 'Warranty',
            type: 'object',
            fields: [
                {
                    name: 'warrentyInformation',
                    title: 'Warranty Information',
                    type: 'string',
                },
                {
                    name: 'warrentyServiceType',
                    title: 'Warranty Service Type',
                    type: 'string',
                },
                {
                    name: 'coveredInWarranty',
                    title: 'Covered In Warranty',
                    type: 'string',
                },
                {
                    name: 'NotCoveredWarranty',
                    title: 'Not Covered Warranty',
                    type: 'string',
                },
                {
                    name: 'domesticWarranty',
                    title: 'Domestic Warranty',
                    type: 'string',
                },
            ],
        },
    ],
});