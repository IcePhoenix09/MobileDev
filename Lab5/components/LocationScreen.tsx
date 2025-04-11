import { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';

import * as Location from 'expo-location';
import MapView, { Marker, Polygon } from 'react-native-maps';

function ShowLocation({location}: {location: Location.LocationObject}) {

  let latitude = JSON.stringify(location.coords.latitude);
  let longitude = JSON.stringify(location.coords.longitude);
  let height = JSON.stringify(location.coords.altitude);
  let text = JSON.stringify(location);
  
  const regionCoordinates = [
    { latitude: 50.5, longitude: 30.5 },
    { latitude: 50, longitude: 30.5 },
    { latitude: 50, longitude: 30 },
    { latitude: 50.5, longitude: 30 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Location</Text>
      <Text style={styles.subtitle}>Latitude: {latitude}</Text>
      <Text style={styles.subtitle}>Longitude: {longitude}</Text>
      <Text style={styles.subtitle}>Height: {height}</Text>
      <View style={styles.mapContainer}>
          <MapView
              style={styles.map}
              initialRegion={{
                  latitude: 50,
                  longitude: 30,
                  latitudeDelta: 0.5922,
                  longitudeDelta: 0.5421,
              }}
              showsUserLocation={true}
              followsUserLocation={true}
              >
              <Marker
                  coordinate={{ latitude: 50, longitude: 30 }}
                  title="Marker"
                  description="This is a marker example"
              />
              <Polygon
                coordinates={regionCoordinates}
                strokeColor="#FF0000"   // Color of the polygon border
                fillColor="rgba(255, 217, 0, 0.3)"  // Color of the polygon fill
                strokeWidth={2}
              />
          </MapView>
      </View>
    </View>);
}

export default function LocationScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    let locationMonitior: Location.LocationSubscription | null = null;

    async function getCurrentLocation() {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      locationMonitior = await Location.watchPositionAsync({
        accuracy:Location.Accuracy.Lowest,
        timeInterval: 2000,
        distanceInterval: 1,
        }
        ,(location_update) => {
          setLocation(location_update);
      })

      if (location !== null) {
        setLocation(location);
      } else {
        setErrorMsg('Location is null');
      }
    
    }
    
    getCurrentLocation();

    return () => {
      console.log('unmounting location');
      if (locationMonitior) {
        locationMonitior.remove();
      }
    };
  }, []);




  let text = 'Needs permision to show location';
  let longitude = '';
  let height = '';
  let latitude = '';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    latitude = JSON.stringify(location.coords.latitude);
    longitude = JSON.stringify(location.coords.longitude);
    height = JSON.stringify(location.coords.altitude);
    text = JSON.stringify(location);
  }

  return !location ? (
      <View style={styles.container}>
        <Text style={styles.title}>{text}</Text>
      </View>
    ) : (
      <ShowLocation location={location}></ShowLocation>
    )
}



const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 50,
        alignItems: 'flex-start',
        backgroundColor: '#1f1c1c',
    },
    mapContainer: {
        height: 400,
        width: 400,
        marginTop: 20,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#DCC9A9',
    },
    subtitle: {
        fontSize: 18,
        color: '#DCC9A9',
        marginTop: 10,
    },
})
