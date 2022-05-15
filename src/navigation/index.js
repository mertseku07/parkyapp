/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WebViewScreen from '../screens/WebViewScreen';

import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-reanimated';

import Header from '../components/header';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function DrawerRoutes(){
    return(
        <NavigationContainer independent={true}>
            <Drawer.Navigator initialRouteName="HomeScreen" screenOptions={{swipeEnabled:false}} >
                <Drawer.Screen name="Home" component={HomeScreen} options={{
                    headerTitle:()=><Header/>,
                    drawerIcon: ({focused, size}) =>(
                        <Icon
                            name="home"
                            size={size}
                            color={focused ? '#332fd0' : '#ccc'}
                        />
                    ),
                }} />
                <Drawer.Screen name="Profile" component={ProfileScreen} options={{
                    headerTitle:()=><Header/>,
                    drawerIcon: ({focused, size}) =>(
                        <Icon
                            name="user"
                            size={size}
                            color={focused ? '#332fd0' : '#ccc'}
                        />
                    ),
                }}/>
                <Drawer.Screen name="Logout" component={Navigation} options={{
                    headerShown:false,
                    drawerIcon: ({focused, size}) =>(
                        <Icon
                            name="arrow-right"
                            size={size}
                            color={focused ? '#332fd0' : '#ccc'}
                        />
                    ),
                }}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

function Navigation(){
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name = "SignIn" component={SignInScreen} />
                <Stack.Screen name = "SignUp" component={SignUpScreen} />
                <Stack.Screen name = "Home" component={DrawerRoutes} />
                <Stack.Screen name = "Webview" component={WebViewScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}




export default Navigation;
