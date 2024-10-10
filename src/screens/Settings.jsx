import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors } from '../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import DeleteAccount from '../components/DeleteAccout';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {

    const navigation = useNavigation();

    const [isModalVisible, setIsModalVisible] = useState(false); // State for modal visibility
    const handleSosPress = () => {
        setIsModalVisible(true); 
      };


    const handleCloseModal = () => {
        setIsModalVisible(false); 
      };
      const handleConfirmSos = () => {
        handleCloseModal(); 
      };
    const renderIconWithCircle = (IconComponent, iconName, iconColor, iconSize) => (
        <View style={styles.iconCircle}>
            <IconComponent name={iconName} color={iconColor} size={iconSize} />
        </View>
    );
  return (
    <View style={styles.container}>
      
      <TouchableOpacity>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.item}>
          <View style={styles.itemRow}>
          {renderIconWithCircle(Ionicons, "person", colors.belu, 20)}
            <View>
              <Text style={styles.itemTitle}>Profile</Text>
              <Text style={styles.itemSubtitle}>+91 1234567890</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress ={()=>(navigation.navigate('Preferences'))}>
          <View style={styles.itemRow}>
          {renderIconWithCircle(MaterialIcons, "sms", colors.belu, 20)}
            <View>
              <Text style={styles.itemTitle}>Preferences</Text>
              <Text style={styles.itemSubtitle}>Manage preferences</Text>
            </View>
          </View>
        </TouchableOpacity>
        
        </View>
        <View style={styles.itemContainer}>


        <TouchableOpacity style={styles.item} onPress ={()=>(navigation.navigate('About'))}>
          <View style={styles.itemRow}>
          {renderIconWithCircle(Ionicons, "information-circle", colors.belu, 20)}
            <View>
              <Text style={styles.itemTitle}>About</Text>
              <Text style={styles.itemSubtitle}>App version</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={handleSosPress}>
          <View style={styles.itemRow}>
          {renderIconWithCircle(MaterialCommunityIcons, "delete", colors.belu, 20)}
            <View>
              <Text style={styles.itemTitle}>Delete Account</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <DeleteAccount
            isVisible={isModalVisible}
            onClose={handleCloseModal}
            onConfirm={handleConfirmSos}
            />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    fontSize: 18,
    color: '#000',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  editButton: {
    alignSelf:'flex-end',
    fontSize: 18,
    color: '#007bff',
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginBottom:10
  },
  item: {
    padding: 10,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  iconCircle: {
    width: 24,
    height: 24,
    borderRadius: 20, // This makes the view circular
    backgroundColor: colors.iconBackground, // Add your desired background color
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
},
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#6e6e6e',
  },
});

export default Settings;
