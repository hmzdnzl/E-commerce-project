

const initialState = {
    productDetails: {},
    loading: false,
};

export default function ProductDetailReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_PRODUCT_DETAIL_LOADING':
            return {
                ...state,
                loading: true,
            };
        case 'SET_PRODUCT_DETAIL':
            return {
                ...state,
                productDetails: action.payload,
                loading: false,
            };
        case 'SET_PRODUCT_DETAIL_ERROR':
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}
