import { useState } from "react";

const useCartSubtotal = items => {
    const [subtotal, setSubtotal] = useState(0)
    const updateSubtotalHandler = (items) => {
        setSubtotal(
            items.reduce((sum, currItem) => currItem.sku.price * currItem.quantity + sum, 0)
        );
    }
    return [subtotal, updateSubtotalHandler]
};

export default useCartSubtotal;