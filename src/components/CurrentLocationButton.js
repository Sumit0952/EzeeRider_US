import React, { useState } from 'react';
import { TouchableOpacity, Text, Alert, PermissionsAndroid, StyleSheet, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';

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

        // Reverse geocode to get the address
        Geocoder.from(latitude, longitude)
          .then((json) => {
            const address = json.results[0].formatted_address;
            console.log(`Address for ${selectedField}:`, address);

            // Pass both coordinates and the fetched address to the parent component
            onLocationFetched(latitude, longitude, address);
          })
          .catch((error) => {
            console.warn('Error with reverse geocoding:', error);
          });

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
