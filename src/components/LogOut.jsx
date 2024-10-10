import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { colors } from '../utils/colors';

const LogOut = ({ isVisible, onClose, onLogout }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalBox}>
            <View style = {styles.backButton}/>
          <Text style={styles.modalTitle}>Logout ?</Text>
          <Text style={styles.modalMessage}>
            Are you sure you want to log out from the Ezee Riders app?
          </Text>
          <View style={styles.modalButtonContainer}>
             <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
              <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelButtonText}>Go Back</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LogOut;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalBox: {
    width: '100%',
    height: '30%',
    backgroundColor: '#fff',
    borderRadius: 10,
    
    padding: 10,
    
    alignItems: 'center',
  },
  modalTitle: {
    color:colors.textPrimary,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf:'flex-start',
    padding:10
  },
  modalMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  modalButtonContainer: {
    flexDirection: 'column',
    width: '100%',
  },
  cancelButton: {
    backgroundColor: '#fff',
    borderColor: '#007BFF', // Blue border
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 15,
    margin: 5,
    alignItems: 'center',
  },
  backButton:{
    backgroundColor:colors.grey1,
    height:5,
    width:80,
    borderRadius:20

  },
  cancelButtonText: {
    color: '#007BFF', // Blue text color
    fontWeight: 'bold',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#e75356', // Red background
    borderRadius: 30,
    paddingVertical: 15,
    margin: 5,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff', // White text color
    fontWeight: 'bold',
    fontSize: 16,
  },
});
