import { Button, StyleSheet, View, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import AddressPickup from '../components/AddressPickup';
import CustomBtn from '../components/CustomBtn';
import { showError, showSuccess, getCurrentLocation } from '../helper/HelperFuncions';
import CurrentLocationButton from '../components/CurrentLocationButton';

const ChooseLocation = (props) => {
  const navigation = useNavigation();

  const [state, setState] = useState({
    picupCords: {},
    droplocationCords: {},
    selectedField: 'pickup', // State to manage field selection
  });

  const { picupCords, droplocationCords, selectedField } = state;

  useEffect(() => {
    const fetchCurrentLocation = async () => {
      try {
        const { latitude, longitude } = await getCurrentLocation();
        setState((prevState) => ({
          ...prevState,
          picupCords: { latitude, longitude },
        }));
      } catch (error) {
        showError('Error fetching current location');
      }
    };

    fetchCurrentLocation();
  }, []);

  const checkValid = () => {
    if (Object.keys(picupCords).length === 0) {
      showError('Please enter your pickup location');
      return false;
    }

    if (Object.keys(droplocationCords).length === 0) {
      showError('Please enter your destination location');
      return false;
    }

    if (
      picupCords.latitude === droplocationCords.latitude &&
      picupCords.longitude === droplocationCords.longitude
    ) {
      showError('Pickup and destination cannot be the same.');
      return false;
    }

    return true;
  };

  const onDone = () => {
    const isValid = checkValid();
    if (isValid) {
      props.route.params.getCordinates({ picupCords, droplocationCords });
      showSuccess('Success');
      navigation.goBack();
    }
  };

  const fetchAddressCords = (latitude, longitude, field) => {
    setState((prevState) => ({
      ...prevState,
      [field === 'pickup' ? 'picupCords' : 'droplocationCords']: {
        latitude: latitude,
        longitude: longitude,
      },
    }));
    //console.log(lat,lng)
  };

  const handleFieldSelection = (field) => {
    setState({ ...state, selectedField: field });
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled" style={{ backgroundColor: 'white', flex: 1, padding: 24 }}>
        {/* Pickup Location Input */}
        <AddressPickup
          placeholderText="Enter Pickup Location"
          fetchAddress={(lat, lng) => fetchAddressCords(lat, lng, 'pickup')}
        />

        <View style={{ marginBottom: 16 }} />

        {/* Destination Location Input */}
        <AddressPickup
          placeholderText="Enter Destination Location"
          fetchAddress={(lat, lng) => fetchAddressCords(lat, lng, 'destination')}
        />

        {/* Current Location Button */}
        <CurrentLocationButton
          onLocationFetched={(latitude, longitude) => fetchAddressCords(latitude, longitude, selectedField)}
          selectedField={selectedField} // Pass the current selected field
        />

        <CustomBtn onPress={onDone} btnStyle={{ backgroundColor: 'blue' }} textStyle={{ color: 'white' }} />
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default ChooseLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
