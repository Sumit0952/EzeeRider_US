import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const CustomBtn = ({
    onPress = () => {},
    
    btnStyle = {},
    textStyle = {} // Added textStyle to customize text appearance
}) => {
  return (
    <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.btnStyle, btnStyle]} // Apply button styles
        onPress={onPress}
    >
        <Text>Lets go</Text>
        
    </TouchableOpacity>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
    btnStyle: {
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 16,
        borderRadius: 4, // Optional: Rounded corners
    },
    text: {
        fontSize: 16, // Default font size
        fontWeight: 'bold', // Optional: Bold text
        color: '#333', // Default text color
    }
});
