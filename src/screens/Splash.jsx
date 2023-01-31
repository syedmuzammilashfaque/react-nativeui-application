import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import colors from '../../assets/colors/colors';
import Lottie from 'lottie-react-native';


const data = [
    {
        title: 'Welcome to the\nworld of eCommerce',
        text: 'shop from 20+ million products, 50+ categories and top brands.',
        image: require('../../assets/images/splash3.json'),
    },
    {
        title: 'Search, discover\nand enjoy',
        text: 'Start your shopping adventure through our personalized channels and categories.',
        image: require('../../assets/images/splash2.json'),
    },
    {
        title: 'Smart shopping,\nsmart You!',
        text: 'Always check product and seller ratings before buying.',
        image: require('../../assets/images/splash1.json'),
    },
];



const Splash = ({ navigation }) => {

    const renderItem = ({ item }) => {
        return (
            <>

                <View style={styles.mainContainer}>
                    <View style={styles.topContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.text}>{item.text}</Text>
                    </View>

                    <View style={styles.bottomContainer}>
                        <Lottie
                            style={styles.image}
                            source={item.image}
                            autoPlay
                            loop
                        />
                    </View>
                </View>

            </>
        );
    };

    const keyExtractor = (item) => item.title;

    const renderDoneButton = () => {
        return (
            <View style={styles.rightTextWrapper}>
                <Text style={styles.rightText}>Done</Text>
            </View>
        );
    };

    const renderNextButton = () => {
        return (
            <View style={styles.rightTextWrapper}>
                <Text style={styles.rightText}>Next</Text>
            </View>
        );
    };

    const renderPrevButton = () => {
        return (
            <View style={styles.leftTextWrapper}>
                <Text style={styles.leftText}>Prev</Text>
            </View>
        );
    };


    const handleDone = () => {
        navigation.navigate("Login");
    }


    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <AppIntroSlider
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                data={data}
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.activeDotStyle}
                renderDoneButton={renderDoneButton}
                renderNextButton={renderNextButton}
                renderPrevButton={renderPrevButton}
                showPrevButton
                onDone={handleDone}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        backgroundColor: colors.white,
    },

    topContainer: {
        marginHorizontal: 5,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.white,
    },


    title: {
        fontSize: 37,
        color: colors.black,
        fontWeight: "bold",
        fontFamily: 'OpenSans-Bold',
        textShadowColor: 'rgb(152, 152, 152)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },

    text: {
        fontSize: 20,
        letterSpacing: 1,
        color: colors.gray,
        fontWeight: "600",
        fontFamily: 'OpenSans-SemiBold',
        marginTop: 15,
    },


    bottomContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        backgroundColor: colors.white,
    },

    image: {
        height: 300,
        width: 300,
        resizeMode: "contain",
    },

    dotStyle: {
        backgroundColor: colors.blueFaded,
    },

    activeDotStyle: {
        backgroundColor: colors.blue,
    },

    rightTextWrapper: {
        width: 40,
        height: 40,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

    rightText: {
        color: colors.blue,
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 14,
    },

    leftTextWrapper: {
        width: 40,
        height: 40,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

    leftText: {
        color: colors.blue,
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 14,
    },
});

export default Splash;