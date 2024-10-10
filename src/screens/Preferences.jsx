import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native';
import { colors } from '../utils/colors';
import { dimension } from '../utils/dimensions';

const Preferences = () => {
  // State for toggles
  const [emailPromotions, setEmailPromotions] = useState(false);
  const [emailInvoice, setEmailInvoice] = useState(false);
  const [smsInvoice, setSmsInvoice] = useState(false);
  const [smsOffers, setSmsOffers] = useState(false);
  const [whatsappUpdates, setWhatsappUpdates] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);

  const [bgColor, setBgColor] = useState(colors.grey1); // Initial color

  // Function to handle the color change on press
  const handleColor = () => {
    setBgColor(prevColor => prevColor === colors.grey1 ? colors.belu : colors.grey1); // Toggle between two colors
  };

  return (
    <View style={styles.container}>
      {/* First Box: Two Preferences */}
      <View style={styles.elevatedBox}>
        <View style={styles.preferenceRow}>
          <Text style={styles.label}>Allow email for promotions and offers</Text>
          {/* <Switch
            value={emailPromotions}
            onValueChange={setEmailPromotions}
            thumbColor={emailPromotions ? colors.primary : '#f4f3f4'}
            trackColor={{ false: '#767577', true: colors.primaryLight }}
          /> */}
           <TouchableOpacity 
            style={[styles.circle, { backgroundColor: bgColor }]} 
            onPress={handleColor}
          />
        </View>

        <View style={styles.preferenceRow}>
          <Text style={styles.label}>Allow email for invoice</Text>
          {/* <Switch
            value={emailInvoice}
            onValueChange={setEmailInvoice}
            thumbColor={emailInvoice ? colors.primary : '#f4f3f4'}
            trackColor={{ false: '#767577', true: colors.primaryLight }}
          /> */}
           <TouchableOpacity 
            style={[styles.circle, { backgroundColor: bgColor }]} 
            onPress={handleColor}
          />
        </View>
      </View>

      {/* Second Box: Three Preferences */}
      <View style={styles.elevatedBox}>
        <View style={styles.preferenceRow}>
          <Text style={styles.label}>Allow SMS for invoice</Text>
          {/* <Switch
            value={smsInvoice}
            onValueChange={setSmsInvoice}
            thumbColor={smsInvoice ? colors.primary : '#f4f3f4'}
            trackColor={{ false: '#767577', true: colors.primaryLight }}
          /> */}
           <TouchableOpacity 
            style={[styles.circle, { backgroundColor: bgColor }]} 
            onPress={handleColor}
          />
        </View>

        <View style={styles.preferenceRow}>
          <Text style={styles.label}>Allow promotion SMS offers</Text>
          {/* <Switch
            value={smsOffers}
            onValueChange={setSmsOffers}
            thumbColor={smsOffers ? colors.primary : '#f4f3f4'}
            trackColor={{ false: '#767577', true: colors.primaryLight }}
          /> */}
           <TouchableOpacity 
            style={[styles.circle, { backgroundColor: bgColor }]} 
            onPress={handleColor}
          />
        </View>

        <View style={styles.preferenceRow}>
          <Text style={styles.label}>Allow updates to be sent on WhatsApp</Text>
          {/* <Switch
            value={whatsappUpdates}
            onValueChange={setWhatsappUpdates}
            thumbColor={whatsappUpdates ? colors.primary : '#f4f3f4'}
            trackColor={{ false: '#767577', true: colors.primaryLight }}
          /> */}
           <TouchableOpacity 
            style={[styles.circle, { backgroundColor: bgColor }]} 
            onPress={handleColor}
          />
        </View>
      </View>

      {/* Third Box: Last Preference */}
      <View style={styles.elevatedBox}>
        <View style={styles.preferenceRow}>
          <Text style={styles.label}>Allow mobile push notifications</Text>
          <TouchableOpacity 
            style={[styles.circle, { backgroundColor: bgColor }]} 
            onPress={handleColor}
          />
        </View>
      </View>
    </View>
  );
};

export default Preferences;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Light background to make boxes stand out
    padding: 20,
  },
  elevatedBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    elevation: 5, // For Android shadow
    shadowColor: '#000', // iOS shadow color
    shadowOffset: { width: 0, height: 2 }, // iOS shadow position
    shadowOpacity: 0.1, // iOS shadow opacity
    shadowRadius: 5, // iOS shadow blur
  },
  preferenceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10, // Spacing between preferences in the box
  },
  label: {
    color: colors.textPrimary,
    fontSize: 16,
    flexShrink: 1, // Ensure text doesn't overflow
  },
  circle:{
   
   height:30,
   width:30,
   borderRadius:20

  }
});
