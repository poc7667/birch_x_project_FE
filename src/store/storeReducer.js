import { createContext } from "react";
import Action from "../constants/Action";

export function storeReducer(state, action) {
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
                newSkus[productID] = skus;
            })
            return Object.assign({}, state, {skus: newSkus});
        case Action.selectSku:
            return Object.assign({}, state, action.payload);
        case Action.clearActiveSku:
            return Object.assign({}, state, {activeSkuID: null});
        case Action.addItemToCart:
            // Didn't handle the stock in sku.
            let cart = Object.assign({}, state.cart)
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
            if (cart[sku.ID].quantity === 0) {
                cart[sku.ID] = undefined;
            }
            return Object.assign({}, state, {cart});
        default:
            return Object.assign({}, state);
    }
}

export const StoreContext = createContext(null);