import { useContext, useEffect, useReducer, useState } from "react";
import { StoreContext } from "../store/storeReducer";
import CartContent from "../components/CartContent";
import useCartSubtotal from "../hooks/useCartSubtotal";
import { Link } from "react-router-dom";

const OrderPage = () => {
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
            <div >
                <table cellPadding={0} cellSpacing={0} style={{fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 400, maxWidth: 600, border: 'none', margin: '0 auto', borderRadius: 6, overflow: 'hidden', backgroundColor: '#fff', boxShadow: '0 0 3px rgba(60, 72, 88, 0.15)'}}>

                    <tbody>
                    <tr>
                        <td style={{padding: '48px 24px 0', color: '#161c2d', fontSize: 18, fontWeight: 600}}>
                            Thank you for placing the order.
                            {/*Hello, {name}*/}
                        </td>
                    </tr>
                    <tr>
                        <td style={{padding: '15px 24px 15px', color: '#8492a6'}}>
                            Your package will be delivered in 48hrs
                        </td>
                    </tr>
                    <tr>
                        <td style={{padding: '15px 24px'}}>
                            <Link to={`/`} >Back to Home</Link>
                        </td>
                    </tr>
                    <tr>
                        <td style={{padding: '15px 24px 0', color: '#8492a6'}}>
                            {/*This link will be active for 30 min from the time this email was sent.*/}
                        </td>
                    </tr>
                    <tr>
                        <td style={{padding: '15px 24px 15px', color: '#8492a6'}}>
                            {/*Landrick <br /> Support Team*/}
                        </td>
                    </tr>
                    <tr>
                        <td style={{padding: '16px 8px', color: '#8492a6', backgroundColor: '#f8f9fc', textAlign: 'center'}}>
                            © 2021 UCSC OOAD.
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default OrderPage;