import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

import { useSelector } from 'react-redux';

const Profile = ({ navigation }) => {


    const theme = useSelector(state => state.ThemeReducer);


    return (
        <>
            <StatusBar
                backgroundColor={theme == "DARK" ? "#000" : "#fff"}
                barStyle="dark-content" />
            <View style={[styles.mainContainer, {
                backgroundColor: theme == "DARK" ? "#000" : "#fff",
            }]}>
                <View style={styles.topContainer}>
                    <TouchableOpacity
                        style={{ fontSize: 18, padding: 12, borderRadius: 12, backgroundColor: "#D3D3D3" }}
                        onPress={() => { navigation.goBack(); }}>
                        <Text>
                            <Ionicon style={{ fontWeight: "bold", color: "#000", fontSize: 17 }}
                                name='arrow-back'
                            />
                        </Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, color: "#000", fontWeight: "500", letterSpacing: 1, }}>My Profile</Text>

                    <TouchableOpacity
                        style={{ fontSize: 18, padding: 12, borderRadius: 12, backgroundColor: "#D3D3D3" }}
                        onPress={() => { navigation.navigate('Setting') }}>
                        <Text>
                            <Ionicon style={{ fontWeight: "bold", color: "#000", fontSize: 17 }}
                                name='settings'
                            />
                        </Text>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        marginVertical: 30,
                        borderRadius: 130 / 2,
                        backgroundColor: 'none',
                        height: 130,
                        width: 130,
                    }}>
                    <Image
                        source={require("../../../assets/images/muz.jpg")}
                        style={{
                            aspectRatio: 1,
                            resizeMode: "contain",
                            height: 130,
                            width: 130,
                            borderWidth: 4,
                            borderColor: '#babecc',
                            borderRadius: 130 / 2,
                            zIndex: 0,
                        }}
                    />
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            top: 100,
                            right: 0,
                            position: 'absolute',
                            borderRadius: 130 / 2,
                            padding: 5,
                            backgroundColor: '#DEE9F7',
                            elevation: 3,
                            boxShadow: "5px 5px 10px #babecc, -5px -5px 10px #f2f3f5",
                            zIndex: 1,
                        }}>

                        <Ionicon
                            onPress={() => navigation.navigate("Camera")}
                            name="camera"
                            size={30} />
                    </View>
                </View>

                <Text style={{
                    color: theme == "DARK" ? "#fff" : "#000",
                    marginBottom: 20,
                    fontSize: 18,
                    fontWeight: "500",
                    letterSpacing: 1,
                    textAlign: "center",
                }}>User.Name</Text>

                <View style={{ width: "95%" }}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('MyAddress') }}
                        style={styles.userBtn}
                        color='rgb(50,50,50)'>
                        <Ionicon color="#000" name="exit" size={14} />
                        <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 12, color: theme == "DARK" ? "#fff" : "#000" }}>
                            MY ADDRESS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('MyOrders') }}
                        style={styles.userBtn}
                        color='rgb(50,50,50)'>
                        <Ionicon color="#000" name="exit" size={14} />
                        <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 12, color: theme == "DARK" ? "#fff" : "#000" }}>MY ORDERS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Offers') }}
                        style={styles.userBtn}
                        color='rgb(50,50,50)'>
                        <Ionicon color="#000" name="exit" size={14} />
                        <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 12, color: theme == "DARK" ? "#fff" : "#000" }}>OFFERS</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </>
    )
}

const styles = StyleSheet.create({

    mainContainer: {
        height: "100%",
        width: "100%",
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        alignSelf: "center",
    },

    topContainer: {
        width: "100%",
        flexDirection: "row",
        paddingTop: 16,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        alignItems: "center",
        textAlign: "center",
    },

    userBtn: {
        display: "flex",
        flexDirection: "row",
        marginVertical: 20,
        marginHorizontal: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#BeBeBe",
        padding: 10,
        width: "97%",
    },


});

export default Profile;