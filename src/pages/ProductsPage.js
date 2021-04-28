import { useContext, useReducer, useState } from "react";
import ProductGrid from "../components/productGrid";
import { Constants } from "../Constants";
import { StoreContext } from "../App";

const ProductsPage = () => {
    const {storeState, dispatch} = useContext(StoreContext);

    // const [ProductsPage, dispatch] = useReducer(productsReducer, []);
    return (<div className="container">
            <div className="row">
                <div className="col-12">
                    <h5 className="mb-0">Most Viewed Products</h5>
                </div>
                {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row">
                {
                    storeState.products.map(product => <ProductGrid product={product}/>)
                }
            </div>
            {/*end row*/}
        </div>
    )
}

export default ProductsPage;