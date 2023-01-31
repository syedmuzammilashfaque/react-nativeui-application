import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../ActionType";

const WishlistReducer = (state = [], action) => {
    switch (action.type) {

        case ADD_TO_WISHLIST:
            return [...state, action.payload]

        case REMOVE_FROM_WISHLIST:
            const deletedArrayWishlist = state.filter((item, index) => {
                return index !== action.payload;
            })

            return deletedArrayWishlist;

        default:
            return state;

    }
};

export default WishlistReducer;