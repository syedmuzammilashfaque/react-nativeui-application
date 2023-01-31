import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import IconicIcons from "react-native-vector-icons/Ionicons";
import { useSelector } from 'react-redux';


const ProductCart = ({ item, onAddToCart, onAddWishlist }) => {

    const theme = useSelector(state => state.ThemeReducer);

    return (
        <>
            <View style={[styles.cart, {
                backgroundColor: theme == "DARK" ? "#000" : "#fff",
            }]}>
                <Image source={item.image} style={styles.itemImg} />
                <Text style={[styles.itemName, { color: theme == "DARK" ? "#fff" : "#000", }]}>{item.name}</Text>

                <View style={styles.cartBottom}>
                    <Text style={[styles.itemPrice, { color: theme == "DARK" ? "#fff" : "#3C5898", }]}>{"Rs:" + " " + item.price}</Text>

                    <TouchableOpacity style={styles.addToCartBtn} onPress={() => { onAddToCart(item) }} >
                        <IconicIcons name='cart' color="#fff" size={20} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.wishlistBtn} onPress={() => {
                    onAddWishlist(item);
                }}>
                    <IconicIcons name='heart-outline' color="#000" size={20} />
                </TouchableOpacity>

            </View>
        </>
    )
}

export default ProductCart;

const styles = StyleSheet.create({

    cart: {
        borderRadius: 10,
        width: 205,
        height: 205,
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 5,
        shadowColor: "#7F5Df8",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },

    itemImg: {
        width: "100%",
        height: "50%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    itemName: {
        fontSize: 13,
        marginLeft: 10,
        marginTop: 10,
        fontWeight: "400",
    },

    itemPrice: {
        fontSize: 15,
        marginLeft: 10,
        marginTop: 10,
        fontWeight: "700",
    },

    cartBottom: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    addToCartBtn: {
        backgroundColor: "#3C5898",
        height: 40,
        width: 40,
        borderRadius: 20,
        padding: 10,
        shadowColor: "#7F5Df8",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },

    wishlistBtn: {
        backgroundColor: "#fff",
        height: 40,
        width: 40,
        borderRadius: 20,
        padding: 10,
        position: "absolute",
        top: 5,
        right: 5,
        shadowColor: "#7F5Df8",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },

});