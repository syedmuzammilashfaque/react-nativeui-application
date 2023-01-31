import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { product } from "../components/products/products";

const Search = () => {

    const theme = useSelector(state => state.ThemeReducer);

    return (
        <>
            <StatusBar
                backgroundColor={theme == "DARK" ? "#000" : "#fff"}
                barStyle="dark-content" />
            <View style={[styles.mainContainer, {
                backgroundColor: theme == "DARK" ? "#000" : "#fff",
            }]}>
                <FontAwesome name="shopping-bag" size={20} color={theme == "DARK" ? "#fff" : "#000"} />
                <Text style={{ fontSize: 20, fontWeight: "500", color: theme == "DARK" ? "#fff" : "#000" }}>jkhsdkdjsg</Text>

            </View>
        </>
    )
}


const styles = StyleSheet.create({

    mainContainer: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
    },

});
export default Search;