const CartContent = (props) => {
    const {cartItems} = props;
    return (
        <div className="pb-4">
            {cartItems.map(item => {
                const {
                    sku: {
                        id,
                        price,
                        image,
                    },
                    name,
                    quantity
                } = item;
                return (
                    <div key={`cart-item-${id}`} className="d-flex align-items-center">
                        <img src={`${image}`} className="shadow rounded"
                             style={{width: 64, maxHeight: 64}} alt/>
                        <div className="flex-1 text-start ms-3">
                            <h6 className="text-dark mb-0">{name.length > 40 ? name.substring(0, 40) + '...' : name}</h6>
                            <p className="text-muted mb-0">${price} X {quantity}</p>
                        </div>
                        <h6 className="text-dark mb-0">${(price * quantity).toFixed(2)}</h6>
                    </div>
                )
            })}
        </div>
    )
}

export default CartContent;