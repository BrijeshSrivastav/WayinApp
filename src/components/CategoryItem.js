import React, {useEffect, useRef} from 'react';
import {View,Text,Image,TouchableOpacity,TextInput,Pressable,ScrollView} from 'react-native'
import { ImageFilesData } from '../constants/images';
import Icon, {Icons} from '../components/Icons';



const CategoryItem=(props)=>{
    return(
      <TouchableOpacity style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center',padding:13}} onPress={() => props.navigation.navigate('subcategory')}>  
    <View>
          <View style={{ borderRadius:30, borderWidth:0.5, borderColor:'#00A1A0', padding:5,justifyContent:'center',alignItems:'center'}}>
            <Image style={{width:50, height:50, borderRadius: 25}}
              source={{
                uri: 'https://askwayin.com/assets/images/'+props.itemData.photo,
              }} 
            />
              </View>
              <Text numberOfLines={2} style={{fontSize: 10, fontWeight: 'bold',color:'#000000', marginTop:7,marginLeft:10,alignItems:'center'}}>{props.itemData.title}</Text>
          </View>
          </TouchableOpacity>
    )
}

export default CategoryItem