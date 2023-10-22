import React, {useEffect, useRef,useState} from 'react';
import {View,Text,Image,TouchableOpacity,TextInput,Pressable,ScrollView} from 'react-native'
import { ImageFilesData } from '../constants/images';
import Icon, {Icons} from '../components/Icons';
import {getSubCatList} from '../redux/categoryaction'
import { useSelector, useDispatch } from 'react-redux'

const CategoryItem=(props)=>{
  const [islodingimage,setLoadingImage]=useState(false);
  const dispatch = useDispatch()
  function onLoadingImg(value,lable){
      setLoadingImage(value,lable)
  }
 
    return(
      <TouchableOpacity style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center',padding:13}} 
      onPress={()=>{
        dispatch(getSubCatList(props.itemData.slug));
        props.navigation.navigate('subcategory');
        }}>  
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <View style={{ borderRadius:25, borderWidth:0.5, borderColor:'#00A1A0', padding:10,justifyContent:'center',alignItems:'center'}}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image style={{width:30, height:30, borderRadius: 0}}
              source={{
                uri: 'https://askwayin.com/assets/images/'+props.itemData.photo,
              }} 
              //onLoadStart={()=>onLoadingImg(true,'onLoadStart')}
              //onLoadEnd={()=>onLoadingImg(false,'onLoadStart')}
            />
              </View>
              </View>
              <Text numberOfLines={2} style={{fontSize: 10, fontWeight: 'bold',color:'#000000', marginTop:7,alignItems:'center'}}>{props.itemData.title}</Text>
          </View>
          </TouchableOpacity>
    )
}

export default CategoryItem