import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import BookingModel from '../components/BookingModel'
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import imagePath from '../utils/imagePath';
import MapViewDirections from 'react-native-maps-directions';
import { locationPermission, getCurrentLocation } from '../helper/HelperFuncions';
import { mapsUtils } from '../utils/googleMapKey';

const Home = () => {

  const navigation = useNavigation();




  const mapRef = useRef();
  const [state, setState] = useState({
    picupCords: {
      latitude: null, // Initialize without hardcoded values
      longitude: null,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    droplocationCords: null, // No initial destination
  });

  const { picupCords, droplocationCords } = state;

  // Fetch current location when the screen loads
  useEffect(() => {
    const setCurrentLocation = async () => {
      const permissionGranted = await locationPermission();
      if (permissionGranted === 'granted') {
        try {
          const { latitude, longitude } = await getCurrentLocation();
          setState((prevState) => ({
            ...prevState,
            picupCords: {
              latitude,
              longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            },
          }));
        } catch (error) {
          Alert.alert('Error', 'Unable to fetch current location');
        }
      }
    };

    setCurrentLocation();
  }, []);

  const onPressLocation = () => {
    navigation.navigate('CHOOSE', { getCordinates: fetchValue });
  };

  const fetchValue = (data) => {
    setState({
      picupCords: {
        latitude: data.picupCords.latitude,
        longitude: data.picupCords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      droplocationCords: {
        latitude: data.droplocationCords.latitude,
        longitude: data.droplocationCords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    });
  };


  const handleSearch = () => {
    navigation.navigate('DropLocation'); // Navigate to Drop Location screen
  };

  
  return (
    <View style = {styles.container}>
      <Header/>

      
        {picupCords.latitude && (
          <MapView
            ref={mapRef}
            style={StyleSheet.absoluteFillObject}
            initialRegion={{
              latitude: picupCords.latitude,
              longitude: picupCords.longitude,
              latitudeDelta: picupCords.latitudeDelta,
              longitudeDelta: picupCords.longitudeDelta,
            }}
          >
            {/* Pickup Location Marker */}
            <Marker coordinate={picupCords} image={imagePath.icCurLoc} />

            {/* Drop Location Marker */}
            {droplocationCords && (
              <>
                <Marker coordinate={droplocationCords} image={imagePath.isGreenMarker} />

                {/* MapViewDirections for route */}
                <MapViewDirections
                  origin={picupCords}
                  destination={droplocationCords}
                  apikey={mapsUtils.GOOGLE_MAP_KEY} // Make sure this key has Directions API enabled
                  strokeColor="blue" // Customize route color
                  strokeWidth={4} // Customize route width
                  precision="high"
                  optimizeWaypoints={true} // Optimizes the route by rearranging the waypoints to minimize the overall distance
                  onReady={(result) => {
                    mapRef.current.fitToCoordinates(result.coordinates, {
                      edgePadding: {
                        right: 30,
                        bottom: 300,
                        left: 30,
                        top: 100,
                      },
                    });
                  }}
                  onError={(errorMessage) => {
                    console.log('Error: ', errorMessage);
                    Alert.alert('Error', 'Failed to get directions');
                  }}
                />
              </>
            )}
          </MapView>
        )}
{/* 
      <View style={styles.bottomCard}>
        <Text>What do you want?</Text>

        <TouchableOpacity style={styles.inputStyle} onPress={onPressLocation}>
          <Text>Choose Your Location</Text>
        </TouchableOpacity>
      </View>
       */}

      <View style = {styles.BookingPage}>
      <BookingModel onSearch={onPressLocation}/>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  BookingPage:{
    flex:1,
    justifyContent: 'flex-end',
    padding:10
      
  },
  bottomCard: {
    backgroundColor: 'white',
    width: '100%',
    padding: 30,
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
  },
  inputStyle: {
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    alignItems: 'center',
    height: 48,
    justifyContent: 'center',
    marginTop: 16,
  },
})