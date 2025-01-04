import React from 'react';
import { View, StyleSheet } from 'react-native';
import 'global.css';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WeatherModule from 'components//WeatherModule';
import WeatherProjection from 'components/WeatherProjection'; 
import CurrentWeather from 'components/CurrentWeather';

const RootStack = createStackNavigator();

function MainLayout() {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.CurrentWeather}>
                    <CurrentWeather />
                </View>
                <View style={styles.weather}>
                    <WeatherModule />
                </View>
            </View>
        </View>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                <RootStack.Screen name="Main" component={MainLayout} />
                <RootStack.Screen name="WeatherProjection" component={WeatherProjection} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 1280,
        height: 720,
        flexDirection: 'column',
        padding: 5,
        backgroundColor: '#A0E9FF',
    },
    row: {
        flexDirection: 'row',
        flex: 1,
    },
    CurrentWeather: {
        flex: 1,
        margin: 5,
    },
    weather: {
        flex: 1,
        margin: 5,

    },
    water: {
        flex: 1,
        margin: 5,
    },
});