import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import { dimension } from '../utils/dimensions'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
    const navigation = useNavigation();
  return (
    <View style = {styles.container}>
        <View style = {styles.imageContainer}/>
        <View style = {styles.labelContainer}>
            <View style = {styles.rowContainer}>
                <View style = {styles.textContiner}>
                    <Text style = {styles.heading}>Name</Text>
                    <Text style = {styles.sub}>Ramesh Mahanta</Text>

                </View>
                <TouchableOpacity>
                <Entypo name = 'chevron-right' size = {20} color = {colors.grey1}/>
                </TouchableOpacity>
            </View>
            <View style = {styles.rowContainer}>
                <View style = {styles.textContiner}>
                    <Text style = {styles.heading}>Phone Number</Text>
                    <Text style = {styles.sub}>+91 8178232170</Text>

                </View>
                <TouchableOpacity>
                <Entypo name = 'chevron-right' size = {20} color = {colors.grey1}/>
                </TouchableOpacity>
            </View>
            <View style = {styles.rowContainer}>
                <View style = {styles.textContiner}>
                    <Text style = {styles.heading}>Email</Text>
                    <Text style = {styles.sub}>sk3063636@gmail.com</Text>

                </View>
                <TouchableOpacity>
                <Entypo name = 'chevron-right' size = {20} color = {colors.grey1}/>
                </TouchableOpacity>
            </View>
            <View style = {styles.rowContainer}>
                <View style = {styles.textContiner}>
                    <Text style = {styles.heading}>Gender</Text>
                    <Text style = {styles.sub}>Male</Text>

                </View>
                <TouchableOpacity>
                <Entypo name = 'chevron-right' size = {20} color = {colors.grey1}/>
                </TouchableOpacity>
            </View>
            <View style = {styles.rowContainer}>
                <View style = {styles.textContiner}>
                    <Text style = {styles.heading}>Member</Text>
                    <Text style = {styles.sub}>Sep 2024</Text>

                </View>
                <TouchableOpacity>
                <Entypo name = 'chevron-right' size = {20} color = {colors.grey1}/>
                </TouchableOpacity>
            </View>
            <View style = {styles.rowContainer}>
                <View style = {styles.textContiner}>
                    <Text style = {styles.heading}>Emergency contact</Text>
                    <Text style = {styles.sub}>Required</Text>

                </View>
                <TouchableOpacity onPress = {() => navigation.navigate('EmerContact')}>
                <Text style = {{color:colors.belu, }}>Add Contact</Text>
                </TouchableOpacity>
            </View>

        </View>
      
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        padding:20,
    },
    imageContainer:{
        height:80,
        width:80,
        backgroundColor:colors.grey1,
        borderRadius:40,


    },
    labelContainer:{
        paddingVertical:20
    },
    rowContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:10

    },
    textContiner:{
        paddingVertical:5
    },
    heading:{
        color:colors.textPrimary,
        fontSize:dimension.lg
    },
    sub:{
        color:colors.grey2,
        fontSize:dimension.md
    },



})