import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../App";

const ProductSlides = (props) => {
    const {storeState: {activeSkuID}} = useContext(StoreContext);
    const {skus} = props
    const [currentIndex, setCurrentIndex] = useState(0)
    const skuIDs = skus?.map(item => item.skuID) || []

    useEffect(() => {
        console.log(activeSkuID)
        console.log(skus)
        if (activeSkuID) {
            setCurrentIndex(skuIDs.indexOf(activeSkuID))
        }
    }, [activeSkuID])

    return (
        <div className="col-md-5">
            <div className="tns-outer" id="tns1-ow">
                <div id="tns1-mw" className="tns-ovh">
                    <div className="tns-inner" id="tns1-iw">
                        <div
                            className="tiny-single-item  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                            id="tns1">
                            {skus?.map((sku, index) => {
                                return (
                                    <div id={`tns1-item${index}`}
                                         key={`tns1-item${index}`}
                                         className={`tiny-slide tns-item ${currentIndex === index ? 'show' : 'hide'}`}
                                         style={{display: currentIndex !== index ? 'none' : false}}
                                         tabIndex={-1}><img src={sku.image}
                                                            className="img-fluid rounded" alt/></div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="tns-nav" aria-label="Carousel Pagination">
                    {
                        skus?.map((sku, index) => {
                            return (
                                <button key={`${sku.skuID}-image`}
                                        type="button"
                                        data-nav={index}
                                        aria-controls="tns1"
                                        className={`${currentIndex === index ? 'tns-nav-active' : ''}`}
                                        onClick={() => setCurrentIndex(index)}
                                        aria-label="Carousel Page 1" tabIndex={-1}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductSlides