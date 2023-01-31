import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from "react-redux";
import { changeTheme, changeLanguage } from "../../../redux/actions/Actions";

const Setting = ({ navigation }) => {

    const dispatch = useDispatch();
    const theme = useSelector(state => state.ThemeReducer);
    const language = useSelector(state => state.LanguageReducer);

    const user = {
        name: "user.name",
        email: "user.email@gmail.com",
        number: "user.number",
    }

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [number, setNumber] = useState(user.number);


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
                        style={{ width: 40, height: 40, fontSize: 18, padding: 12, borderRadius: 8, backgroundColor: "#D3D3D3", marginLeft: 20, }}
                        onPress={() => { navigation.goBack(); }}>
                        <Text>
                            <Ionicon style={{ fontWeight: "bold", color: "#000", fontSize: 17 }}
                                name='arrow-back'
                            />
                        </Text>
                    </TouchableOpacity>
                    <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "500", letterSpacing: 1, color: theme == "DARK" ? "#fff" : "#000", }}>Profile Setting</Text>
                </View>


                <View style={styles.bodyContainer}>
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
                        <Ionicon name="mail" size={20} />
                        <TextInput style={styles.inputBox} placeholder="Enter Your Email"
                            value={number}
                            onChangeText={setNumber}
                        />
                    </View>


                    <Button
                        style={styles.modeBtn}
                        onPress={() => {
                            if (theme === 'DARK') {
                                dispatch(changeTheme('LIGHT'));
                            } else {
                                dispatch(changeTheme('DARK'));
                            }
                        }}>
                        <Text style={styles.modeBtnTxt}>
                            MODE
                        </Text>
                    </Button>




                    <Button
                        style={styles.modeBtn}
                        onPress={() => {
                            if (language === 'ENGLISH') {
                                dispatch(changeLanguage('URDU'));
                            } else {
                                dispatch(changeLanguage('ENGLISH'));
                            }
                        }}>
                        <Text style={styles.modeBtnTxt}>
                            CHANGE LANGUAGE
                        </Text>
                    </Button>



                    <Button
                        onPress={() => { navigation.navigate('ChangePassword') }}
                        style={styles.btn}
                        color='rgb(50,50,50)'>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 12 }}>CHANGE PASSWORD?</Text>
                    </Button>

                    <Button
                        style={styles.btn}
                        color='rgb(50,50,50)'>
                        <Ionicon color="#fff" name="exit" size={14} />
                        &nbsp;&nbsp;<Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 12 }}>
                            LOGOUT</Text>
                    </Button>
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({

    mainContainer: {
        height: "100%",
        width: "100%",
    },

    topContainer: {
        marginTop: 20,
        width: "100%",
        justifyContent: 'center',
    },

    bodyContainer: {
        padding: 10,
        marginVertical: 10,
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
export default Setting;