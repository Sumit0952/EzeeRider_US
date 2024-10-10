import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal, TextInput, Button } from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../utils/colors';
import { dimension } from '../utils/dimensions';

const Favorites = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: 'Work',
      address: 'Chottapara, hanta Colorny, Raipur rsgvs  rgfsg',
      iconComponent: Foundation,
      icon: 'shopping-bag',
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newType, setNewType] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [editingAddressId, setEditingAddressId] = useState(null); // To track which address is being edited

  const renderIconWithCircle = (IconComponent, iconName, iconColor, iconSize, backgroundColor) => (
    <View style={[styles.iconCircle, { backgroundColor }]}>
      <IconComponent name={iconName} color={iconColor} size={iconSize} />
    </View>
  );

  const addOrUpdateAddress = () => {
    if (newType && newAddress) {
      if (editingAddressId) {
        // If editing, update the existing address
        setAddresses((prevAddresses) =>
          prevAddresses.map((item) =>
            item.id === editingAddressId
              ? { ...item, type: newType, address: newAddress }
              : item
          )
        );
      } else {
        // If adding a new address
        setAddresses((prevAddresses) => [
          ...prevAddresses,
          {
            id: prevAddresses.length + 1,
            type: newType,
            address: newAddress,
            iconComponent: Foundation,
            icon: 'home',
          },
        ]);
      }
      // Reset and close modal
      setModalVisible(false);
      setNewType('');
      setNewAddress('');
      setEditingAddressId(null); // Reset editing state
    }
  };

  const deleteAddress = (id) => {
    setAddresses((prevAddresses) => prevAddresses.filter((item) => item.id !== id));
  };

  const editAddress = (address) => {
    setNewType(address.type);
    setNewAddress(address.address);
    setEditingAddressId(address.id);
    setModalVisible(true);
  };

  const renderAddressItem = ({ item }) => (
    <View style={styles.addressContainer}>
      <View style={styles.rowContainer2}>
        <View style={styles.rowContainer1}>
          {renderIconWithCircle(item.iconComponent, item.icon, colors.belu, 20, colors.iconBackground)}
          <View style={styles.textContainer}>
            <Text style={styles.heading}>{item.type}</Text>
            <Text style={styles.subtext} numberOfLines={2} ellipsizeMode="tail">{item.address}</Text>
          </View>
        </View>

        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => editAddress(item)}>
            {renderIconWithCircle(FontAwesome5, 'pen', colors.grey1, 15, '#fff')}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteAddress(item.id)}>
            {renderIconWithCircle(MaterialCommunityIcons, 'delete', colors.red1, 15, colors.red2)}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={addresses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderAddressItem}
      />

      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>Add New Address</Text>
      </TouchableOpacity>

      {/* Modal for adding/editing an address */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{editingAddressId ? 'Edit Address' : 'Add New Address'}</Text>
            
            <TextInput
              style={styles.input}
              placeholder="Address Type (e.g., Home, Office)"
              value={newType}
              onChangeText={setNewType}
            />
            <TextInput
              style={styles.input}
              placeholder="Address Details"
              value={newAddress}
              onChangeText={setNewAddress}
              multiline
            />

            <View style={styles.buttonRow}>
              <Button title={editingAddressId ? "Update" : "Add"} onPress={addOrUpdateAddress} />
              <Button title="Cancel" onPress={() => setModalVisible(false)} color={colors.red1} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 20,
  },
  addressContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginBottom: 10,
  },
  rowContainer1: {
    flexDirection: 'row',
    flex: 1,
  },
  rowContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  iconCircle: {
    width: 24,
    height: 24,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  heading: {
    fontSize: dimension.xl,
    color: colors.textPrimary,
  },
  subtext: {
    fontSize: dimension.md,
    color: colors.grey1,
    flexWrap: 'wrap',
  },
  iconContainer: {
    padding: 10,
    flexDirection: 'row',
    flexShrink: 1,
  },
  addButton: {
    backgroundColor: colors.belu,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
