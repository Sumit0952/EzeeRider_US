import { StyleSheet, View } from 'react-native';
import React from 'react';
import { mapsUtils } from '../utils/googleMapKey';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const AddressPickup = ({ placeholderText, fetchAddress }) => {

  const onPressAddress = (data, details) => {
    if (details && details.geometry) {
      const lat = details.geometry.location.lat;
      const lng = details.geometry.location.lng;
      console.log("Latitude:", lat, "Longitude:", lng); // To ensure details are being fetched correctly
      fetchAddress(lat, lng); // Pass lat and lng to the parent
    } else {
      console.log("No details available");
    }
  };

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder={placeholderText}
        onPress={onPressAddress} // Ensure data and details are captured
        fetchDetails={true} // Fetch full details including lat/lng
        query={{
          key: mapsUtils.GOOGLE_MAP_KEY,
          language: 'en',
        }}
        styles={{
          textInputContainer: styles.containerStyle,
          textInput: styles.textInputStyle,
        }}
      />
    </View>
  );
};

export default AddressPickup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerStyle: {
    backgroundColor: 'white',
  },
  textInputStyle: {
    height: 48,
    color: 'black',
    fontSize: 16,
    backgroundColor: '#F3F3F3',
  },
});
