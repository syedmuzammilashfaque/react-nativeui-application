import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';

const ForgetPassword = ({ navigation }) => {

    const [email, setEmail] = useState("");

    const forgetHandler = async () => {
        console.log("chl rha hai");
    };

    return (
        <>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            <View style={styles.mainContainer}>
                <View style={styles.formContainer}>


                    <TouchableOpacity onPress={() => { navigation.goBack(); }}>
                        <Text>
                            <Ionicon style={{ fontWeight: "bold", color: "#000", fontSize: 30 }}
                                name='arrow-back'
                            />
                        </Text>

                    </TouchableOpacity>

                    <Text style={{ marginVertical: 10, fontWeight: "bold", fontSize: 30, color: "#000" }}>Find your account</Text>

                    <Text style={{ fontSize: 16, color: "gray" }}>Enter your email.</Text>



                    <View style={styles.inputBoxContainer}>
                        <Ionicon name="mail" size={20} />
                        <TextInput style={styles.inputBox} placeholder="Enter Your Email"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <Button
                        style={styles.btn}
                        onPress={forgetHandler}
                        disabled={!email}
                    >
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 17 }}>
                            SEND EMAIL</Text>
                    </Button>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({


    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
    },

    formContainer: {
        marginVertical: 30,
        width: "90%",
        justifyContent: 'center',
    },

    inputBoxContainer: {
        marginTop: 30,
        backgroundColor: '#DEE9F7',
        marginVertical: 10,
        borderRadius: 4,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1
    },

    inputBox: {
        marginHorizontal: 10,
        flex: 1,
    },

    btn: {
        width: "100%",
        backgroundColor: '#3C5898',
        color: "#fff",
        alignItems: 'center',
        marginVertical: 20,
        paddingVertical: 7,
        borderRadius: 4,
        elevation: 5,
    },


});

export default ForgetPassword;