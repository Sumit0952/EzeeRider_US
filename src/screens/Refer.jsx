import { StyleSheet, Text, TouchableOpacity, View, ToastAndroid, Share } from 'react-native';
import React from 'react';
import { colors } from '../utils/colors';
import { dimension } from '../utils/dimensions';
import Feather from 'react-native-vector-icons/Feather';
import Clipboard from '@react-native-clipboard/clipboard';

const Refer = () => {
  const referralCode = 'CIDECDF';  // Your referral code

  // Function to copy the code and show a message
  const copyToClipboard = () => {
    Clipboard.setString(referralCode);
    // Show a toast message after copying
    ToastAndroid.show('Referral code copied!', ToastAndroid.SHORT);
  };

  // Function to open share options
  const shareInvite = async () => {
    try {
      const result = await Share.share({
        message: `Hey, join this awesome app! Use my referral code: ${referralCode}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log(`Shared with activity type: ${result.activityType}`);
        } else {
          console.log('Shared successfully');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed');
      }
    } catch (error) {
      console.error('Error sharing invite', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Code</Text>
      <TouchableOpacity style={styles.codeContainer} onPress={copyToClipboard}>
        <View style={styles.code}>
          <Text style={{ color: colors.belu }}>{referralCode}</Text>
          <Feather name='copy' size={20} color={colors.belu} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.inviteFriend} onPress={shareInvite}>
        <View style={styles.code}>
          <Text style={{ color: colors.grey2 }}>Invite Friends</Text>
          <Text style={{ color: colors.belu }}>Invite</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.message}>
        <Text style={{ color: colors.textPrimary, fontSize: dimension.lg, marginBottom: 5 }}>
          Your Friend completes 1 ride
        </Text>
        <Text style={{ color: colors.grey2 }}>You can earn 50</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Refer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  heading: {
    color: colors.textPrimary,
    fontSize: dimension.xl,
  },
  codeContainer: {
    backgroundColor: '#e9f1fe',
    padding: 20,
    marginVertical: 20,
  },
  inviteFriend: {
    backgroundColor: '#fafafa',
    padding: 20,
    marginVertical: 20,
  },
  message: {
    backgroundColor: '#fafafa',
    padding: 20,
    marginVertical: 20,
  },
  code: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
