import './App.css';
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import React, { createContext, useReducer, useState } from "react";
import { Constants } from "./Constants";
import ProductDetailPage from "./pages/ProductDetailPage";
import Header from "./components/Header";
import ReactDOM from "react-dom";
import StoreLayout from "./storeLayout";

const initialState = {
    isLoading: true,
    user: {},
    activeProduct: {},
    activeSkuID: null,
    products: [],
    cart: {}
}

function storeReducer(state, action) {
    switch (action.type) {
        case 'loadProducts':
            return Object.assign({}, state, {products: action.payload}, {isLoading: false});
        case 'loadProduct':
            const activeProduct = state.products.filter(product => product.productID === action.payload)[0] || {}
            return Object.assign({}, state, {activeProduct});
        case 'selectSku':
            return Object.assign({}, state, action.payload);
        case 'clearActiveSku':
            return Object.assign({}, state, {activeSkuID: null});
        case 'addItemToCart':
            // Didn't handle the stock in sku.
            let cart = Object.assign({}, state.cart)
            const {sku, quantity} = action.payload;
            if (!cart[sku.skuID]) {
                // TODO: fix the id compare.
                cart[sku.skuID] = {
                    name: state.products.filter(item=> item.productID == sku.productID)[0].productName|| 'No name',
                    sku: {...sku},
                    quantity: quantity
                }
            } else {
                cart[sku.skuID].quantity += quantity;
            }
            if (cart[sku.skuID].quantity === 0) {
                cart[sku.skuID] = undefined;
            }
            return Object.assign({}, state, {cart});
        default:
            return Object.assign({}, state);
    }
}

export const StoreContext = createContext(null);

function App() {
    const [storeState, dispatch] = useReducer(storeReducer, initialState)

    useState((async () => {
        const response = await fetch(Constants.SERVER_URL + '/products').then(data => data.json());
        dispatch({type: 'loadProducts', payload: response});
    }), []);

    const history = useHistory();
    return (
        <StoreContext.Provider value={{storeState, dispatch}}>
            <StoreLayout>
                <Switch history={history}>
                    <Route exact path="/" render={() => {
                        history.push('/products');
                    }}></Route>
                    <Route exact path="/products" component={ProductsPage}></Route>
                    <Route exact path="/products/:productId" component={ProductDetailPage}></Route>
                </Switch>
            </StoreLayout>
        </StoreContext.Provider>
    );
}

export default App;
