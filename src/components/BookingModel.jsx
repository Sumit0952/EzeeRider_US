// BookingModel.js
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useEffect, useRef } from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const BookingModel = ({ onSearch }) => {

    const textInputRef = useRef(null); // Create a reference for the TextInput

    // Automatically focus on TextInput when the component mounts
    useEffect(() => {
      if (textInputRef.current) {
        textInputRef.current.blur();
      }
    }, []);
  
  return (
    <View style={styles.box}>
      {/* Search Container */}
      <View style={styles.searchContainer}>
        <EvilIcons name='search' size={20} color='#888' style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          ref={textInputRef}
          placeholder="Search"
          placeholderTextColor="#888"
          onFocus={onSearch} // Navigate on focus
        />
      </View>

      {/* Dummy Texts for Placeholder */}
      <Text style={styles.text}>Example Text 1</Text>
      <Text style={styles.text}>Example Text 2</Text>
      <Text style={styles.text}>Example Text 3</Text>
    </View>
  );
};

export default BookingModel;

const styles = StyleSheet.create({
  box: {
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 30,
    height: 40,
    elevation: 5,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  text: {
    color: '#000',
    marginTop: 10,
  },
});
