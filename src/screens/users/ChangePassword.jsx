import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Ionicon from 'react-native-vector-icons/Ionicons';

const ChangePassword = ({ navigation }) => {

    const [isOldPasswordVisible, setIsOldPasswordVisible] = useState(false);
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
    const [isReTypeNewPasswordVisible, setIsReTypeNewPasswordVisible] = useState(false);


    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [reTypePassword, setReTypeNewPassword] = useState("");


    const changePasswordHandler = () => {
        console.log("chl rha hai =>")
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

                    <Text style={{ marginTop: 20, fontSize: 16, color: "#000", fontWeight: "600" }}>User Name . Application Name </Text>


                    <Text style={{ marginVertical: 10, fontWeight: "bold", fontSize: 30, color: "#000" }}>Change Password</Text>


                    <Text style={{ fontSize: 16, color: "gray", marginBottom: 40, }}>Your Password must be at least6 characters and should include a combination of numbers, letters and special characters (!$@%).</Text>


                    <View style={styles.inputBoxContainer}>
                        <FontAwesome name="lock" size={20} />
                        <TextInput
                            style={styles.inputBox}
                            placeholder="Enter Current Password"
                            secureTextEntry={isOldPasswordVisible ? false : true}
                            value={oldPassword}
                            onChangeText={setOldPassword}
                        />
                        <TouchableOpacity
                            onPress={() => setIsOldPasswordVisible(!isOldPasswordVisible)}>
                            <FontAwesome
                                name={isOldPasswordVisible ? 'eye-slash' : 'eye'}
                                size={20}
                            />
                        </TouchableOpacity>
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



                    <View style={styles.inputBoxContainer}>
                        <FontAwesome name="lock" size={20} />
                        <TextInput
                            style={styles.inputBox}
                            placeholder="Enter Re-type New Password"
                            secureTextEntry={isReTypeNewPasswordVisible ? false : true}
                            value={reTypePassword}
                            onChangeText={setReTypeNewPassword}
                        />
                        <TouchableOpacity
                            onPress={() => setIsReTypeNewPasswordVisible(!isReTypeNewPasswordVisible)}>
                            <FontAwesome
                                name={isNewPasswordVisible ? 'eye-slash' : 'eye'}
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>


                    <TouchableOpacity onPress={() => { navigation.navigate('ForgetPassword') }}>
                        <Text style={{ fontSize: 16, color: "#6A5ACD", fontWeight: "600", marginVertical: 20, }}>Forgot your password? </Text>
                    </TouchableOpacity>


                    <Button
                        disabled={!oldPassword || !newPassword || !reTypePassword}
                        style={styles.changePassBtn}
                        onPress={changePasswordHandler}
                    >
                        <Text style={{ color: "#fff" }}>CHANGE PASSWORD</Text>
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

    changePassBtn: {
        width: "100%",
        backgroundColor: '#3C5898',
        color: "#fff",
        alignItems: 'center',
        marginVertical: 60,
        paddingVertical: 7,
        borderRadius: 4,
        elevation: 5,
    },


});

export default ChangePassword;