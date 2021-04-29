import { useContext, useReducer, useState } from "react";
import ProductGrid from "../components/productGrid";
import { StoreContext } from "../App";

const ProductsPage = () => {
    const {storeState, dispatch} = useContext(StoreContext);

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <h5 className="mb-0">Most Viewed Products</h5>
                </div>
                {/*end col*/}
            </div>
            <div className="row">
                {
                    storeState.products.map(product => <ProductGrid product={product}/>)
                }
            </div>
        </>
    )
}

export default ProductsPage;