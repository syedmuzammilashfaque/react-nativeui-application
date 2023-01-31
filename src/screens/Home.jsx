import React from 'react';
import { StatusBar, ScrollView, View } from 'react-native';
import Header from "../components/Header";
import Slider from "../components/Slider";
import Product from "../components/products/Product";
import { useSelector } from "react-redux";
const Home = ({ navigation }) => {

    const theme = useSelector(state => state.ThemeReducer);

    return (
        <>
            <StatusBar
                backgroundColor={theme == "DARK" ? "#000" : "#fff"}
                barStyle="dark-content" />

            <View style={{
                flex: 1, height: "100%", width: "100%",
                backgroundColor: theme == "DARK" ? "#000" : "#fff",
            }}>

                <Header />

                <ScrollView style={{ flex: 1, marginBottom: 110, }}>
                    <Slider />
                    <Product />
                </ScrollView>
            </View>
        </>
    )
};

export default Home;