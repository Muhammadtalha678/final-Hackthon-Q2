export interface Product {
    isNew: boolean;
    category: {
        _ref: string;
        _type: string;
    };
    dimensions: {
        seatHeight: string;
        width: string;
        weight: string;
        height: string;
        legHeight: string;
        depth: string;
    };
    _rev: string;
    description: string;
    stock: number;
    images: {
        _type: string;
        _key: string;
        asset: {
            _ref: string;
            _type: string;
        };
    }[];
    _type: string;
    thumbnail: {
        _type: string;
        asset: {
            _type: string;
            _ref: string;
        };
    };
    name: string;
    reviews: {
        reviwerName: string;
        _key: string;
        date: string;
        comments: string;
        reviwerEmail: string;
        rating: number;
    }[];
    sizes: string[];
    sku: string;
    _updatedAt: string;
    product: {
        adjustableHeadrest: boolean;
        originOfManufature: string;
        finishTypeColors: string[];
        fillingMaterial: string;
        maximumLoadCapacity: string;
    };
    minimunOrderQuantity: number;
    colors: string[];
    _id: string;
    warranty: {
        warrentyServiceType: string;
        domesticWarranty: string;
        NotCoveredWarranty: string;
        warrentyInformation: string;
        coveredInWarranty: string;
    };
    tags: string[];
    discountPrice: number;
    rating: number;
    general: {
        configuration: string;
        secondaryMaterial: string[];
        modelNo: string;
        upholsteryMaterial: string[];
        brand: string;
        salesPackage: string;
        upholsteryColors: string[];
    };
    price: number;
    _createdAt: string;
}
