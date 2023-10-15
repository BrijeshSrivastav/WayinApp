import {View, Text, FlatList, Dimensions, TouchableOpacity,SafeAreaView,StyleSheet,Image,ImageBackground} from 'react-native';
import React, {useState} from 'react';
import Categoriesheader from '../components/Categoriesheader';
const {height, width} = Dimensions.get('window');
import CategoryItem from '../components/CategoryItem';
import { ImageFilesData } from '../constants/images';
import SubCategoryheader from '../components/SubCategoryheader';
import SubCategoryItem from '../components/SubCategoryItem';
export default function SubCategory({navigation}) {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      categoryname: 'Arabic',
      cat_img:ImageFilesData.subcate_image1
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      categoryname: 'Indian',
      cat_img:ImageFilesData.subcate_image2
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      categoryname: 'Chinese',
      cat_img:ImageFilesData.subcate_image3
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      categoryname: 'Turkish',
      cat_img:ImageFilesData.subcate_image4
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      categoryname: 'Morrocan',
      cat_img:ImageFilesData.subcate_image5
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      categoryname: 'Asian',
      cat_img:ImageFilesData.subcate_image6
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      categoryname: 'International',
      cat_img:ImageFilesData.subcate_image7
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      categoryname: 'Vegetarian',
      cat_img:ImageFilesData.subcate_image8
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      categoryname: 'Healthy',
      cat_img:ImageFilesData.subcate_image9
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      categoryname: 'Shisha',
      cat_img:ImageFilesData.subcate_image12
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      categoryname: 'Sea food',
      cat_img:ImageFilesData.subcate_image13
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      categoryname: 'Coffee shops',
      cat_img:ImageFilesData.subcate_image14
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      categoryname: 'Bakeries',
      cat_img:ImageFilesData.subcate_image15
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
     <SubCategoryheader navigation={navigation}/>
     <View style={{height:110,width:300,borderRadius:15,marginTop:1,marginLeft:10,marginRight:10}}>
      <Image
        source={ImageFilesData.subcate_banner}
        style={{height:110,width:350,borderRadius:15}}
    /> 
   </View>
     <View style={styles.listviewM}>
     <FlatList
        data={DATA}
        renderItem={({item}) => <SubCategoryItem itemData={item} navigation={navigation}/>}
        keyExtractor={item => item.id}
        numColumns={4}
      />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  
  listviewM:{
    marginTop:15
  }
});