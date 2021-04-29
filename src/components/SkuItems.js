import { useContext, useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../App";

const SkuItems = (props) => {
    const {storeState:{activeSkuID}} = useContext(StoreContext);
    const {skus,updateSelectedSkuHandler} = props
    const [skuItems, setSkuItems] = useState([])
    useEffect(() => {
        if (skus){
            setSkuItems(skus.map(item =>{
                const {
                    skuID,
                    size,
                    color,
                    style,
                    price,
                    stock
                } = item;
                const title = [color, size, style].filter(i => i?.length).join("/ ") || 'Current'
                if (title){
                    return {
                        skuID,
                        title,
                        price,
                        stock
                    }
                }
            }))
        }
    },[skus])

    return (
        <div className="d-flex align-items-center">
            <h6 className="mb-0">Choose</h6>
            <ul className="list-unstyled mb-0 ms-3">
                {
                    skuItems.map(item => {
                        return (
                            <li className="list-inline-item" key={`sku-item-li-${item.skuID}`}><Link
                                onClick={()=>updateSelectedSkuHandler(item)}
                                style={{width: 'auto', margin:5, paddingLeft:5,paddingRight:5}}
                                className={`btn btn-icon ${item.skuID !== activeSkuID ?'btn-soft-primary':'btn-soft-warning'}`}> {item.title} </Link>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default SkuItems