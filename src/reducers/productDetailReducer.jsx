import { Data } from "../data";
const initialState = {
    productDetails: Data.shopDetails
};

export default function ProductDetailReducer(state=initialState, action) {
    switch (action.type) {
        
        default:
            return state;
    }
}
