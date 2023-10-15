import React, {useEffect, useRef} from 'react';
import {View,Text,Image,TouchableOpacity,TextInput,Pressable,ImageBackground,StyleSheet} from 'react-native'
import { ImageFilesData } from '../constants/images';
import Icon, {Icons} from '../components/Icons';
import CurrentlocationComponent from '../components/CurrentlocationComponent'
import CategoryFilter from './CategoryFilter';
const Categoriesheader=(props)=>{
    return(
     <View style={styles.container}> 
     <ImageBackground
          source={ImageFilesData.categoryheader}
          //resizeMode='contains'
          style={styles.container}
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
                color:'#FFF'
            }}
            />
            </TouchableOpacity>
            <View style={{marginLeft:10}}>
           <CurrentlocationComponent/>
           </View>
          </View>
          <View style={{marginLeft:30,marginTop:40}}> 
          <Text style={{fontWeight:'bold',fontSize:25,color:'#fff'}}>All Categories</Text>
          </View>
          <View style={{padding:8, borderRadius:12}}>
          <View style={{justifyContent: 'center', alignItems: 'center', flexDirection:'row', width: '100%', height:50, borderRadius:25, backgroundColor:'#FFF', marginTop: 15, paddingRight:6, paddingLeft:6}}>
            <Image
                source={require('../../imgss/search.png')}
                style={{ height: 24, width: 24,margin: 5}}
            />
           <TextInput 
                placeholder="Search here..." 
                style={{backgroundColor:'#FFF', flex:1}}
            />
            <TouchableOpacity >
            <Image
                  source={require('../../imgss/microphone.png')}
                  style={{ height: 20, width: 20, margin:5,tintColor:'#7B7B7B'}}/>
            </TouchableOpacity>
          </View>
        </View>
          </ImageBackground>
          <CategoryFilter color={"#FFF"}/>
       </View>       
           
        )

}

const styles = StyleSheet.create({
    container: {
     height:240
    },
    locationview:{
      flexDirection:'row',  
      marginTop:10
    }
  });
  
export default Categoriesheader