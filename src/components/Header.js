import { Link } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import Cart from "./Cart";
import { StoreContext } from "../store/storeReducer";

const Header = () => {
    const {storeState: {activeSkuID, cart}} = useContext(StoreContext);
    const [expandCart, setExpandCart] = useState(false);

    function setExpandCartHandler(value) {
        setExpandCart(value);
    }

    return (
        <header id="topnav" className="defaultscroll sticky"  style={{background: 'white'}}>
            <div className="container">
                {/* Logo container*/}
                <Link className="logo" to="/">
                    <img src="/images/ucsc.png" height={24} className="logo-light-mode"/>
                </Link>
                <ul className="buy-button list-inline mb-0">
                    <li className="list-inline-item mb-0">
                        <div className="dropdown">
                            <button type="button" className="btn btn-link text-decoration-none dropdown-toggle p-0 pe-2"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="uil uil-search h5 text-muted"/>
                            </button>
                            <div
                                className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 py-0"
                                style={{width: 300}}>
                                <form>
                                    <input type="text" id="text" name="name" className="form-control border bg-white"
                                           placeholder="Search..."/>
                                </form>
                            </div>
                        </div>
                    </li>
                    <li className="list-inline-item mb-0 pe-1">
                        <div className="dropdown">
                            <button onClick={() => {
                                setExpandCart(!expandCart)
                            }} type="button" className="btn btn-icon btn-soft-primary dropdown-toggle"
                                    disabled={Object.keys(cart).length===0}
                            ><i
                                className="uil uil-shopping-cart align-middle icons"/></button>
                            <Cart setExpandCartHandler={setExpandCartHandler} expandCart={expandCart}
                                  cart={cart}></Cart>
                        </div>
                    </li>
                    <li className="list-inline-item mb-0">
                        <div className="dropdown dropdown-primary">
                            <button type="button" className="btn btn-icon btn-soft-primary dropdown-toggle"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i
                                className="uil uil-user align-middle icons"/></button>
                            <div
                                className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 py-3"
                                style={{width: 200}}>
                                <a className="dropdown-item text-dark" href="#"><i
                                    className="uil uil-user align-middle me-1"/> Account</a>
                                <a className="dropdown-item text-dark" href="#"><i
                                    className="uil uil-clipboard-notes align-middle me-1"/> Order History</a>
                                <a className="dropdown-item text-dark" href="#"><i
                                    className="uil uil-arrow-circle-down align-middle me-1"/> Download</a>
                                <div className="dropdown-divider my-3 border-top"/>
                                <a className="dropdown-item text-dark" href="#"><i
                                    className="uil uil-sign-out-alt align-middle me-1"/> Logout</a>
                            </div>
                        </div>
                    </li>
                </ul>
                {/*end login button*/}
                {/* End Logo container*/}
                <div className="menu-extras">
                    <div className="menu-item">
                        {/* Mobile menu toggle*/}
                        <a className="navbar-toggle" id="isToggle" onClick="toggleMenu()">
                            <div className="lines">
                                <span/>
                                <span/>
                                <span/>
                            </div>
                        </a>
                        {/* End mobile menu toggle*/}
                    </div>
                </div>
                <div id="navigation">
                    {/* Navigation Menu*/}
                    <ul className="navigation-menu" style={{justifyContent: 'start'}}>
                        <li>
                            <Link to={`/`} className="sub-menu-item">Home
                            </Link>
                        </li>
                    </ul>
                    {/*end navigation menu*/}
                    <div className="buy-menu-btn d-none">
                        <a href="https://1.envato.market/4n73n" target="_blank" className="btn btn-primary">Buy Now</a>
                    </div>
                    {/*end login button*/}
                </div>
                {/*end navigation*/}
            </div>
            {/*end container*/}
        </header>
    )
}

export default Header;