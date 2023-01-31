import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { Button } from 'react-native-paper';


const Signup = ({ navigation }) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const signupHandler = () => {
        console.log("chl rha hai ");
    }

    return (
        <>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            <View style={styles.mainContainer}>

                <View style={styles.formContainer}>

                    <View style={styles.formTopContainer}>

                        <Text style={{ fontSize: 25, fontWeight: "bold", color: "#3C5898", }}>Sign Up</Text>

                        <View
                            style={{
                                marginVertical: 20,
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

                    </View>

                    <View style={styles.formBottomContainer}>

                        <View style={styles.formBottomSubContainer}>

                            <View style={styles.inputBoxContainer}>
                                <Ionicon name="person" size={20} />
                                <TextInput style={styles.inputBox} placeholder="Enter Your Name"
                                    value={name}
                                    onChangeText={setName}
                                />
                            </View>


                            <View style={styles.inputBoxContainer}>
                                <Ionicon name="mail" size={20} />
                                <TextInput style={styles.inputBox} placeholder="Enter Your Email"
                                    value={email}
                                    onChangeText={setEmail}
                                />
                            </View>


                            <View style={styles.inputBoxContainer}>
                                <FontAwesome name="lock" size={20} />
                                <TextInput
                                    style={styles.inputBox}
                                    placeholder="Enter Your Password"
                                    secureTextEntry={isPasswordVisible ? false : true}
                                    value={password}
                                    onChangeText={setPassword}
                                />
                                <TouchableOpacity
                                    onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                    <FontAwesome
                                        name={isPasswordVisible ? 'eye-slash' : 'eye'}
                                        size={20}
                                    />
                                </TouchableOpacity>
                            </View>


                            <View style={styles.inputBoxContainer}>
                                <FontAwesome name="lock" size={20} />
                                <TextInput
                                    style={styles.inputBox}
                                    placeholder="Enter Your Confirm Password"
                                    secureTextEntry={isConfirmPasswordVisible ? false : true}
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                />
                                <TouchableOpacity
                                    onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}>
                                    <FontAwesome
                                        name={isConfirmPasswordVisible ? 'eye-slash' : 'eye'}
                                        size={20}
                                    />
                                </TouchableOpacity>
                            </View>


                            <Button
                                disabled={!email || !password || !confirmPassword || !name}
                                style={styles.signupButton}
                                onPress={signupHandler}
                            >
                                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 17 }}>
                                    SIGN UP
                                </Text>
                            </Button>

                            <Text style={{ textAlign: 'center', color: '#3C5898', }}>Or</Text>

                            <View>
                                <View style={{ flexDirection: 'row', marginVertical: 10 }}>

                                    <Text
                                        style={{
                                            color: '#3C5898',
                                        }}>
                                        Already have an account ? </Text>
                                    <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                                        <Text
                                            style={{
                                                marginLeft: 5,
                                                color: '#3C5898',
                                                fontWeight: 'bold',
                                            }}>
                                            Login
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

            </View>

        </>
    );
}

const styles = StyleSheet.create({

    mainContainer: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    formContainer: {
        position: 'absolute',
        height: '100%',
        width: '100%',
    },

    formTopContainer: {
        flex: 1,
        textAlign: "center",
        justifyContent: 'center',
        alignItems: "center",
    },


    formBottomContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    formBottomSubContainer: {
        backgroundColor: '#fff',
        width: '95%',
        padding: 10,
        borderRadius: 15,
        elevation: 3,
        boxShadow: "5px 5px 10px #babecc, -5px -5px 10px #f2f3f5",
    },

    inputBoxContainer: {
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

    signupButton: {
        backgroundColor: '#3C5898',
        color: "#fff",
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 10,
        elevation: 5,
    },

});


export default Signup;