const Cart = (props) => {
    const {cart} = props;
    const submitOrderHandler = () => {

    }
    if (!Object.keys(cart).length) {
        return <></>;
    }
    const cartItems = Object.values(cart);
    return (
        <div
            className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 p-4 show"
            style={{width: 300}}>
            <div className="pb-4">
                {cartItems.map(item => {
                    const {
                        sku: {
                            skuID,
                            size,
                            color,
                            style,
                            price,
                            image,
                            stock
                        },
                        name,
                        quantity
                    } = item;
                    return (
                        <div className="d-flex align-items-center">
                            <img src={`${image}`} className="shadow rounded"
                                 style={{width: 64, maxHeight:64}} alt/>
                            <div className="flex-1 text-start ms-3">
                                <h6 className="text-dark mb-0">{name.length > 40 ? name.substring(0, 40) + '...': name}</h6>
                                <p className="text-muted mb-0">${price} X {quantity}</p>
                            </div>
                            <h6 className="text-dark mb-0">${(price*quantity).toFixed(2)}</h6>
                        </div>
                    )
                })}
            </div>
            <div className="d-flex align-items-center justify-content-between pt-4 border-top">
                <h6 className="text-dark mb-0">Total($):</h6>
                <h6 className="text-dark mb-0">${ cartItems.reduce((sum, currItem) => currItem.sku.price*currItem.quantity + sum, 0).toFixed(2) }</h6>
            </div>
            <div className="mt-3 text-center">
                {/*<a href="javascript:void(0)" className="btn btn-primary me-2">View Cart</a>*/}
                <button onClick={()=>submitOrderHandler()} className="btn btn-primary">Checkout</button>
            </div>
            {/*<p className="text-muted text-start mt-1 mb-0">*T&amp;C Apply</p>*/}
        </div>
    )
}

export default Cart;