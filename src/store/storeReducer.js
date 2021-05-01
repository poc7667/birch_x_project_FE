import { createContext } from "react";
import Action from "../constants/Action";

export function storeReducer(state, action) {
    let reviews = Object.assign({}, state.reviews)
    switch (action.type) {
        case Action.loadProducts:
            return Object.assign({}, state, {products: action.payload}, {isLoading: false});
        case Action.loadProduct:
            const activeProduct = state.products.filter(product => product.ID === action.payload)[0] || {}
            return Object.assign({}, state, {activeProduct});
        case Action.loadSkus:
            const newSkus = {...state.skus};
            action.payload.forEach(skuItem =>{
                const {productID, skus} = skuItem;
                /**
                 * Add dummy title
                 */
                newSkus[productID] = skus.map(item=>{
                    const {
                        size,
                        color,
                        style,
                    } = item;
                    const title = [color, size, style].filter(i => i?.length).join("/ ") || ''
                    item.title = title
                    return item;
                });
            })
            return Object.assign({}, state, {skus: newSkus});
        case Action.selectSku:
            return Object.assign({}, state, action.payload);
        case Action.clearActiveSku:
            return Object.assign({}, state, {activeSkuID: null});
        case Action.addItemToCart:
            // Didn't handle the stock in sku.
            let cart = Object.assign({}, state.cart)
            let skus =  Object.assign({}, state.skus)
            const {sku, quantity} = action.payload;
            const product = state.products.filter(item=> item.ID === sku.productID)[0];
            if (!cart[sku.ID]) {
                cart[sku.ID] = {
                    name: product?.productName|| 'No name',
                    sku: {...sku},
                    quantity: quantity
                }
            } else {
                cart[sku.ID].quantity += quantity;

            }
            // Offset stock
            skus[sku.productID].filter(item=> item.ID === sku.ID)[0].stock -= quantity;
            if (cart[sku.ID].quantity === 0) {
                cart[sku.ID] = undefined;
            }
            console.log(skus);
            return Object.assign({}, state, {cart, skus});
        case Action.loadReviews:
            action.payload.map(reviewGroup=>{
                // load sku description for each review
              reviews[reviewGroup.productID] = reviewGroup.reviews.map(review=>{
                  review.title = state.skus[review.productID].filter(sku => sku.ID === review.skuID)[0].title;
                  return review;
              }) || []
            })
            return Object.assign({}, state, {reviews});
        case Action.addReview:
            let newReviews = action.payload;
            newReviews.title = state.skus[newReviews.productID].filter(sku => sku.ID === newReviews.skuID)[0].title;
            reviews[action.payload.productID].push(newReviews);
            return Object.assign({}, state, {reviews});
        default:
            return Object.assign({}, state);
    }
}

export const StoreContext = createContext(null);