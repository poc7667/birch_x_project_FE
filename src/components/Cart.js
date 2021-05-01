import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import CartContent from "./CartContent";

const Cart = (props) => {
    const {cart, expandCart, setExpandCartHandler} = props;

    /**
     * Handle click outside
     */
    const cartRef = useRef(null);
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setExpandCartHandler(false)
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [cartRef]);

    if (!Object.keys(cart).length) {
        return <></>;
    }

    const cartItems = Object.values(cart);
    return (
        <div
            ref={cartRef}
            className={`dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 p-4 ${expandCart?'show':''}`}
            style={{width: 300}}>
            <CartContent cartItems={cartItems}></CartContent>
            <div className="d-flex align-items-center justify-content-between pt-4 border-top">
                <h6 className="text-dark mb-0">Total($):</h6>
                <h6 className="text-dark mb-0">${  }</h6>
            </div>
            <div className="mt-3 text-center">
                {/*<a href="javascript:void(0)" className="btn btn-primary me-2">View Cart</a>*/}
                <Link to={`/checkout`} onClick={()=>{setExpandCartHandler(false)}}  className="btn btn-primary">Checkout</Link>
            </div>
            {/*<p className="text-muted text-start mt-1 mb-0">*T&amp;C Apply</p>*/}
        </div>
    )
}

export default Cart;