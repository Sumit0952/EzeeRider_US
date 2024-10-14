import { Button, StyleSheet, View, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import AddressPickup from '../components/AddressPickup';
import CustomBtn from '../components/CustomBtn';
import { showError, showSuccess, getCurrentLocation } from '../helper/HelperFuncions';
import CurrentLocationButton from '../components/CurrentLocationButton';
import { Picker } from '@react-native-picker/picker';

const ChooseLocation = (props) => {
  const navigation = useNavigation();

  const [state, setState] = useState({
    pickupAddress: 'Mumbai',     // Set default pickup address to Mumbai
    destinationAddress: '',       // Store the destination address
    picupCords: {                 // Default coordinates for Mumbai
      latitude: 19.0760,
      longitude: 72.8777,
    },
    droplocationCords: {},
    selectedField: 'pickup',      // State to manage field selection
    placeholderText: 'Current Location',  // Dynamic placeholder text
  });

  const [selectedOption, setSelectedOption] = useState('me');  // State to handle "Me" or "Others"

  const { pickupAddress, destinationAddress, picupCords, droplocationCords, selectedField, placeholderText } = state;

  // Update placeholder based on selected option (Me/Others)
  const handleOptionChange = (value) => {
    setSelectedOption(value);
    const newPlaceholder = value === 'me' ? 'Current Location' : 'Enter Pickup Location';
    setState((prevState) => ({
      ...prevState,
      placeholderText: newPlaceholder,
    }));
  };

  const fetchAddressCords = (latitude, longitude, field, address) => {
    setState((prevState) => ({
      ...prevState,
      [field === 'pickup' ? 'picupCords' : 'droplocationCords']: {
        latitude: latitude,
        longitude: longitude,
      },
      [field === 'pickup' ? 'pickupAddress' : 'destinationAddress']: address,  // Set the address
    }));
  };

  const handleFieldSelection = (field) => {
    setState({ ...state, selectedField: field });
  };

  const onDone = () => {
    const isValid = checkValid();
    if (isValid) {
      props.route.params.getCordinates({ picupCords, droplocationCords });
      showSuccess('Success');
      navigation.goBack();
    }
  };

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

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled" style={{ backgroundColor: 'white', flex: 1, padding: 24 }}>
        
        {/* Dropdown Menu at Top Right for "Me" or "Others" */}
        <View style={styles.dropdownContainer}>
          <Picker
            selectedValue={selectedOption}
            style={styles.picker}
            onValueChange={(value) => handleOptionChange(value)}
          >
            <Picker.Item label="For Me" value="me" />
            <Picker.Item label="For Others" value="others" />
          </Picker>
        </View>

        {/* Pickup Location Input */}
        <AddressPickup
          placeholderText={placeholderText}  // Dynamic placeholder based on dropdown selection
          fetchAddress={(lat, lng) => fetchAddressCords(lat, lng, 'pickup')}
          onFocus={() => handleFieldSelection('pickup')}
          value={pickupAddress}  // Default value set to Mumbai
        />

        <View style={{ marginBottom: 16 }} />

        {/* Destination Location Input */}
        <AddressPickup
          placeholderText="Enter Destination Location"
          fetchAddress={(lat, lng) => fetchAddressCords(lat, lng, 'destination')}
          onFocus={() => handleFieldSelection('destination')}
          value={destinationAddress}  // Pass the destination address to the text input
        />

        {/* Current Location Button */}
        <CurrentLocationButton
          onLocationFetched={(latitude, longitude, address) => fetchAddressCords(latitude, longitude, selectedField, address)}
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
  dropdownContainer: {
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  picker: {
    height: 50,
    width: 150,
  },
});
