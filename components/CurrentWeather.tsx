import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
    WeatherProjection: undefined;
};

export default function CurrentWeather() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleGifPress = () => {
      navigation.navigate('WeatherProjection');
    };

    return (
  
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={handleGifPress}>
          <Image source={require('../assets/cloudy.gif')} style={styles.windImage} />
        </TouchableOpacity>
        <Text style={styles.temperatureText}>Inomhus: 18°C</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 10,
    overflow: 'hidden', 
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,

    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temperatureText: {
    fontSize: 30,
    color: '#000000',
    fontFamily: 'Arial',
    marginLeft: 10, 
  },
  windImage: {
    width: 50,
    height: 50, 
  },
});