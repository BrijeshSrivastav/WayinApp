import React, {useEffect, useRef} from 'react';
import {View,Text,Image,TouchableOpacity,TextInput,Pressable,ImageBackground,StyleSheet} from 'react-native'
import { ImageFilesData } from '../constants/images';
import Icon, {Icons} from '../components/Icons';
import CurrentlocationComponent from '../components/CurrentlocationComponent'
import CategoryFilter from './CategoryFilter';
const SubCategoryheader=(props)=>{
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
                marginLeft:10,
                color:'#000'
            }}
            />
            </TouchableOpacity>
            <View style={{marginRight:100}}>
              <CurrentlocationComponent/>
              
           </View>
           <View>
              <Image
                source={require('../../imgss/log_new_clr.png')}
                style={{marginTop:15,marginRight:20, width:25, height:34,}}
            />
           </View>
          </View>
          <View style={{padding:8, borderRadius:12}}>
          <View style={{justifyContent: 'center', alignItems: 'center', flexDirection:'row', width: '100%', height:50, borderRadius:25, backgroundColor:'#FFF', marginTop: 15, paddingRight:6, paddingLeft:6}}>
            <Image
                source={require('../../imgss/search.png')}
                style={{ height: 24, width: 24,margin: 5}}
            />
           <TextInput 
                placeholder="Search here..." 
                placeholderTextColor={"#000000"}
                style={{backgroundColor:'#FFF', flex:1, color:'#000000'}}
            />
            <TouchableOpacity >
            <Image
                  source={require('../../imgss/microphone.png')}
                  style={{ height: 20, width: 20, margin:5,tintColor:'#7B7B7B'}}/>
            </TouchableOpacity>
          </View>
        </View>
          </View>
          {/* <CategoryFilter color={"#F3FAFF"}/> */}
       </View>       
           
        )

}

const styles = StyleSheet.create({
    container: {
     height:150
    },
    locationview:{
      flexDirection:'row',  
      marginTop:10,
      justifyContent:'space-between'
      
    }
  });
  
export default SubCategoryheader