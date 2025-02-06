import { Cart } from "@/interfaces/Cart";
import { Product } from "@/interfaces/Product";

export const cartObject = (item: Cart | Product): Cart => {
    return {
        productId: "productId" in item ? item.productId : item._id,
        productImage: "productImage" in item ? item.productImage : item.thumbnail,
        productName: "productName" in item ? item.productName : item.name,
        productPrice: "productPrice" in item ? item.productPrice : item.discountPrice > 0 ? item.discountPrice : item.price, //if already in cart then take (item.productPrice) this else for the first time add to cart check if discount is available then store discount price else store price  
        productQuantity: "productQuantity" in item ? item.productQuantity : 1,  //set 1 by default
    };
};
export const wishListObject = (item: Product | Cart): Cart => {
    return {
        productId: "productId" in item ? item.productId : item._id,
        productImage: "productImage" in item ? item.productImage : item.thumbnail,
        productName: "productName" in item ? item.productName : item.name,
        productPrice: "productPrice" in item ? item.productPrice : item.discountPrice > 0 ? item.discountPrice : item.price, //if already in cart then take (item.productPrice) this else for the first time add to cart check if discount is available then store discount price else store price  
        productQuantity: "productQuantity" in item ? item.productQuantity : 1,  //set 1 by default
    };
};
