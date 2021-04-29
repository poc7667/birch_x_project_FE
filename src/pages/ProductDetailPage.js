import { useContext, useEffect, useReducer, useState } from "react";
import { StoreContext } from "../App";
import { useParams } from "react-router";
import ProductSlides from "../components/ProductSlides";
import SkuItems from "../components/SkuItems";
import { Constants } from "../Constants";

const ProductDetailPage = () => {
    const {productId} = useParams();
    const {storeState, dispatch} = useContext(StoreContext);
    const {products, activeProduct, activeProduct: {productName, description, skus}} = storeState;
    const [selectedSku, setSelectedSku] = useState(null);
    const [numOfSelectedSku, setNumOfSelectedSku] = useState(0);
    const {loading, setLoading} = useState(storeState.isLoading);


    useEffect(() => {
        if (skus) {
            setSelectedSku(skus[0]);

        }
    }, [skus])

    const updateSelectedSkuHandler = (sku) =>{
        setSelectedSku(sku);
        dispatch({type:'selectSku', payload: {activeSkuID:sku.skuID}})
    }


    useEffect(() => {
        if (products) {
            dispatch({type: 'loadProduct', payload: productId})
        }
    }, [products])

    useEffect(() => {
        dispatch({type:'clearActiveSku', payload:null})
    }, [])

    useEffect(() => {

        if (selectedSku && numOfSelectedSku > selectedSku.stock){
            setNumOfSelectedSku(selectedSku.stock)
        }
    }, [selectedSku])


    const updateNumOfSelectedSku = (delta) =>{
        if(delta+numOfSelectedSku > selectedSku.stock || delta+numOfSelectedSku < 0){
            return;
        }
        setNumOfSelectedSku(delta+numOfSelectedSku);
    }


    if (loading || !selectedSku) {
        return (<div>
            Loading
        </div>)
    }

    return (
        <div className="row align-items-center">
            <ProductSlides {...activeProduct}></ProductSlides>
            {/*end col*/}
            <div className="col-md-7 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ms-md-4">
                    <h4 className="title"> {productName} </h4>
                    <h5 className="text-muted">${(selectedSku.price * Constants.DISCOUNT).toFixed(0)} <del className="text-danger ms-2">$ {selectedSku.price}</del></h5>
                    <ul className="list-unstyled text-warning h5 mb-0">
                        <li className="list-inline-item"><i className="mdi mdi-star"/></li>
                        <li className="list-inline-item"><i className="mdi mdi-star"/></li>
                        <li className="list-inline-item"><i className="mdi mdi-star"/></li>
                        <li className="list-inline-item"><i className="mdi mdi-star"/></li>
                        <li className="list-inline-item"><i className="mdi mdi-star"/></li>
                    </ul>
                    <h5 className="mt-4 py-2">Overview :</h5>
                    <p className="text-muted">{description}</p>
                    <ul className="list-unstyled text-muted">
                        <li className="mb-0"><span className="text-primary h5 me-2"><i
                            className="uil uil-check-circle align-middle"/></span> Digital Marketing Solutions for
                            Tomorrow
                        </li>
                        <li className="mb-0"><span className="text-primary h5 me-2"><i
                            className="uil uil-check-circle align-middle"/></span> Our Talented &amp; Experienced
                            Marketing Agency
                        </li>
                        <li className="mb-0"><span className="text-primary h5 me-2"><i
                            className="uil uil-check-circle align-middle"/></span> Create your own skin to match
                            your brand
                        </li>
                    </ul>
                    <div className="row mt-4 pt-2">
                        <div className="col-lg-12 col-12">
                            <SkuItems updateSelectedSkuHandler={updateSelectedSkuHandler} {...activeProduct}/>
                        </div>
                    </div>
                    <div className="row mt-4 pt-2">

                        {/*end col*/}
                        <div className="col-lg-6 col-12 mt-4 mt-lg-0">
                            <div className="d-flex shop-list align-items-center">
                                <h6 className="mb-0">Quantity:</h6>
                                <div className="qty-icons ms-3">
                                    <button onClick={()=>{updateNumOfSelectedSku(-1)}}
                                            className="btn btn-icon btn-soft-primary minus">-
                                    </button>
                                    <input min={0} max={selectedSku?.stock} name="quantity" defaultValue={0} value={numOfSelectedSku} type="number"
                                           className="btn btn-icon btn-soft-primary qty-btn quantity"/>
                                    <button onClick={()=>{updateNumOfSelectedSku(1)}}
                                            className="btn btn-icon btn-soft-primary plus">+
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                    <div className="mt-4 pt-2">
                        {/*<a href="javascript:void(0)" className="btn btn-primary">Shop Now</a>*/}
                        <a href="shop-cart.html" className="btn btn-soft-primary ms-2">Add to Cart</a>
                    </div>
                </div>
            </div>
            {/*end col*/}
        </div>
    )
}

export default ProductDetailPage;