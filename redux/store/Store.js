import { createStore, combineReducers } from "redux";
import CartReducer from "../reducers/CartReducer";
import WishlistReducer from "../reducers/WishlistReducer";
import AddressReducer from "../reducers/AddressReducer";
import ThemeReducer from "../reducers/ThemeReducer";
import LanguageReducer from "../reducers/LanguageReducer";
const routeReducer = combineReducers({ CartReducer, WishlistReducer, AddressReducer, ThemeReducer, LanguageReducer });

const store = createStore(routeReducer);

export default store;