import PropTypes from 'prop-types';


const ProductPropType = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    lowestPrice: PropTypes.number.isRequired
}

const SkuPropType = {
    ID: PropTypes.string.isRequired,
    productID: PropTypes.string.isRequired,
    size: PropTypes.string,
    color: PropTypes.string,
    style: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired
}

const ReviewPropType = {
    ID: PropTypes.string,
    productID: PropTypes.string,
    skuID: PropTypes.string,
    userId: PropTypes.string,
    score: PropTypes.number,
    comment: PropTypes.string,
}

const CartPropType = {
    productID: PropTypes.string,
    sku: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
};


export const initialStoreState = {
    isLoading: true,
    user: {},
    activeProduct: {},
    activeSkuID: null,
    products: [],
    skus:{},
    reviews: {},
    cart: {},
    shippingCost: 10
}

initialStoreState.PropTypes = {
    isLoading: PropTypes.bool,
    user: PropTypes.shape({
        name: PropTypes.string
    }),
    activeProduct: ProductPropType,
    activeSkuID: PropTypes.string,
    products: PropTypes.arrayOf(ProductPropType),
    skus: PropTypes.objectOf(PropTypes.arrayOf(SkuPropType)),
    reviews: PropTypes.objectOf(PropTypes.arrayOf(ReviewPropType)),
    cart: CartPropType,
    shippingCost: PropTypes.number
}
