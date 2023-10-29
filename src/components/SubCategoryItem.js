import React, {useEffect, useRef,useState} from 'react';
import {View,Text,Image,TouchableOpacity,TextInput,Pressable,ScrollView} from 'react-native'
import { ImageFilesData } from '../constants/images';
import Icon, {Icons} from '../components/Icons';
import { getProductList } from '../redux/productaction';
import { useSelector, useDispatch } from 'react-redux'


const SubCategoryItem=(props)=>{
  const [islodingimage,setLoadingImage]=useState(false);
  const dispatch = useDispatch()
  function onLoadingImg(value,lable){
      setLoadingImage(value,lable)
  }
    return(

<TouchableOpacity style={{ flex: 0.33, justifyContent: 'center', alignItems: 'center',padding:13}} 
      onPress={()=>{
            dispatch(getProductList(props.itemData.slug));
            props.navigation.navigate('listing');
            global.catnam =props.itemData.title;
            }}>  
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <View style={{ borderRadius:50, borderWidth:0, borderColor:'#00A1A0', padding:2,justifyContent:'center',alignItems:'center'}}>
          {/* <View style={{ borderRadius:20, justifyContent:'center',alignItems:'center'}}> */}
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image style={{width:80, height:80, borderRadius: 50, resizeMode:'cover'}}
              source={{
                uri: 'https://askwayin.com/assets/images/'+props.itemData.photo1,
              }} 
              //onLoadStart={()=>onLoadingImg(true,'onLoadStart')}
              //onLoadEnd={()=>onLoadingImg(false,'onLoadStart')}
            />
              </View>
              </View>
              <Text numberOfLines={2} style={{fontSize: 10, height:30, fontWeight: 'bold',color:'#000000', marginTop:7,alignItems:'center'}}>{props.itemData.title}</Text>
          </View>
          </TouchableOpacity>

    //   <TouchableOpacity style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center',padding:13}} 
    //   onPress={()=>{
    //     dispatch(getProductList(props.itemData.slug));
    //     props.navigation.navigate('listing');
    //     }}>  
    // <View>
    // <View style={{ borderRadius:30, borderWidth:0.5, borderColor:'#00A1A0', padding:5,justifyContent:'center',alignItems:'center'}}>
    //         <Image style={{width:50, height:50, borderRadius: 25}}
    //           source={{
    //             uri: 'https://askwayin.com/assets/images/'+props.itemData.photo,
    //           }} 
    //           //onLoadStart={()=>onLoadingImg(true,'onLoadStart')}
    //           //onLoadEnd={()=>onLoadingImg(false,'onLoadStart')}
    //         />
    //           </View>
    //           <Text numberOfLines={2} style={{fontSize: 10, fontWeight: 'bold',color:'#000000', marginTop:7,marginLeft:10,alignItems:'center'}}>{props.itemData.title}</Text>
    //       </View>
    //       </TouchableOpacity>
    )
}

export default SubCategoryItem