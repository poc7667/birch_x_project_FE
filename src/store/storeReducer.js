import { createContext } from "react";
import Action from "../constants/Action";
import update from 'immutability-helper';

export function storeReducer(state, action) {
    // Copy items, don't update on existing items.
    let products = Object.assign({}, state.products);
    let skus = Object.assign({}, state.skus);
    let reviews = Object.assign({}, state.reviews);
    switch (action.type) {
        case Action.loadProducts:
            products = action.payload.reduce((products, product) => {
                product.hasSkus = false;
                products[product.id] = product;
                return products;
            }, products);
            return Object.assign({}, state, {products: products, isLoading: false});
        case Action.loadProduct:
            const activeProduct = state.products[action.payload] || {}
            return Object.assign({}, state, {activeProduct});
        case Action.loadSkus:
            action.payload.forEach(skuItem => {
                const {
                    id,
                    product: productId,
                    size,
                    color,
                    style
                } = skuItem;
                // Normalize
                skuItem.productId = productId
                /**
                 * Add dummy title
                 */
                if (!skus[productId]) {
                    skus[productId] = []
                }
                skuItem.title = [color, size, style].filter(i => i?.length).join("/ ") || ''
                skus[productId].push({...skuItem});
                if (products[productId]) {
                    products[productId].hasSkus = true;
                }
            })
            return Object.assign({}, state, {skus: skus, products: products});
        case Action.selectSku:
            return Object.assign({}, state, action.payload);
        case Action.clearActiveSku:
            return Object.assign({}, state, {activeSkuId: null});
        case Action.addItemToCart:
            // Didn't handle the stock in sku.
            let cart = Object.assign({}, state.cart)
            const {sku, quantity} = action.payload;
            console.log(sku)
            const product = state.products[sku.productId];
            if (!cart[sku.id]) {
                cart[sku.id] = {
                    name: product?.name || 'No name',
                    sku: {...sku},
                    quantity: quantity
                }
            } else {
                cart[sku.id].quantity += quantity;
            }
            // Offset stock
            let selectedSku;
            try {
                selectedSku = skus[sku.productId].filter(item => item.id === sku.id)[0];
            } catch (e) {
                debugger
            }
            selectedSku.stock -= quantity;
            if (cart[sku.id].quantity === 0) {
                cart[sku.id] = undefined;
            }
            console.log(skus);
            return Object.assign({}, state, {cart, skus});
        case Action.loadReviews:
            action.payload.map(review => {
                // load sku description for each review
                review.productId = review.product;
                review.skuId = review.sku;
                // remember to delete un-needed props.
                // review.product = undefined;
                // review.sku = undefined;
                if (!reviews[review.productId]) {
                    reviews[review.productId] = []
                }
                reviews[review.productId].push(review);
            })
            return Object.assign({}, state, {reviews});
        case Action.addReview:
            let newReviews = action.payload;
            newReviews.title = state.skus[newReviews.productId].filter(sku => sku.id === newReviews.skuID)[0].title;
            reviews[action.payload.productId].push(newReviews);
            return Object.assign({}, state, {reviews});
        default:
            return Object.assign({}, state);
    }
}

export const StoreContext = createContext(null);
