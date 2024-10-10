import React, { useState, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const GOOGLE_PLACES_API_KEY = 'AIzaSyDPnTtoIyikfBoIHV93RAaeD8bdtYkjqWI';  // replace with your API key
const GOOGLE_DIRECTIONS_API_KEY = 'AIzaSyDPnTtoIyikfBoIHV93RAaeD8bdtYkjqWI';  // same key can be used

const MapWithRoute = () => {
  const [startLocation, setStartLocation] = useState(null);
  const [destinationLocation, setDestinationLocation] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const mapRef = useRef(null);

  const getRouteDirections = async (startLoc, destLoc) => {
    try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc.latitude},${startLoc.longitude}&destination=${destLoc.latitude},${destLoc.longitude}&key=${GOOGLE_DIRECTIONS_API_KEY}`
        );
        
        const json = await response.json();
        const points = decodePolyline(json.routes[0].overview_polyline.points);
        setRouteCoordinates(points);
      } catch (error) {
        console.error(error);
      }
  };

  const decodePolyline = (t) => {
    let points = [];
    let index = 0, len = t.length;
    let lat = 0, lng = 0;

    while (index < len) {
      let b, shift = 0, result = 0;
      do {
        b = t.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      const dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
      lat += dlat;

      shift = 0;
      result = 0;
      do {
        b = t.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      const dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));
      lng += dlng;

      points.push({
        latitude: lat * 1e-5,
        longitude: lng * 1e-5,
      });
    }
    return points;
  };

  return (
    <View style={styles.container}>
      {/* Start Location Search Input */}
      <GooglePlacesAutocomplete
        placeholder="Enter Starting Point"
        query={{
          key: GOOGLE_PLACES_API_KEY,
          language: 'en',
        }}
        onPress={(data, details = null) => {
          const { lat, lng } = details.geometry.location;
          const startCoordinates = { latitude: lat, longitude: lng };

          setStartLocation(startCoordinates);
          setRegion({
            latitude: lat,
            longitude: lng,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          });

          // Check if destination is already set and fetch the route
          if (destinationLocation) {
            getRouteDirections(startCoordinates, destinationLocation);
          }

          // Move the map to start location
          if (mapRef.current) {
            mapRef.current.animateToRegion({
              latitude: lat,
              longitude: lng,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }, 1000);
          }
        }}
        fetchDetails={true}
        styles={{
          container: { position: 'absolute', top: 20, width: '100%', zIndex: 1 },
          listView: { backgroundColor: 'white' },
        }}
      />

      {/* Destination Location Search Input */}
      <GooglePlacesAutocomplete
        placeholder="Enter Destination"
        query={{
          key: GOOGLE_PLACES_API_KEY,
          language: 'en',
        }}
        onPress={(data, details = null) => {
          const { lat, lng } = details.geometry.location;
          const destinationCoordinates = { latitude: lat, longitude: lng };

          setDestinationLocation(destinationCoordinates);

          // Fetch the route after both locations are set
          if (startLocation) {
            getRouteDirections(startLocation, destinationCoordinates);
          }

          // Move the map to the destination location
          if (mapRef.current) {
            mapRef.current.animateToRegion({
              latitude: lat,
              longitude: lng,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }, 1000);
          }
        }}
        fetchDetails={true}
        styles={{
          container: { position: 'absolute', top: 80, width: '100%', zIndex: 1 },
          listView: { backgroundColor: 'white' },
        }}
      />

      {/* Map View */}
      <MapView
        ref={mapRef}
        style={styles.map}
        region={region}
      >
        {/* Start Marker */}
        {startLocation && (
          <Marker
            coordinate={startLocation}
            title="Starting Point"
            pinColor="green"
          />
        )}

        {/* Destination Marker */}
        {destinationLocation && (
          <Marker
            coordinate={destinationLocation}
            title="Destination"
            pinColor="red"
          />
        )}

        {/* Draw Route Polyline Between Start and Destination */}
        {routeCoordinates.length > 0 && (
          <Polyline
            coordinates={routeCoordinates}
            strokeColor="#000"  // black color for route line
            strokeWidth={3}
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapWithRoute;
