import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { useSelector } from "react-redux";

const Header = () => {

    const theme = useSelector(state => state.ThemeReducer);

    return (
        <>

            <StatusBar
                backgroundColor={theme == "DARK" ? "#000" : "#fff"}
                barStyle="dark-content" />

            <View style={[styles.mainContainer, { backgroundColor: theme == "DARK" ? "#000" : "#fff", }]}>
                <Text style={{ fontStyle: "italic", marginLeft: 10, fontSize: 30, fontWeight: "900", color: theme == "DARK" ? "red" : "#000" }}>eCommerce</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    mainContainer: {
        borderBottomWidth: 0.3,
        borderBottomColor: "#748c94",
        padding: 15,
        justifyContent: "center",
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

export default Header;