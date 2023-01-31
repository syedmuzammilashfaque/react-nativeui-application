import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import IconicIcons from "react-native-vector-icons/Ionicons";
import Home from "../screens/Home";
import Profile from "../screens/users/Profile";
import Cart from "../screens/Cart";
import Search from "../screens/Search";
import Wishlist from "../screens/Wishlist";

const Tab = createBottomTabNavigator();

const Footer = () => {

    const theme = useSelector(state => state.ThemeReducer);

    const data = useSelector(state => state);

    return (

        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                labeled: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    borderTopWidth: 0,
                    position: "absolute",
                    bottom: 20,
                    left: 15,
                    right: 15,
                    elevation: 0,
                    backgroundColor: theme == "DARK" ? "#000" : "#fff",
                    borderRadius: 10,
                    height: 70,
                    ...styles.shadow,
                }
            }}
        >

            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ justifyContent: "center", alignItems: "center", top: 10 }}>
                            <IconicIcons
                                style={{
                                    color: focused ? "#3C5898" : "#748c94",
                                }} size={20} name="home-outline" />

                            <Text style={{ color: focused ? "#3C5898" : "#748c94", fontSize: 12, fontWeight: "600", }}>Home</Text>
                        </View>
                    ),
                }}
            />


            <Tab.Screen name="Search" component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ justifyContent: "center", alignItems: "center", top: 10 }}>
                            <IconicIcons
                                style={{
                                    color: focused ? "#3C5898" : "#748c94",
                                }} size={20} name="search" />

                            <Text style={{ color: focused ? "#3C5898" : "#748c94", fontSize: 12, fontWeight: "600", }}>Search</Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen name="Cart" component={Cart}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.customBtn}>
                            <IconicIcons
                                style={{
                                    color: "#fff",
                                }} size={20} name="cart-outline" />

                            <Text style={{ color: "#fff", fontSize: 12, fontWeight: "600", }}>Cart</Text>

                            <View style={{
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                borderRadius: 10,
                                backgroundColor: "#D3D3D3",
                                width: 20,
                                height: 20,
                                position: "absolute",
                                top: 2,
                                right: 1,
                                shadowColor: "#7F5Df8",
                                shadowOffset: {
                                    width: 0,
                                    height: 10,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.5,
                                elevation: 5,
                            }}>
                                <Text style={{ color: "#000", fontWeight: "600" }}>{data.CartReducer.length}</Text>
                            </View>
                        </View>
                    ),
                }}
            />


            <Tab.Screen name="Wishlist" component={Wishlist}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ justifyContent: "center", alignItems: "center", top: 10 }}>
                            <IconicIcons
                                style={{
                                    color: focused ? "#3C5898" : "#748c94",
                                }} size={20} name="heart-outline" />

                            <Text style={{ color: focused ? "#3C5898" : "#748c94", fontSize: 12, fontWeight: "600", }}>WishList</Text>

                            <View style={{
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                borderRadius: 10,
                                backgroundColor: "#3C5898",
                                width: 20,
                                height: 20,
                                position: "absolute",
                                top: -8,
                                right: -3,
                                shadowColor: "#7F5Df8",
                                shadowOffset: {
                                    width: 0,
                                    height: 10,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.5,
                                elevation: 5,
                            }}>
                                <Text style={{ color: "#fff", fontWeight: "600", }}>{data.WishlistReducer.length}</Text>
                            </View>

                        </View>
                    ),
                }}
            />


            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ justifyContent: "center", alignItems: "center", top: 10 }}>
                            <IconicIcons
                                style={{
                                    color: focused ? "#3C5898" : "#748c94",
                                }} size={20} name="person-outline" />

                            <Text style={{ color: focused ? "#3C5898" : "#748c94", fontSize: 12, fontWeight: "600", }}>Profile</Text>
                        </View>
                    ),
                }}
            />

        </Tab.Navigator >
    )
}



const styles = StyleSheet.create({

    shadow: {
        shadowColor: "#7F5Df8",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },

    customBtn: {
        color: "#fff",
        backgroundColor: "#3C5898",
        padding: 12,
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
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

export default Footer;