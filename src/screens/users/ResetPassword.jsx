import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';


const ResetPassword = ({ navigation }) => {

    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);

    const [otp, setOtp] = useState();
    const [newPassword, setNewPassword] = useState();

    const changePasswordHandler = async () => {
        console.log("chl rha hai");
    }


    return (
        <>

            <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            <View style={styles.mainContainer}>

                <View style={styles.formContainer}>


                    <TouchableOpacity onPress={() => { navigation.navigate('Home') }}>
                        <Text>
                            <Ionicon style={{ fontWeight: "bold", color: "#000", fontSize: 30 }}
                                name='arrow-back'
                            />
                        </Text>

                    </TouchableOpacity>

                    <Text style={{ marginVertical: 10, fontWeight: "bold", fontSize: 30, color: "#000" }}>New Password</Text>

                    <Text style={{ fontSize: 16, color: "gray" }}>Enter your OTP.</Text>


                    <View style={styles.inputBoxContainer}>
                        <Ionicon name="send" size={20} />
                        <TextInput style={styles.inputBox} placeholder="Enter Your OTP"
                            value={otp}
                            onChangeText={setOtp}
                            keyboardType="number-pad"
                        />
                    </View>


                    <View style={styles.inputBoxContainer}>
                        <FontAwesome name="lock" size={20} />
                        <TextInput
                            style={styles.inputBox}
                            placeholder="Enter New Password"
                            secureTextEntry={isNewPasswordVisible ? false : true}
                            value={newPassword}
                            onChangeText={setNewPassword}
                        />
                        <TouchableOpacity
                            onPress={() => setIsNewPasswordVisible(!isNewPasswordVisible)}>
                            <FontAwesome
                                name={isNewPasswordVisible ? 'eye-slash' : 'eye'}
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>

                    <Button
                        disabled={!otp || !newPassword}
                        style={styles.btn}
                        onPress={changePasswordHandler}
                    >
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 17 }}>
                            RESET PASSWORD
                        </Text>
                    </Button>


                </View>

            </View>

        </>
    )
}

export default ResetPassword;

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
        backgroundColor: '#DEE9F7',
        marginVertical: 15,
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

})