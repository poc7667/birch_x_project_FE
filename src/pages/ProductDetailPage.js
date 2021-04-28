import { useContext, useEffect, useReducer, useState } from "react";
import { StoreContext } from "../App";
import { useParams } from "react-router";

const ProductDetailPage = () => {
    const {productId} = useParams();
    const {storeState, dispatch} = useContext(StoreContext);
    const {products, activeProduct: {productName, description}} = storeState;
    const {loading, setLoading} = useState(storeState.isLoading);

    useEffect(() => {
        if (products) {
            dispatch({type: 'loadProduct', payload: productId})
        }
    }, [products])

    if (loading) {
        return (<div>
            Loading
        </div>)
    }


    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-5">
                    <div className="tns-outer" id="tns1-ow">
                        <div className="tns-liveregion tns-visually-hidden" aria-live="polite"
                             aria-atomic="true">slide <span className="current">4</span> of 5
                        </div>
                        <div id="tns1-mw" className="tns-ovh">
                            <div className="tns-inner" id="tns1-iw">
                                <div
                                    className="tiny-single-item  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                                    id="tns1" style={{transform: 'translate3d(-60%, 0px, 0px)'}}>
                                    <div className="tiny-slide tns-item" id="tns1-item0" aria-hidden="true"
                                         tabIndex={-1}><img src="/images/shop/product/single-2.jpg"
                                                            className="img-fluid rounded" alt/></div>
                                    <div className="tiny-slide tns-item" id="tns1-item1" aria-hidden="true"
                                         tabIndex={-1}><img src="/images/shop/product/single-3.jpg"
                                                            className="img-fluid rounded" alt/></div>
                                    <div className="tiny-slide tns-item" id="tns1-item2" aria-hidden="true"
                                         tabIndex={-1}><img src="/images/shop/product/single-4.jpg"
                                                            className="img-fluid rounded" alt/></div>
                                    <div className="tiny-slide tns-item tns-slide-active" id="tns1-item3"><img
                                        src="/images/shop/product/single-5.jpg" className="img-fluid rounded" alt/></div>
                                    <div className="tiny-slide tns-item" id="tns1-item4" aria-hidden="true"
                                         tabIndex={-1}><img src="/images/shop/product/single-6.jpg"
                                                            className="img-fluid rounded" alt/></div>
                                </div>
                            </div>
                        </div>
                        <div className="tns-nav" aria-label="Carousel Pagination">
                            <button type="button" data-nav={0} aria-controls="tns1" style={{}}
                                    aria-label="Carousel Page 1" className tabIndex={-1}/>
                            <button type="button" data-nav={1} aria-controls="tns1" style={{}}
                                    aria-label="Carousel Page 2" className tabIndex={-1}/>
                            <button type="button" data-nav={2} aria-controls="tns1" style={{}}
                                    aria-label="Carousel Page 3" className tabIndex={-1}/>
                            <button type="button" data-nav={3} aria-controls="tns1" style={{}}
                                    aria-label="Carousel Page 4 (Current Slide)" className="tns-nav-active"/>
                            <button type="button" data-nav={4} aria-controls="tns1" style={{}}
                                    aria-label="Carousel Page 5" className tabIndex={-1}/>
                        </div>
                    </div>
                </div>
                {/*end col*/}
                <div className="col-md-7 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div className="section-title ms-md-4">
                        <h4 className="title">Branded T-Shirts</h4>
                        <h5 className="text-muted">$21.00 <del className="text-danger ms-2">$25.00</del></h5>
                        <ul className="list-unstyled text-warning h5 mb-0">
                            <li className="list-inline-item"><i className="mdi mdi-star"/></li>
                            <li className="list-inline-item"><i className="mdi mdi-star"/></li>
                            <li className="list-inline-item"><i className="mdi mdi-star"/></li>
                            <li className="list-inline-item"><i className="mdi mdi-star"/></li>
                            <li className="list-inline-item"><i className="mdi mdi-star"/></li>
                        </ul>
                        <h5 className="mt-4 py-2">Overview :</h5>
                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                            exercitationem, unde molestiae sint quae inventore atque minima natus fugiat nihil quisquam
                            voluptates ea omnis. Modi laborum soluta tempore unde accusantium.</p>
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
                            <div className="col-lg-6 col-12">
                                <div className="d-flex align-items-center">
                                    <h6 className="mb-0">Your Size:</h6>
                                    <ul className="list-unstyled mb-0 ms-3">
                                        <li className="list-inline-item"><a href="javascript:void(0)"
                                                                            className="btn btn-icon btn-soft-primary">S</a>
                                        </li>
                                        <li className="list-inline-item ms-1"><a href="javascript:void(0)"
                                                                                 className="btn btn-icon btn-soft-primary">M</a>
                                        </li>
                                        <li className="list-inline-item ms-1"><a href="javascript:void(0)"
                                                                                 className="btn btn-icon btn-soft-primary">L</a>
                                        </li>
                                        <li className="list-inline-item ms-1"><a href="javascript:void(0)"
                                                                                 className="btn btn-icon btn-soft-primary">XL</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-6 col-12 mt-4 mt-lg-0">
                                <div className="d-flex shop-list align-items-center">
                                    <h6 className="mb-0">Quantity:</h6>
                                    <div className="qty-icons ms-3">
                                        <button onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                                className="btn btn-icon btn-soft-primary minus">-
                                        </button>
                                        <input min={0} name="quantity" defaultValue={0} type="number"
                                               className="btn btn-icon btn-soft-primary qty-btn quantity"/>
                                        <button onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                                className="btn btn-icon btn-soft-primary plus">+
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/*end col*/}
                        </div>
                        {/*end row*/}
                        <div className="mt-4 pt-2">
                            <a href="javascript:void(0)" className="btn btn-primary">Shop Now</a>
                            <a href="shop-cart.html" className="btn btn-soft-primary ms-2">Add to Cart</a>
                        </div>
                    </div>
                </div>
                {/*end col*/}
            </div>
            {/*end row*/}
        </div>


    )
}

export default ProductDetailPage;