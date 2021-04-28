import './App.css';
import { Route, Switch, useHistory } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import { createContext, useReducer, useState } from "react";
import { Constants } from "./Constants";
import ProductDetailPage from "./pages/ProductDetailPage";

const initialState = {
    isLoading: true,
    user: {},
    activeProduct: {},
    products: [],
    cart: [],

}

function storeReducer(state, action) {
    switch (action.type) {
        case 'loadProducts':
            return Object.assign({}, state, {products: action.payload}, {isLoading: false});
        case 'loadProduct':
            const activeProduct = state.products.filter(product => product.productID === action.payload)[0] || {}
            return Object.assign({}, state, {activeProduct});
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
            <Switch history={history}>
                {/*<section className="section">*/}
                {/*    <nav aria-label="breadcrumb" className="d-inline-block">*/}
                {/*        <ul className="breadcrumb bg-white rounded shadow mb-0">*/}
                {/*            <li className="breadcrumb-item"><a href="index.html">Landrick</a></li>*/}
                {/*            <li className="breadcrumb-item"><a href="index-shop.html">Shop</a></li>*/}
                {/*            <li className="breadcrumb-item active" aria-current="page">Product Details</li>*/}
                {/*        </ul>*/}
                {/*    </nav>*/}
                {/*</section>*/}
                <section className="section">
                    <Route exact path="/" render={() => {
                        history.push('/products');
                    }}></Route>
                    <Route exact path="/products" component={ProductsPage}></Route>
                    <Route exact path="/products/:productId" component={ProductDetailPage}></Route>
                </section>
            </Switch>
        </StoreContext.Provider>
    );
}

export default App;
