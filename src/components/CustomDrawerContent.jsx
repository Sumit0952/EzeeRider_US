import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'

import AntDesign from "react-native-vector-icons/AntDesign.js";
import Ionicons from "react-native-vector-icons/Ionicons.js";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import { useNavigation } from '@react-navigation/native';
import { dimension } from '../utils/dimensions';
import { colors } from '../utils/colors';
import LogOut from './LogOut';



const CustomDrawerContent = (props) => {

    // const navigation = useNavigation();
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

    const isDarkMode = true;
      const navigateto = useNavigation();
    const { navigation } = props;
      
    const closeDrawer = () => {
        navigation.toggleDrawer();
    }

    const renderIconWithCircle = (IconComponent, iconName, iconColor, iconSize) => (
        <View style={styles.iconCircle}>
            <IconComponent name={iconName} color={iconColor} size={iconSize} />
        </View>
    );

    return (
        <DrawerContentScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={closeDrawer}>
                    <AntDesign name={"close"} color={'#000'} size={20} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name={isDarkMode ? "sunny-outline" : "moon-outline"} color={'#000'} size={20} />
                </TouchableOpacity>
            </View>
            <View style = {styles.profileContainer}>
            <View style = {styles.imageContainer}/>
            <View>
                <Text style = {{color:colors.textPrimary, fontSize:dimension.xl, fontWeight:'bold'}}>Ramesh Mahanta</Text>
                <Text style = {{color:colors.grey1, fontSize:dimension.md}}>+91 8931813314</Text>
                <Text style = {{color:colors.grey1,ontSize:dimension.md}}>Example.123@gmail.com</Text>
            </View>
            
            </View>
            <View style={styles.drawerItemContainer}>
                <DrawerItem
                    label="Settings"
                    icon={() => renderIconWithCircle(Ionicons, "settings-sharp", colors.belu, dimension.lg)}
                    labelStyle={styles.labelStyle}
                    style={styles.drawerItem}
                    onPress={() => navigateto.navigate('Settings')}
                />
                <DrawerItem
                    label="Favorites"
                    icon={() => renderIconWithCircle(FontAwesome, "heart", colors.belu, dimension.lg)}
                    labelStyle={styles.labelStyle}
                    style={styles.drawerItem}
                    onPress = {() => navigateto.navigate('Favorites')}
                    />
                <DrawerItem
                    label="Payments"
                    icon={() => renderIconWithCircle(FontAwesome, "credit-card-alt", colors.belu, dimension.lg)}
                    labelStyle={styles.labelStyle}
                    style={styles.drawerItem}
                    />
                <DrawerItem
                    label="History"
                    icon={() => renderIconWithCircle(MaterialCommunityIcons, "clock-time-five", colors.belu, dimension.lg)}
                    labelStyle={styles.labelStyle}
                    style={styles.drawerItem}
                    />
                <DrawerItem
                    label="Notification"
                    icon={() => renderIconWithCircle(Ionicons, "notifications", colors.belu, dimension.lg)}
                    labelStyle={styles.labelStyle}
                    style={styles.drawerItem}
                    />
                <DrawerItem
                    label="Manage profile"
                    icon={() => renderIconWithCircle(FontAwesome6, "user-large", colors.belu, dimension.lg)}
                    labelStyle={styles.labelStyle}
                    style={styles.drawerItem}
                    onPress = {() => navigateto.navigate('Profile')}
                />
                <DrawerItem
                    label="Refer to friend"
                    icon={() => renderIconWithCircle(FontAwesome6, "user-group", colors.belu, dimension.lg)}
                    labelStyle={styles.labelStyle}
                    style={styles.drawerItem}
                />
                <DrawerItem
                    label="Logout"
                    icon={() => renderIconWithCircle(MaterialIcons, "logout", colors.belu, dimension.lg)}
                    labelStyle={styles.labelStyle}
                    style={styles.drawerItem}
                   onPress={handleSosPress}
                />



            </View>

            <LogOut
            isVisible={isModalVisible}
            onClose={handleCloseModal}
            onConfirm={handleConfirmSos}
            />
        </DrawerContentScrollView>
    )
}

export default CustomDrawerContent

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    drawerItemContainer: {
        color: '#000',
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
    imageContainer:{
        width: 60,
        height: 60,
        backgroundColor:colors.grey1,
        borderRadius:40,
        marginHorizontal:20
    },
    profileContainer:{
        flexDirection:'row',

    },
    iconCircle: {
        width: 24,
        height: 24,
        borderRadius: 20, // This makes the view circular
        backgroundColor: colors.iconBackground, // Add your desired background color
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelStyle: {
        fontSize: dimension.md,
        color: '#000',
    },
    drawerItem: {
        //marginVertical: 8,
    },
});
