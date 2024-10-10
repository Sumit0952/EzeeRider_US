import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { colors } from '../utils/colors'
import { dimension } from '../utils/dimensions'

const About = () => {
  return (
    <View style = {styles.container}>
      <View style = {styles.itemContainer}>
        <View style = {styles.rowContainer}>
            <TouchableOpacity>
                <Text style = {styles.lable}>
                    Privacy Policy 
                </Text>            
            </TouchableOpacity>
            <TouchableOpacity>
                
                <Entypo name = 'chevron-right' size= {20} color = {colors.grey1}/>
            </TouchableOpacity>
        </View>
        <View style = {styles.rowContainer}>
            <TouchableOpacity>
                <Text style = {styles.lable}>
                    Term & Conditions
                </Text>            
            </TouchableOpacity>
            <TouchableOpacity>
                
                <Entypo name = 'chevron-right' size= {20} color = {colors.grey1}/>
            </TouchableOpacity>
        </View>
        <View style = {styles.rowContainer}>
            <TouchableOpacity>
                <Text style = {styles.lable}>
                    Blog
                </Text>            
            </TouchableOpacity>
            <TouchableOpacity>
                
                <Entypo name = 'chevron-right' size= {20} color = {colors.grey1}/>
            </TouchableOpacity>
        </View>
        <View style = {styles.rowContainer}>
            <TouchableOpacity>
                <Text style = {styles.lable}>
                    Software Licenses
                </Text>            
            </TouchableOpacity>
            <TouchableOpacity>
                
                <Entypo name = 'chevron-right' size= {20} color = {colors.grey1}/>
            </TouchableOpacity>
        </View>
       
      </View>
    </View>
  )
}

export default About

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#fff',
        padding:20
    },
    itemContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        marginBottom:10
      },
      rowContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
      },
      lable:{
        color:colors.textPrimary,
        fontSize:dimension.md
      }
    
})
