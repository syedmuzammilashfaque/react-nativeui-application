import { ADD_TO_CART, REMOVE_FROM_CART } from "../ActionType";

const CartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload]

        case REMOVE_FROM_CART:
            const deletedArrayCart = state.filter((item, index) => {
                return index !== action.payload;
            })

            return deletedArrayCart;

        default:
            return state;
    }
};


export default CartReducer;