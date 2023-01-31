import React from 'react';
import { StyleSheet, View, Image } from 'react-native';


const Slider = () => {

    return (
        <>
            <View>
                <Image style={styles.bnrImg} source={require("../../assets/images/banner.jpg")} />
            </View>
        </>
    )
}


const styles = StyleSheet.create({

    bnrImg: {
        marginTop: 1,
        width: "99%",
        height: 150,
        resizeMode: "cover",
    },



});

export default Slider;