import { useContext, useReducer, useState } from "react";
import ProductGrid from "../components/productGrid";
import { StoreContext } from "../store/storeReducer";

const ProductsPage = () => {
    const {storeState: {products, skus}} = useContext(StoreContext);

    if (Object.keys(skus).length === 0) {
        console.log(skus)
        return (<></>);
    }
    console.log(products)
    console.log(skus)
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
                    Object.values(products).filter(product=>product.hasSkus).map(product => {
                        const productSkus = skus[product.id];
                        if (!productSkus) {
                            return <></>;
                        }
                        return (
                            <ProductGrid key={`productId-${product.id}`} product={product}
                                         skus={productSkus}/>
                        );
                    })
                }
            </div>
        </>
    )
}

export default ProductsPage;