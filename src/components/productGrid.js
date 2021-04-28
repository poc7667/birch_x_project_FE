import { Constants } from "../Constants";
import { Link } from "react-router-dom";

const ProductGrid = ({product}) => {
    const {
        productID,
        productName,
        description,
        skus
    } = product || {};
    const {image, price} = skus[0];
    return (
        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div className="card shop-list border-0 position-relative">


                <div className="shop-image position-relative overflow-hidden rounded shadow" style={{
                    width: 200,
                    height: 200,
                    overflow: 'hidden',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <Link
                        to={`/products/${productID}`}
                    >
                        <img src={`${image}`} className="img-fluid" alt/>
                    </Link>
                </div>
                <div className="card-body content pt-4 p-2">
                    <Link
                        className="text-dark product-name h6"
                        to={`/products/${productID}`}
                    >
                        {productName}
                    </Link>
                    <div className="d-flex justify-content-between mt-1">
                        <h6 className="text-muted small fst-italic mb-0 mt-1">$ {(price * Constants.DISCOUNT).toFixed(0)}
                            <del
                                className="text-danger ms-2">$ {price}</del>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductGrid;