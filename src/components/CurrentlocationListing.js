import React, {useEffect, useRef} from 'react';
import {View,Text,Image,TouchableOpacity,TextInput,Pressable,Platform} from 'react-native'
import { ImageFilesData } from '../constants/images';
import Icon, {Icons} from '../components/Icons';


const CurrentlocationListing=()=>{
    return(
    <View style={{marginTop:15}} 
    >
    <TouchableOpacity
    style={{flexDirection:'row'}}
       >
      <Text style={{fontWeight:'bold',color:'#000'}}>Al Barsha Dubai</Text>
      <Icon
     type={Icons.SimpleLineIcons}
     name="arrow-down"
     size={14}
     color={'#000000'}
     style={{marginTop:3,marginLeft:3}}
   />
    </TouchableOpacity>
      <Text style={{fontSize:10,color:'#000'}}>{global.catnam}</Text>
     </View>
    )
}

export default CurrentlocationListing