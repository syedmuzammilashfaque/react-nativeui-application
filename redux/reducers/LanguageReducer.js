import { CHANGE_LANGUAGE } from "../ActionType";

const LanguageReducer = (state = "ENGLISH", action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return action.payload;
        default:
            return state;
    }
};

export default LanguageReducer;