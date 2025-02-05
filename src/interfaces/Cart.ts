export interface Cart {
    productId: string,
    productName: string,
    productPrice: number,
    productImage: {
        _type: string;
        asset: {
            _type: string;
            _ref: string;
        };
    };
    productQuantity: number
}