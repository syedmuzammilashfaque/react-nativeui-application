import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAddress } from '../../../redux/actions/Actions';

const MyAddress = ({ navigation }) => {

    const dispatch = useDispatch();

    const addressList = useSelector(state => state.AddressReducer);

    return (
        <>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            <View style={styles.mainContainer}>

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

                    <TouchableOpacity
                        style={{ fontSize: 18, padding: 12, borderRadius: 12, backgroundColor: "#D3D3D3" }}
                        onPress={() => { navigation.navigate('AddAddress') }}>
                        <Text>Add Address</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{ textAlign: "center", marginVertical: 40, fontSize: 20, color: "#000", fontWeight: "500", letterSpacing: 1, }}>My Address</Text>


                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={addressList}
                    renderItem={({ item, index }) => {
                        return (

                            <>
                                <View style={{
                                    backgroundColor: "#f0f2f5",
                                    shadowColor: "#D3D3D3",
                                    shadowOffset: {
                                        width: 0,
                                        height: 10,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.5,
                                    elevation: 5,
                                    width: "95%",
                                    borderRadius: 10,
                                    padding: 10,
                                    alignSelf: "center",
                                    justifyContent: "center",
                                }}>

                                    <Text style={{
                                        borderBottomWidth: 1, borderBottomColor: "#BeBeBe", color: "#000", fontSize: 18, fontWeight: "600", padding: 5, margin: 10, marginTop: 20,
                                    }}>{"City   " + item.city}</Text>
                                    <Text style={{
                                        borderBottomWidth: 1, borderBottomColor: "#BeBeBe", color: "#000", fontSize: 18, fontWeight: "600", padding: 5, margin: 10, marginTop: 20,
                                    }}>{"House   " + item.house}</Text>
                                    <Text style={{
                                        borderBottomWidth: 1, borderBottomColor: "#BeBeBe", color: "#000", fontSize: 18, fontWeight: "600", padding: 5, margin: 10, marginTop: 20,
                                    }}>{"PinCode   " + item.pinCode}</Text>

                                    <Button
                                        onPress={() => {
                                            dispatch(deleteAddress(index));
                                            navigation.goBack();
                                        }}
                                        style={styles.btn}
                                        color='rgb(50,50,50)'>
                                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 12 }}>DELETE ADDRESS</Text>
                                    </Button>
                                </View>
                            </>
                        )
                    }} />


            </View>
        </>
    )
}


const styles = StyleSheet.create({

    mainContainer: {
        padding: 10,
        height: "100%",
        width: "100%",
        flex: 1,
        backgroundColor: '#fff',
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


    btn: {
        marginVertical: 20,
        marginHorizontal: 5,
        borderRadius: 4,
        backgroundColor: '#3C5898',
        padding: 5,
        width: "97%",
    },

});

export default MyAddress;

