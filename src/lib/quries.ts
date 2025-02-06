//finds all product
export const ALL_PRODUCT_QUERY = `*[_type == "products"]`
//finds all category
export const ALL_CATEGORY_QUERY = `*[_type == "categories"]`
//finds products by caegory id
export const CATEGORY_PRODUCTS = `*[_type == "products" && category._ref == $id]`