import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from "./src/screens/Splash";
import Footer from "./src/components/Footer";
import Home from "./src/screens/Home";
import Login from "./src/screens/users/Login";
import Signup from "./src/screens/users/Signup";
import Camera from "./src/screens/users/Camera";
import Profile from "./src/screens/users/Profile";
import ResetPassword from "./src/screens/users/ResetPassword";
import ForgetPassword from "./src/screens/users/ForgetPassword";
import ChangePassword from "./src/screens/users/ChangePassword";
import Cart from "./src/screens/Cart";
import Wishlist from "./src/screens/Wishlist";
import Search from "./src/screens/Search";
import AddAddress from "./src/screens/users/AddAddress";
import MyAddress from "./src/screens/users/MyAddress";
import Setting from "./src/screens/users/Setting";
import Offers from "./src/screens/users/Offers";
import MyOrders from "./src/screens/users/MyOrders";



const Main = () => {

    const Stack = createNativeStackNavigator();

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Footer">
                    <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                    <Stack.Screen name="Footer" component={Footer} options={{ headerShown: false }} />
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                    <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                    <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
                    <Stack.Screen name="Camera" component={Camera} options={{ headerShown: false }} />
                    <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: false }} />
                    <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown: false }} />
                    <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
                    <Stack.Screen name="Wishlist" component={Wishlist} options={{ headerShown: false }} />
                    <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
                    <Stack.Screen name="AddAddress" component={AddAddress} options={{ headerShown: false }} />
                    <Stack.Screen name="MyAddress" component={MyAddress} options={{ headerShown: false }} />
                    <Stack.Screen name="Offers" component={Offers} options={{ headerShown: false }} />
                    <Stack.Screen name="MyOrders" component={MyOrders} options={{ headerShown: false }} />
                    <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Main;