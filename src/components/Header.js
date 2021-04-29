import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header id="topnav" className="defaultscroll sticky">
            <div className="container">
                {/* Logo container*/}
                <Link className="logo" to="/">
                    <img src="/images/ucsc.png" height={24} className="logo-light-mode" alt/>
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
                            <button type="button" className="btn btn-icon btn-soft-primary dropdown-toggle"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i
                                className="uil uil-shopping-cart align-middle icons"/></button>
                            <div
                                className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 p-4"
                                style={{width: 300}}>
                                <div className="pb-4">
                                    <a href="javascript:void(0)" className="d-flex align-items-center">
                                        <img src="images/shop/product/s-1.jpg" className="shadow rounded"
                                             style={{maxHeight: 64}} alt/>
                                        <div className="flex-1 text-start ms-3">
                                            <h6 className="text-dark mb-0">T-shirt (M)</h6>
                                            <p className="text-muted mb-0">$320 X 2</p>
                                        </div>
                                        <h6 className="text-dark mb-0">$640</h6>
                                    </a>
                                    <a href="javascript:void(0)" className="d-flex align-items-center mt-4">
                                        <img src="images/shop/product/s-2.jpg" className="shadow rounded"
                                             style={{maxHeight: 64}} alt/>
                                        <div className="flex-1 text-start ms-3">
                                            <h6 className="text-dark mb-0">Bag</h6>
                                            <p className="text-muted mb-0">$50 X 5</p>
                                        </div>
                                        <h6 className="text-dark mb-0">$250</h6>
                                    </a>
                                    <a href="javascript:void(0)" className="d-flex align-items-center mt-4">
                                        <img src="images/shop/product/s-3.jpg" className="shadow rounded"
                                             style={{maxHeight: 64}} alt/>
                                        <div className="flex-1 text-start ms-3">
                                            <h6 className="text-dark mb-0">Watch (Men)</h6>
                                            <p className="text-muted mb-0">$800 X 1</p>
                                        </div>
                                        <h6 className="text-dark mb-0">$800</h6>
                                    </a>
                                </div>
                                <div className="d-flex align-items-center justify-content-between pt-4 border-top">
                                    <h6 className="text-dark mb-0">Total($):</h6>
                                    <h6 className="text-dark mb-0">$1690</h6>
                                </div>
                                <div className="mt-3 text-center">
                                    <a href="javascript:void(0)" className="btn btn-primary me-2">View Cart</a>
                                    <a href="javascript:void(0)" className="btn btn-primary">Checkout</a>
                                </div>
                                <p className="text-muted text-start mt-1 mb-0">*T&amp;C Apply</p>
                            </div>
                        </div>
                    </li>
                    <li className="list-inline-item mb-0 pe-1">
                        <a href="#" className="btn btn-icon btn-soft-primary" data-bs-toggle="modal"
                           data-bs-target="#wishlist"><i className="uil uil-heart align-middle icons"/></a>
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