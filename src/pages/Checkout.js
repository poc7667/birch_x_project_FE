import { useContext, useEffect, useReducer, useState } from "react";
import { StoreContext } from "../store/storeReducer";
import CartContent from "../components/CartContent";
import useCartSubtotal from "../hooks/useCartSubtotal";

const CheckoutPage = () => {
    const {storeState: {shippingCost, cart}} = useContext(StoreContext);
    const [subtotal, setSubtotal] = useCartSubtotal();
    const [cartItems, setCartItems] = useState(null);

    useEffect(() => {
        if (Object.values(cart).length) {
            setCartItems(Object.values(cart));
            setSubtotal(Object.values(cart));
        }
    }, [cart]);

    if (!cartItems) {
        return (<></>);
    }

    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-6">
                            <div className="rounded shadow-lg p-4">
                                <h5 className="mb-0">Billing Details :</h5>
                                <form className="mt-4">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label">Your Name <span
                                                    className="text-danger">*</span></label>
                                                <input name="name" id="firstname" type="text" className="form-control"
                                                       placeholder="First Name :"/>
                                            </div>
                                        </div>
                                        {/*end col*/}
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label">Last Name <span
                                                    className="text-danger">*</span></label>
                                                <input name="name" id="lastname" type="text" className="form-control"
                                                       placeholder="Last Name :"/>
                                            </div>
                                        </div>
                                        {/*end col*/}
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label">Company Name <span
                                                    className="text-muted">(Optional)</span></label>
                                                <input name="name" id="companyname" type="text" className="form-control"
                                                       placeholder="Company Name :"/>
                                            </div>
                                        </div>
                                        {/*end col*/}
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label">Street address <span
                                                    className="text-danger">*</span></label>
                                                <input type="text" name="address1" id="address1"
                                                       className="form-control"
                                                       placeholder="House number and street name :"/>
                                            </div>
                                        </div>
                                        {/*end col*/}
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label">Apartment, suite, unit etc. <span
                                                    className="text-muted">(Optional)</span></label>
                                                <input type="text" name="address2" id="address2"
                                                       className="form-control"
                                                       placeholder="Apartment, suite, unit etc. :"/>
                                            </div>
                                        </div>
                                        {/*end col*/}
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Town / City <span
                                                    className="text-danger">*</span></label>
                                                <input type="text" name="city" id="city" className="form-control"
                                                       placeholder="City Name :"/>
                                            </div>
                                        </div>
                                        {/*end col*/}
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Postal Code <span
                                                    className="text-danger">*</span></label>
                                                <input type="text" name="postcode" id="postcode"
                                                       className="form-control" placeholder="Zip :"/>
                                            </div>
                                        </div>
                                        {/*end col*/}
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">State <span
                                                    className="text-danger">*</span></label>
                                                <input type="text" name="state" id="state" className="form-control"
                                                       placeholder="State Name :"/>
                                            </div>
                                        </div>
                                        {/*end col*/}
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Country <span
                                                    className="text-danger">*</span></label>
                                                <select className="form-select form-control"
                                                        aria-label="Default select example">
                                                    <option selected>Taiwan</option>
                                                    <option value="AF">USA</option>
                                                </select>
                                            </div>
                                        </div>
                                        {/*end col*/}
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label">Phone <span
                                                    className="text-danger">*</span></label>
                                                <input type="text" name="phone" id="phone" className="form-control"
                                                       placeholder="State Name :"/>
                                            </div>
                                        </div>
                                        {/*end col*/}
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label">Your Email <span
                                                    className="text-danger">*</span></label>
                                                <input name="email" id="email" type="email" className="form-control"
                                                       placeholder="Your email :"/>
                                            </div>
                                        </div>
                                        {/*end col*/}
                                    </div>
                                    {/*end row*/}
                                </form>
                                {/*end form*/}
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="rounded shadow-lg p-4 sticky-bar">
                                <CartContent cartItems={cartItems}></CartContent>
                                <div className="d-flex mb-4 justify-content-between">
                                    <h5>{cartItems.length} Items</h5>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-center table-padding mb-0">
                                        <tbody>
                                        <tr>
                                            <td className="h6 border-0">Subtotal</td>
                                            <td className="text-end fw-bold border-0">$ {subtotal.toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td className="h6">Shipping Charge</td>
                                            <td className="text-end fw-bold">$ {shippingCost}</td>
                                        </tr>
                                        <tr className="bg-light">
                                            <td className="h5 fw-bold">Total</td>
                                            <td className="text-end text-primary h4 fw-bold">$ {(subtotal + shippingCost).toFixed(2)}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div className="mt-4 pt-2">
                                        <div className="d-grid">
                                            <a href="shop-checkouts.html" className="btn btn-primary">Place Order</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*end row*/}
                </div>
                {/*end container*/}
            </section>
        </>
    )
}

export default CheckoutPage;