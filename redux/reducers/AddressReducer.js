import { ADD_ADDRESS, DELETE_ADDRESS } from "../ActionType";

const AddressReducer = (state = [], action) => {
    switch (action.type) {

        case ADD_ADDRESS:
            return [...state, action.payload]

        case DELETE_ADDRESS:

            const deleted = state.filter((item, index) => {
                return index !== action.payload;
            })

            return deleted;

        default:
            return state;

    }
};

export default AddressReducer;