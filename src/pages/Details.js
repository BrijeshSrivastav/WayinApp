/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import  React,{useEffect,useState} from 'react';
import { Rating, AirbnbRating } from 'react-native-ratings';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  useColorScheme,
  View,
  Alert,
  Image,
  ImageBackground,
  FlatList,
  Linking,
  Platform,
  ActivityIndicator,
  ScrollView,

} from 'react-native';
//import { ScrollView } from 'react-native-virtualized-view'
import SvgUri from 'react-native-svg-uri';
//import { SvgUri } from 'react-native-svg';

import { ImageSlider } from 'react-native-image-slider-banner';
import Header from '../components/Header';
import Icon, {Icons} from '../components/Icons';
import CarouseBanner from '../components/CarouseBanner';
import {homePageApi} from '../normalapi';
import { useSelector, useDispatch } from 'react-redux';
import {getCatList} from '../redux/categoryaction';
import Loading from '../components/Loading';
import { LogBox } from 'react-native';
import { Dimensions } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Detailheader from '../components/Detailheader';


function Details({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();
  let isloding = useSelector((state)=>state.productReducer.isloding);
  let productDetail = useSelector((state)=>state.productReducer.productDetail);

  const onPressMobileNumberClick = (number) => {

    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }

    Linking.openURL(phoneNumber);
 }

 //const result = Object.keys(productDetail.data.schedules).map(key => ({[key]: productDetail.data.schedules[key]}));

if (productDetail === ''){
    return (<Loading sizes="small" colors="#0000ff"></Loading>);
}else {
  const { width, height } = Dimensions.get('window');
  return (
    <SafeAreaView 
    style={{backgroundColor:'#FFF'}}
    >
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        //backgroundColor={backgroundStyle.backgroundColor}
      />
      <Detailheader navigation={navigation} resdata={productDetail}/>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        nestedScrollEnabled={true}
        style={{ width: '100%',backgroundColor:'#F4F4F7'}}
         >

       <View> 
        <View style={{ flex: 1,  alignItems: 'flex-start', width:'100%', marginLeft:5, marginRight:5, backgroundColor:'#ffffff', paddingBottom:10, marginTop:10,paddingTop:20}}>
        <Text numberOfLines={2} style={{fontSize: 18, fontWeight: 'bold', color:'#000', marginLeft:5,width:width-20}}>{productDetail.data.type}</Text>

        <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center', marginTop: 8}}>
              
          <View style={{ flexDirection: 'row', flex: 1,alignItems:'center'}}>
            
            <View style={{ flexDirection: 'column',  justifyContent: 'center', alignItems: 'center'}} >
            <View style={{ borderRadius:10, borderWidth:0.3, borderColor:'#707070',width:50, height:45, borderRadius: 5}}>
              <View style={{width:50, height:40,justifyContent:'center',alignItems:'center'}}>
            <Image 
            style={{width:25, height:25}}
            source={require('../../imgss/verified.png')} 
            resizeMode='center'
            />
             <Text numberOfLines={1} style={{fontSize: 10,fontWeight: 'normal', color:'#000000'}}>Verified</Text>
             </View>
            </View>
           

            </View>
            <Text numberOfLines={2} style={{fontSize: 14, fontWeight: 'bold',color:'#000000', marginLeft:12}}>{productDetail.data.ProductName}</Text>
            </View>
            <View style={{ flexDirection: 'row',alignItems:'flex-end'}}>
            <View style={{ justifyContent: 'center', alignItems: 'center', height:30,width:70,borderRadius:20,backgroundColor:'#5C30A9'  }}>
            <Text numberOfLines={1} style={{fontSize: 10, fontWeight: 'bold',color:'#FFF', }}>Top Rated</Text>
            </View>
            </View>
            </View>
            </View>
            <View>

        {/* { productDetail.data.galleries.length == 0 ? "" : */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled={true} 
          >
            {productDetail.data.galleries.map((item, index) => {
            return(
          <View style={{justifyContent: 'center', alignItems: 'center', padding:5}}  key={item.id}>
          <ImageBackground style={{width:120, height:140}}
              imageStyle={{ borderRadius: 12}}
              source={{
                uri: 'https://askwayin.com/assets/images/'+item.photo,
              }} >
              {/* <Text numberOfLines={1} style={{fontSize: 12, fontWeight: 'bold', color:'#FFF',paddingTop:15,paddingLeft:10,paddingRight:15}}>{item.title} </Text>
              <Text  style={{fontSize: 11, width:55,fontWeight: 'normal', color:'#FFF',paddingLeft:10,height:50}}>{item.subtitle}</Text> */}
          </ImageBackground>
          </View>
            );
          })}
          </ScrollView>
           {/* } */}
          </View>
         
          <View style={{flexDirection:'row',marginTop:15}}>
          <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled={true} 
          >
          <TouchableOpacity style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', height:30,width:115,borderRadius:5,backgroundColor:'#29B200',marginLeft:5,padding:5  }}>
          <Icon
            type={Icons.Ionicons}
            name="call-outline"
            size={13}
            style={{
                marginLeft:2,
                color:'#fff'
            }}
            />
            <Text onPress={()=>{onPressMobileNumberClick(global.phoneno);}} numberOfLines={1} style={{fontSize: 10, fontWeight: 'bold',color:'#FFF', marginLeft:2}}>{global.phoneno}</Text>
            </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', height:30,width:80,borderRadius:5,backgroundColor:'#FFF',marginLeft:5,padding:5,borderColor:'#707070',borderWidth:0.5}}
          onPress={() => Linking.openURL(`whatsapp://send?phone=${global.phoneno}&text=Hello ...}`)}
        >
          <Icon
            type={Icons.Ionicons}
            name="logo-whatsapp"
            size={13}
            style={{
                marginLeft:2,
                color:'#707070'
            }}
            />
            <Text numberOfLines={1} style={{fontSize: 10, fontWeight: 'bold',color:'#000', marginLeft:2}}>Whatapp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', height:30,width:80,borderRadius:5,backgroundColor:'#FFF',marginLeft:5,padding:5,borderColor:'#707070',borderWidth:0.5}}>
          <Icon
            type={Icons.MaterialCommunityIcons}
            name="share"
            size={13}
            style={{
                marginLeft:2,
                color:'#707070'
            }}
            />
            <Text numberOfLines={1} style={{fontSize: 10, fontWeight: 'bold',color:'#000', marginLeft:2}}>Share</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', height:30,width:80,borderRadius:5,backgroundColor:'#FFF',marginLeft:5,padding:5,borderColor:'#707070',borderWidth:0.5}}>
          <Icon
            type={Icons.Feather}
            name="edit-2"
            size={13}
            style={{
                marginLeft:2,
                color:'#707070'
            }}
            />
            <Text numberOfLines={1} style={{fontSize: 10, fontWeight: 'bold',color:'#000', marginLeft:2}}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', height:30,width:80,borderRadius:5,backgroundColor:'#FFF',marginLeft:5,padding:2,borderColor:'#707070',borderWidth:0.5}}>
          {/* <Icon
            type={Icons.Ionicons}
            name="logo-whatsapp"
            size={13}
            style={{
                marginLeft:2,
                color:'#707070'
            }}
            /> */}
            <Text numberOfLines={1} style={{fontSize: 10, fontWeight: 'bold',color:'#000', marginLeft:2}}>Claim</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', height:30,width:80,borderRadius:5,backgroundColor:'#FFF',marginLeft:5,padding:5,borderColor:'#707070',borderWidth:0.5}}>
          <Icon
            type={Icons.AntDesign}
            name="find"
            size={13}
            style={{
                marginLeft:2,
                color:'#707070'
            }}
            />
            <Text numberOfLines={1} style={{fontSize: 10, fontWeight: 'bold',color:'#000', marginLeft:2}}>Find Us</Text>
            </TouchableOpacity>
            </ScrollView>
            </View>
          </View>
          <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center', marginTop: 8}}>
              
              <View style={{ flexDirection: 'row', flex: 1,alignItems:'center'}}>
                
                <View style={{ flexDirection: 'column',  justifyContent: 'center', alignItems: 'center'}} >
                <View style={{ borderRadius:10, borderWidth:0.3, borderColor:'#707070',width:70, height:35, borderRadius: 5}}>
                <View style={{backgroundColor:'#07A262', width:70, height:35,justifyContent: 'center', alignItems: 'center', borderRadius:3, }}>
              <Text numberOfLines={1} style={{fontSize: 14, fontWeight: 'bold', color:'#ffffff',}}>Rating {productDetail.data.Rating}</Text>
            </View>
                </View>
               
    
                </View>
                <Rating
              type='custom'
              //ratingImage={WATER_IMAGE}
              ratingColor='#F7C310'
              ratingBackgroundColor='#c8c7c8'
              ratingCount={productDetail.data.Rating}
              imageSize={12}
              onFinishRating={this.ratingCompleted}
              style={{ paddingVertical: 10, marginLeft:5 }}
            />
                </View>
                <View style={{ flexDirection: 'row',alignItems:'flex-end'}}>
                <View style={{ justifyContent: 'center', alignItems: 'center', height:30,width:70,borderRadius:5,backgroundColor:'red'  }}>
                <Text numberOfLines={1} style={{fontSize: 10, fontWeight: 'bold',color:'#FFF', }}>{productDetail.data.OpenCloseTime}</Text>
                </View>
                </View>
                </View>
               <View style={{paddingBottom:10, backgroundColor:'#ffffff', paddingTop:12, margin:8, borderRadius:8,paddingLeft:12, paddingRight:12}}>
                <Text style={{fontSize: 15, fontWeight: 'bold', color:'#000', marginTop:5}}>About the Business</Text>
                <Text style={{fontSize: 14,fontWeight: 'normal', color:'#000', marginTop:5}}>{productDetail.data.description}</Text>
               </View>

            <View
              style={{
                flex: 1,
                backgroundColor:'#ffffff',
                margin:8, borderRadius:8,
                paddingBottom:10, marginTop:10, paddingTop:12,  paddingLeft:12, paddingRight:12
              }}>
              <Text style={{fontSize: 15, fontWeight: 'bold', color:'#000', width:width-10,marginBottom:5}}>Amenities and More</Text>
              <FlatList style={{}}
                  data={productDetail.data.Amenities}
                  keyExtractor={(item, index) => item.key}
                  numColumns={3}
                  renderItem={({ item, index }) => (
                    <View style={{flexDirection:'row', width:"33%",height:25, marginTop:10, backgroundColor:'#ffffff', }}>
                        <Text>{item}</Text>
                    </View>

                  )}/>
            </View>

            
            <View
              style={{
                flex: 1,
                //height:120,
                backgroundColor:'#ffffff',
                margin:8, borderRadius:8,
                paddingBottom:10, marginTop:10, paddingTop:12,  paddingLeft:12, paddingRight:12
              }}>
              <Text style={{fontSize: 15, fontWeight: 'bold', color:'#000', width:width-10,marginBottom:5}}>Location & Hours
</Text>

              <View style={{width:'100%', height:140,ustifyContent: 'center', alignItems: 'center', borderRadius:4, marginTop:12}}>
                <ImageBackground style={{ height:140, width:'100%'}}
                    imageStyle={{ borderRadius: 4}}
                    source={require('../../imgss/mapss.png')} >
                    {/* <Text numberOfLines={1} style={{fontSize: 12, fontWeight: 'bold', color:'#FFF',paddingTop:15,paddingLeft:10,paddingRight:15}}>{item.title} </Text>
                    <Text  style={{fontSize: 11, width:55,fontWeight: 'normal', color:'#FFF',paddingLeft:10,height:50}}>{item.subtitle}</Text> */}
                </ImageBackground>
              </View>

              <FlatList style={{}}
                  data={productDetail.data.schedules}
                  keyExtractor={(item, index) => item.key}
                  numColumns={2}
                  renderItem={({ item, index }) => (
                    <View style={{flexDirection:'row', width:"33%",height:25, marginTop:10, backgroundColor:'#ffffff', }}>
                        <Text>{item}</Text>
                    </View>
                  )}/>
            </View>

            <View
              style={{
                flex: 1,
                height:120,
                backgroundColor:'#ffffff',
                margin:8, borderRadius:8,
                paddingBottom:10, marginTop:10, paddingTop:12,  paddingLeft:12, paddingRight:12
              }}>
              <Text style={{fontSize: 15, fontWeight: 'bold', color:'#000', width:width-10,marginBottom:5}}>Frequently Asked Questions </Text>
            </View>

            <View
              style={{
                flex: 1,
                height:120,
                backgroundColor:'#ffffff',
                margin:8, borderRadius:8,
                paddingBottom:10, marginTop:10, paddingTop:12,  paddingLeft:12, paddingRight:12
              }}>
              <Text style={{fontSize: 15, fontWeight: 'bold', color:'#000', width:width-10,marginBottom:5}}>Recommended Reviews </Text>
              {productDetail.data.Review.data.map((item, index) => {
              return(
            <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', padding:5}}  key={item.id}>
                {/* <Text  style={{fontSize: 11, fontWeight: 'normal', color:'#000000',paddingLeft:10,height:50}}>{item.name +"  "+ item.created_at}</Text>  */}
                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft:15}}>
            
            <Text numberOfLines={2} style={{fontSize: 11, fontWeight: 'bold',color:'#000000', marginTop:7}}>{item.name +"  "+ item.created_at}</Text>
            {/* <Text numberOfLines={2} style={{fontSize: 14, fontWeight: 'bold',color:'#000000', marginTop:7}}>{item.created_at}</Text> */}
            
            <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection:'row', marginTop:8}}>
            <Icon 
              style={{marginLeft:-3}}
              type={Icons.Ionicons}
              name={'location-outline'}
              color={"#727272"}
              size={13}
            />
              <Text numberOfLines={1} style={{fontSize: 10, fontWeight: 'normal', color:'#727272', marginLeft:5}}>{item.name}</Text>
            </View>
            <Text numberOfLines={1} style={{fontSize: 10, fontWeight: 'normal', color:'#000000', marginLeft:15}}>{item.message}</Text>
            </View>
            </View>
              );
            })}
            
            </View>

            


            <View
              style={{
                paddingBottom:25, marginBottom:250, paddingTop:12,  paddingLeft:12, paddingRight:12
              }}></View>

          </ScrollView>
         
    </SafeAreaView>
  );
}
}
export default Details;
