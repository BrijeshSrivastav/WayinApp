import {View, Text, FlatList, Dimensions, TouchableOpacity,SafeAreaView,StyleSheet} from 'react-native';
import React, {useState,useEffect} from 'react';
import Categoriesheader from '../components/Categoriesheader';
const {height, width} = Dimensions.get('window');
import CategoryItem from '../components/CategoryItem';
import { ImageFilesData } from '../constants/images';
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../components/Loading';

import {getCatList,getSubCatList} from '../redux/categoryaction'
export default function Category({navigation}) {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      categoryname: 'Deals',
      cat_img:ImageFilesData.weightlifting
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      categoryname: 'Restaurent',
      cat_img:ImageFilesData.restaurant
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      categoryname: 'Gym',
      cat_img:ImageFilesData.weightlifting
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      categoryname: 'Massage',
      cat_img:ImageFilesData.massage
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      categoryname: 'Beauty',
      cat_img:ImageFilesData.makeup
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      categoryname: 'Hospital',
      cat_img:ImageFilesData.weightlifting
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      categoryname: 'Deals',
      cat_img:ImageFilesData.loudspeaker
    },
  ];
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCatList(''))
  }, [dispatch]);
 
let catList = useSelector((state)=>state.catReducer.catList);
   

 if(catList === ""){
  return (<Loading sizes="small" colors="#0000ff"></Loading>);
 }else{
  return (
    <SafeAreaView style={styles.container}>
     <Categoriesheader navigation={navigation}/>
    <View style={styles.listviewM}>
     <FlatList
        data={catList.data.allcategories}
        renderItem={({item}) => <CategoryItem itemData={item} navigation={navigation}/>}
        keyExtractor={item => item.id}
        numColumns={4}
        contentContainerStyle={{ paddingBottom: 40}}
      />
      </View>
    </SafeAreaView>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    flexGrow:1
  },
  
  listviewM:{
    marginTop:20,
    marginBottom:250
  }
});