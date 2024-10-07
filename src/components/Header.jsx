import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const Header = () => {
  return (
    <View style={styles.header}>
      {/* Menu Icon */}
      <TouchableOpacity style={styles.menu}>
        <EvilIcons name='navicon' size={30} color='#000' />
      </TouchableOpacity>

      {/* Search Bar with Search Icon Inside */}
      <View style={styles.searchContainer}>
        <EvilIcons name='search' size={20} color='#888' style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor="#888"
        />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  menu: {
    backgroundColor: '#f2f2f2',
    borderRadius: 50,
    padding: 5,
    elevation: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#f2f2f2',
    borderRadius: 30,
    marginLeft: 16,
    height: 40,
    elevation: 10,
    position: 'relative', // Important for positioning the search icon
  },
  searchIcon: {
    position: 'absolute',
    left: 10,  // Position the icon at the start of the TextInput
    zIndex: 1,
  },
  searchBar: {
    flex: 1,
    height: 40,
    paddingLeft: 40,  // Add padding to leave space for the search icon
    color: '#000',
    borderRadius: 30,
  },
})
