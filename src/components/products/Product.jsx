import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { products } from "./products";
import ProductCart from "./ProductCart";
import { addItemToCart, addToWishlist } from '../../../redux/actions/Actions';
import { useDispatch, useSelector } from 'react-redux';

const Product = () => {

    const dispatch = useDispatch();

    const theme = useSelector(state => state.ThemeReducer);


    const [categoryList, setCategoryList] = useState([]);
    const [tShirtList, setTShirtList] = useState([]);
    const [jeansList, setJeansList] = useState([]);
    const [shoesList, setShoesList] = useState([]);
    const [jacketList, setJacketList] = useState([]);
    const [sliperList, setSliperList] = useState([]);
    const [trouserList, setTrouserList] = useState([]);

    useEffect(() => {

        let tempCategory = [];
        products.category.map(item => {
            tempCategory.push(item);
        })

        setCategoryList(tempCategory);
        setTShirtList(products.category[0].data);
        setJeansList(products.category[1].data);
        setShoesList(products.category[2].data);
        setJacketList(products.category[3].data);
        setSliperList(products.category[4].data);
        setTrouserList(products.category[5].data);

    }, []);

    return (
        <>
            <ScrollView style={{ flex: 1, marginBottom: 110, }}>
                <View
                    style={[styles.flatListView, {
                        backgroundColor: theme == "DARK" ? "#000" : "#fff",
                    }]}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={categoryList}
                        renderItem={({ item, index }) => {
                            return (
                                <>
                                    <TouchableOpacity style={styles.categoryBtn}>
                                        <Text style={styles.categoryBtnTxt}>{item.category}</Text>
                                    </TouchableOpacity>
                                </>
                            )
                        }} />
                </View>

                <Text style={styles.mainTxt}>New T-Shart</Text>
                <View style={styles.flatListView}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={tShirtList}
                        renderItem={({ item, index }) => {
                            return (
                                <>
                                    <ProductCart item={item}
                                        onAddWishlist={(x) => {
                                            dispatch(addToWishlist(x));
                                        }}
                                        onAddToCart={(x) => {
                                            dispatch(addItemToCart(x));
                                        }} />
                                </>
                            )
                        }} />
                </View>

                <Text style={styles.mainTxt}>New Jeans</Text>
                <View style={styles.flatListView}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={jeansList}
                        renderItem={({ item, index }) => {
                            return (
                                <>
                                    <ProductCart item={item}
                                        onAddWishlist={(x) => {
                                            dispatch(addToWishlist(x));
                                        }}
                                        onAddToCart={(x) => {
                                            dispatch(addItemToCart(x));
                                        }} />
                                </>
                            )
                        }} />
                </View>

                <Text style={styles.mainTxt}>New Shoes</Text>
                <View style={styles.flatListView}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={shoesList}
                        renderItem={({ item, index }) => {
                            return (
                                <>
                                    <ProductCart item={item}
                                        onAddWishlist={(x) => {
                                            dispatch(addToWishlist(x));
                                        }}
                                        onAddToCart={(x) => {
                                            dispatch(addItemToCart(x));
                                        }} />
                                </>
                            )
                        }} />
                </View>

                <Text style={styles.mainTxt}>New Jacket</Text>
                <View style={styles.flatListView}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={jacketList}
                        renderItem={({ item, index }) => {
                            return (
                                <>
                                    <ProductCart item={item}
                                        onAddWishlist={(x) => {
                                            dispatch(addToWishlist(x));
                                        }}
                                        onAddToCart={(x) => {
                                            dispatch(addItemToCart(x));
                                        }} />
                                </>
                            )
                        }} />
                </View>

                <Text style={styles.mainTxt}>New Sliper</Text>
                <View style={styles.flatListView}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={sliperList}
                        renderItem={({ item, index }) => {
                            return (
                                <>
                                    <ProductCart item={item}
                                        onAddWishlist={(x) => {
                                            dispatch(addToWishlist(x));
                                        }}
                                        onAddToCart={(x) => {
                                            dispatch(addItemToCart(x));
                                        }} />
                                </>
                            )
                        }} />
                </View>

                <Text style={styles.mainTxt}>New Trouser</Text>
                <View style={styles.flatListView}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={trouserList}
                        renderItem={({ item, index }) => {
                            return (
                                <>
                                    <ProductCart item={item}
                                        onAddWishlist={(x) => {
                                            dispatch(addToWishlist(x));
                                        }}
                                        onAddToCart={(x) => {
                                            dispatch(addItemToCart(x));
                                        }} />
                                </>
                            )
                        }} />
                </View>

            </ScrollView>
        </>
    )
};


const styles = StyleSheet.create({

    flatListView: {
        marginHorizontal: 5,
        marginTop: 12,
    },

    mainTxt: {
        fontWeight: "600",
        color: "#000",
        fontSize: 20,
        marginHorizontal: 20,
        marginTop: 10,
    },

    categoryBtn: {
        padding: 10,
        borderWidth: 1,
        marginLeft: 20,
        borderRadius: 10,
        borderColor: "#3C5898",
    },

    categoryBtnTxt: {
        color: "#3C5898",
    },

});

export default Product;