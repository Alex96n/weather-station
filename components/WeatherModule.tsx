import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

export default function WeatherModule() {
  return (
    <View style={styles.container}>
      <View style={styles.iconView}>
        <Text style={styles.temperatureText}>2m</Text>
      </View>
      <View style={styles.windIcon}>
        <Image source={require('../assets/wind.gif')} style={styles.windImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,

    elevation: 5,
  },
  iconView: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  temperatureText: {
    position: 'absolute',
    top: -50, 
    left: 100, 
    fontSize: 50,
    color: 'black',
    fontFamily: 'Arial',
  },
  windIcon: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  windImage: {
    width: 200, 
    height: 200,
  },
});