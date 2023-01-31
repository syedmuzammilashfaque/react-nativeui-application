import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { addAddress } from '../../../redux/actions/Actions';

const AddAddress = ({ navigation }) => {

    const dispatch = useDispatch();

    const [city, setCity] = useState("");
    const [house, setHouse] = useState("");
    const [pin, setPin] = useState("");

    return (
        <>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            <View style={styles.mainContainer}>

                <View style={styles.topContainer}>
                    <TouchableOpacity
                        style={{ width: 40, height: 40, fontSize: 18, padding: 12, borderRadius: 8, backgroundColor: "#D3D3D3", marginLeft: 20, }}
                        onPress={() => { navigation.goBack(); }}>
                        <Text>
                            <Ionicon style={{ fontWeight: "bold", color: "#000", fontSize: 17 }}
                                name='arrow-back'
                            />
                        </Text>
                    </TouchableOpacity>
                    <Text style={{ textAlign: "center", fontSize: 20, color: "#000", fontWeight: "500", letterSpacing: 1, }}>Add Address</Text>
                </View>

                <View style={styles.bodyContainer}>

                    <View style={styles.inputBoxContainer}>
                        <FontAwesome name="laptop-house" size={20} />
                        <TextInput style={styles.inputBox} placeholder="Enter City Name"
                            value={city}
                            onChangeText={txt => { setCity(txt) }}
                        />
                    </View>

                    <View style={styles.inputBoxContainer}>
                        <FontAwesome name="building" size={20} />
                        <TextInput style={styles.inputBox} placeholder="Enter House Number"
                            keyboardType='number-pad'
                            value={house}
                            onChangeText={txt => { setHouse(txt) }}
                        />
                    </View>

                    <View style={styles.inputBoxContainer}>
                        <FontAwesome name="map-marker-alt" size={20} />
                        <TextInput style={styles.inputBox} placeholder="Enter PinCode"
                            keyboardType='number-pad'
                            value={pin}
                            onChangeText={txt => { setPin(txt) }}
                        />
                    </View>

                    <Button
                        onPress={() => {
                            if (city !== "" && house !== "" && pin !== "") {
                                dispatch(addAddress({ city: city, house: house, pinCode: pin }))
                                navigation.goBack();
                            }
                        }}
                        style={styles.btn}
                        color='rgb(50,50,50)'>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 12 }}>SAVE ADDRESS</Text>
                    </Button>

                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({

    mainContainer: {
        backgroundColor: "#fff",
        height: "100%",
        width: "100%",
    },

    topContainer: {
        marginTop: 20,
        width: "100%",
        justifyContent: 'center',
    },

    bodyContainer: {
        marginTop: 30,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    btn: {
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 4,
        backgroundColor: '#3C5898',
        padding: 5,
        width: "97%",
    },


    inputBoxContainer: {
        marginHorizontal: 10,
        backgroundColor: '#DEE9F7',
        marginVertical: 10,
        borderRadius: 4,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        elevation: 3,
        boxShadow: "5px 5px 10px #babecc, -5px -5px 10px #f2f3f5",
    },

    inputBox: {
        marginHorizontal: 10,
        flex: 1,
    },

});

export default AddAddress;

