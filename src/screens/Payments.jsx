import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../utils/colors'
import { dimension } from '../utils/dimensions'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const Payments = () => {

    const [details, showdetails] = useState(false)


    const onIconPress = () =>{
        if(details===true){
            showdetails(false)
        }

        else if (details===false){
            showdetails(true)
        }
        
        console.log(details)
    }
  return (
   <View style = {styles.container}>
    <View style = {styles.upi}>
        <Text style = {styles.label}>
            UPI
        </Text>
        <View style = {styles.rowContainer}>
            <View style = {styles.rowContainer2}>
                <AntDesign name = 'qrcode' size={20} color = {colors.grey2}/>
                <View>
                    <Text style = {styles.selectApp}>
                        Select App 
                    </Text>
                    <Text style = {styles.sub}>
                        Pay with any UPI App

                    </Text>
                </View>

            </View>
            <TouchableOpacity style = {styles.icon} onPress={onIconPress}>
                <Entypo name = 'chevron-down' size = {20}  color= { colors.grey2}/>

            </TouchableOpacity>

        </View>
        
    </View>
    {details===true && (
        <View>
      <View style = {styles.rowContainer}>
      <View style = {styles.rowContainer2}>
          <FontAwesome name = 'google' size={20} color = {colors.grey2}/>
         
              <Text style = {styles.selectApp}>
                  G Pay
              </Text>
             
        
      </View>
      <TouchableOpacity style = {styles.icon} onPress={onIconPress}>
          <Text style = {{color:colors.belu}}>Link</Text>

      </TouchableOpacity>

  </View>
      <View style = {styles.rowContainer}>
      <View style = {styles.rowContainer2}>
          <FontAwesome name = 'google' size={20} color = {colors.grey2}/>
         
              <Text style = {styles.selectApp}>
                  G Pay
              </Text>
             
        
      </View>
      <TouchableOpacity style = {styles.icon} onPress={onIconPress}>
          <Text style = {{color:colors.belu}}>Link</Text>

      </TouchableOpacity>

  </View>
  </View>
  )}
    <View style = {styles.upi}>
        <Text style = {styles.label}>
            Others
        </Text>
        <View style = {styles.rowContainer}>
            <View style = {styles.rowContainer2}>
                <MaterialCommunityIcons name = 'cash-multiple' size={20} color = {'green'}/>
                <View>
                    <Text style = {styles.selectApp}>
                       Cash 
                    </Text>
                    
                </View>

            </View>
           

        </View>
        
    </View>
   </View>
  )
}

export default Payments

const styles = StyleSheet.create({
    container:{
        felx:1,
        backgroundColor:'#fff',
        padding:20

    },
    label:{
        color:colors.textPrimary,
        fontSize:dimension.xl
    },
    rowContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    rowContainer2:{
        flexDirection:'row',
        padding:20,
        gap:10
    },  
    selectApp:{
        color:colors.textPrimary,
        fontWeight:'bold',
        fontSize:dimension.lg
    },
    sub:{
        color:colors.grey2,
      
    },
    icon:{
        paddingTop:20
    }
})