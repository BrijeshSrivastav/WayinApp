import React, {useEffect, useRef} from 'react';
import {View,Text,Image,TouchableOpacity,TextInput,Pressable,ScrollView} from 'react-native'
import { ImageFilesData } from '../constants/images';
import Icon, {Icons} from '../components/Icons';



const CategoryFilter=(props)=>{
    const FilterName = [
        {
          id:1,
        label: 'Top Rated',
        },
        {
          id:2,
        label: 'Trending',
        },
        {
          id:3,
        label: 'Ratings',
        },
        {
          id:4,
        label: 'Verified',
        },
    ]
    return(
  <View style={{backgroundColor:props.color,height:69,flexDirection:'row',width:'100%'}}>
  <TouchableOpacity style={{ borderRadius:25, borderWidth:0.5, borderColor:'#C1C1C1',backgroundColor:'#FFF',marginLeft:15,marginRight:10,marginBottom:10,marginTop:12}}>  
   <Icon
     type={Icons.Feather}
     name="filter"
     size={25}
     color={"#C1C1C1"}
     style={{marginTop:10,marginLeft:10,marginRight:10}}
   />
   </TouchableOpacity>
    <ScrollView horizontal={true}>  
    <View style={{flexDirection:'row'}}>
 {FilterName.map((item, index) => {
 return (
   <TouchableOpacity 
   style={{
    justifyContent: 'center', alignItems: 'center', flexDirection:'row'
   , width: 90, height:36, borderRadius:25, backgroundColor:'#FFF', 
   borderWidth:0.5,borderColor:'#707070',
   marginTop: 15,marginLeft:5,marginRight:5}}
   key={item.id}
   >
   <Text style={{fontWeight:'bold',fontSize:15,color:'#707070'}}>{item.label}</Text>
   </TouchableOpacity>
      );
    })}
   </View>  
   </ScrollView>
     </View>
    )
}

export default CategoryFilter