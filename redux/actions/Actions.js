import { CHANGE_LANGUAGE, ADD_TO_CART, REMOVE_FROM_CART, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, ADD_ADDRESS, DELETE_ADDRESS, CHANGE_THEME } from "../ActionType";


export const addItemToCart = data => ({
    type: ADD_TO_CART,
    payload: data,
});

export const removeFromCart = index => ({
    type: REMOVE_FROM_CART,
    payload: index,
});


export const addToWishlist = data => ({
    type: ADD_TO_WISHLIST,
    payload: data,
});


export const removeFromWishlist = index => ({
    type: REMOVE_FROM_WISHLIST,
    payload: index,
});

export const addAddress = data => ({
    type: ADD_ADDRESS,
    payload: data,
});


export const deleteAddress = index => ({
    type: DELETE_ADDRESS,
    payload: index,
});

export const changeTheme = type => ({
    type: CHANGE_THEME,
    payload: type,
});


export const changeLanguage = type => ({
    type: CHANGE_LANGUAGE,
    payload: type,
});