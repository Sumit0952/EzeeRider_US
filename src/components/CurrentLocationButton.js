import React, { useState } from 'react';
import { TouchableOpacity, Text, Alert, PermissionsAndroid, StyleSheet, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const CurrentLocationButton = ({ onLocationFetched, selectedField }) => {
  const [loading, setLoading] = useState(false);

  const requestLocationPermission = async () => {
    setLoading(true);
    try {
      // Request location permission
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getCurrentLocation();
      } else {
        Alert.alert('Permission Denied', 'Location permission is required to use this feature.');
        setLoading(false);
      }
    } catch (err) {
      console.warn(err);
      setLoading(false);
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // Call the onLocationFetched function passed as a prop
        onLocationFetched(latitude, longitude, selectedField);
        setLoading(false);
      },
      (error) => {
        Alert.alert('Error', `Error fetching location: ${error.message}`);
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={requestLocationPermission}
      disabled={loading}
    >
      <Text style={styles.buttonText}>
        {loading ? 'Loading...' : 'Use Current Location'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1e90ff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CurrentLocationButton;
