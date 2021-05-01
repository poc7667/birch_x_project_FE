import './App.css';
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import React, { createContext, useReducer, useState } from "react";
import { Constants } from "./Constants";
import StoreLayout from "./storeLayout";
import { storeReducer, StoreContext } from "./store/storeReducer";
import Action from "./constants/Action";
import { initialStoreState } from "./store/storeStates";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CheckoutPage from "./pages/Checkout";

function App() {
    const [storeState, dispatch] = useReducer(storeReducer, initialStoreState)

    useState((async () => {
        const productsResponse = await fetch(Constants.SERVER_URL + '/products').then(data => data.json());
        const skuResponse = await fetch(Constants.SERVER_URL + '/skus').then(data => data.json());
        const reviewsResponse = await fetch(Constants.SERVER_URL + '/reviews').then(data => data.json());
        dispatch({type: Action.loadProducts, payload: productsResponse});
        await dispatch({type: Action.loadSkus, payload: skuResponse});
        dispatch({type: Action.loadReviews, payload: reviewsResponse});
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
                    <Route exact path="/checkout" component={CheckoutPage}></Route>

                </Switch>
            </StoreLayout>
        </StoreContext.Provider>
    );
}

export default App;
