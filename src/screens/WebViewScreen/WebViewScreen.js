import React from 'react';
import {View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';


const WebViewScreen = () => {
    return(
        <WebView
        source={{uri: 'https://parkyapp.w3spaces.com/login.html'}}
        style = {{flex:1}}
        startInLoadingState />
    )
}


export default WebViewScreen;
