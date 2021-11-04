import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import { Fontisto } from '@expo/vector-icons'; 

import * as Location from 'expo-location';

const { width: SECREEN_WIDTH } = Dimensions.get('window');

const API_KEY = "";

const fetchWeather = (latitude, longitude) => fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&units=metric&appid=${API_KEY}`).then(res => res.json());

const icons = {
  Clouds: 'cloudy',
  Clear: 'day-sunny',
  Rain: 'rain',
};

export default function App() {
  const [city, setCity] = useState('Loadding..');
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);

  const getWeather = async () => {
    let { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }

    const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    // latitude, longitude를 이용해서 reverse geocoding - 위도 경도를 이용하여 주소 알기
    const location = await Location.reverseGeocodeAsync({ latitude, longitude }, { useGoogleMaps: false });
    setCity(location[0].city);

    const { daily } = await fetchWeather(latitude, longitude);
    console.log(daily)
    setDays(daily.map(d => ({ temp: d.temp.day, main: d.weather[0].main, description: d.weather[0].description })));
  }

  useEffect(() => {
    getWeather();
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="black" />
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.weather}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {days.length === 0 ? (
          <View style={styles.day}>
            <ActivityIndicator color="white" size="large" />
          </View>
        ) : (
          days.map(day => (
            <View style={styles.day}>
              <Fontisto name={icons[day.main]} size={80} color="black" />
              <Text style={styles.temp}>{Math.floor(day.temp)}</Text>
              <Text style={styles.description}>{day.main}</Text>
              <Text style={styles.description}>{day.description}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  city: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cityName: {
    color: 'black',
    fontSize: 68,
    fontWeight: '700',
  },
  weather: {
    // backgroundColor: 'blue'
  },
  day: {
    width: SECREEN_WIDTH,
    alignItems: 'center',
  },
  box: {
    alignItems: 'center'
  },
  temp: {
    fontSize: 60,
  },
  description: {
    fontSize: 60
  },
});
