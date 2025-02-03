interface ImageAsset {
    _type: 'image';
    asset: {
        _ref: string;
    };
}

export interface CategoryInterface {
    _rev: string;
    _type: 'categories';
    _id: string;
    productsCount: number;
    title: string;
    _updatedAt: string;
    image: ImageAsset;
    _createdAt: string;
}
