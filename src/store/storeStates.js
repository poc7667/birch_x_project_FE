import PropTypes from 'prop-types';


const ProductPropType = {
    id: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    lowestPrice: PropTypes.number.isRequired,
    hasSkus: PropTypes.bool
}

const SkuPropType = {
    id: PropTypes.string.isRequired,
    productId: PropTypes.string.isRequired,
    size: PropTypes.string,
    color: PropTypes.string,
    style: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired
}

const ReviewPropType = {
    id: PropTypes.string,
    productId: PropTypes.string,
    skuId: PropTypes.string,
    userId: PropTypes.string,
    score: PropTypes.number,
    comment: PropTypes.string,
}

const CartPropType = {
    product: PropTypes.string,
    sku: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
};


export const initialStoreState = {
    isLoading: true,
    user: {},
    activeProduct: {},
    activeSkuId: null,
    products: {},
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
    activeSkuId: PropTypes.string,
    products: PropTypes.arrayOf(ProductPropType),
    skus: PropTypes.objectOf(PropTypes.arrayOf(SkuPropType)),
    reviews: PropTypes.objectOf(PropTypes.arrayOf(ReviewPropType)),
    cart: CartPropType,
    shippingCost: PropTypes.number
}
