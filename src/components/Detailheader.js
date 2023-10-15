import React, {useEffect, useRef} from 'react';
import {View,Text,Image,TouchableOpacity,TextInput,Pressable,ImageBackground,StyleSheet,ScrollView} from 'react-native'
import { ImageFilesData } from '../constants/images';
import Icon, {Icons} from '../components/Icons';
import CurrentlocationComponent from '../components/CurrentlocationComponent'
import CategoryFilter from './CategoryFilter';
const Detailheader=(props)=>{

    return(
     <View style={styles.container}> 
     <View
         style={{backgroundColor:'#E8F5F6'}}
          >
          <View style={styles.locationview}>  
          <TouchableOpacity onPress={()=>props.navigation.goBack()}>
            <Icon
            type={Icons.SimpleLineIcons}
            name="arrow-left-circle"
            size={25}
            style={{
                marginTop:20,
                marginLeft:15,
                color:'#000'
            }}
            />
            </TouchableOpacity>
            <View style={{marginRight:50}}>
          <TouchableOpacity
            style={{flexDirection:'row',marginTop:15}}
            >
             <Text style={{fontWeight:'bold',color:'#000'}}>Indian Restaurants</Text>
         </TouchableOpacity>
          <Text style={{fontSize:10,color:'#000'}}>Al Barsha, Dubai, Dubai</Text>
           </View>
           <View>
             
           </View>
           <TouchableOpacity onPress={()=>props.navigation.goBack()} >
            <Icon
            type={Icons.EvilIcons}
            name="share-apple"
            size={30}
            style={{
                marginTop:20,
                color:'#000'
            }}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>props.navigation.goBack()} >
            <Icon
            type={Icons.Ionicons}
            name="notifications-outline"
            size={25}
            style={{
                marginTop:20,
                color:'#000'
            }}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>props.navigation.goBack()} style={{marginRight:5}}>
            <Icon
            type={Icons.EvilIcons}
            name="search"
            size={30}
            style={{
                marginTop:20,
                color:'#000'
            }}
            />
            </TouchableOpacity>
          </View>
          <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{paddingLeft:12,marginTop:30 }}
              nestedScrollEnabled={true} 
             
              >
            {props.resdata.partners.map((item, index) => {
              return(
               <View style={{ justifyContent: 'center', alignItems: 'center', padding:5, }} key={item.id}>
                <Image style={{width:200, height:70, borderRadius: 12}}
                 source={{
                  uri: "https://img.freepik.com/free-vector/mega-sale-banner-blue-yellow-colors_1017-32176.jpg?w=826&t=st=1695828006~exp=1695828606~hmac=4d0348a87a8bd5a37a2417188f9e3a8c7980ddd084b24ceded4bc7be1faaf88b",
                }} />
                  {/* <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#ffffff', marginTop:6}}>Real Estate</Text> */}
              </View> 
                 );
                })}
              {/* <View style={{ justifyContent: 'center', alignItems: 'center', padding:5}}>
              <Image style={{width:180, height:45, borderRadius: 12}}
                  source={require('../../imgss/imgp5.png')} />
                  <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#ffffff', marginTop:6}}>Real Estate</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', padding:5}}>
              <Image style={{width:180, height:45, borderRadius: 12}}
                  source={require('../../imgss/imgp3.png')} />
                  <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#ffffff', marginTop:6}}>Real Estate</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', padding:5}}>
              <Image style={{width:180, height:45, borderRadius: 12}}
                  source={require('../../imgss/imgp4.png')} />
                  <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#ffffff', marginTop:6}}>Real Estate</Text>
              </View> */}
              </ScrollView>
          </View>
         
       </View>       
           
        )

}

const styles = StyleSheet.create({
    container: {
     height:200,
     backgroundColor:'#E8F5F6'
    },
    locationview:{
      flexDirection:'row',  
      marginTop:10,
      justifyContent:'space-between'
      
    }
  });
  
export default Detailheader