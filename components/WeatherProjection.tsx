import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { RootStackParamList } from '../types';


export default function WeatherProjection() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate('Main');
  };

  const views = Array.from({ length: 10 }).map((_, index) => (
    <TouchableOpacity key={index} style={styles.row} onPress={handlePress}>
      <Image source={require('../assets/cloudy.gif')} style={styles.windImage} />
      <Text style={styles.forecastText}>{index}</Text>
    </TouchableOpacity>
  ));

  return (
    <View style={styles.container}>
      {views}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 1280,
    height: 720,
    flexDirection: 'row',
    flexWrap: 'wrap', 
    padding: 5,
    backgroundColor: '#A0E9FF',
  },
  row: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  windImage: {
    width: 50,
    height: 50,
  },
  forecastText: {
    fontSize: 20,
    color: '#000',
  },
});