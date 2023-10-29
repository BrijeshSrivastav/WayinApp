/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import  React,{useEffect,useState} from 'react';
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
  ActivityIndicator,
  ScrollView,
  BackHandler
  
} from 'react-native';
//import { ScrollView } from 'react-native-virtualized-view'
import SvgUri from 'react-native-svg-uri';
//import { SvgUri } from 'react-native-svg';

import Carousel from '../components/Carousel'
const carouselItem = require('../assets/carousel.json');
//import { dummyData } from '../data/Data'

import { ImageSlider } from "react-native-image-slider-banner";
import Header from '../components/Header';
import Icon, {Icons} from '../components/Icons';
import CarouseBanner from '../components/CarouseBanner'
import {homePageApi, usernam} from '../normalapi'
import { useSelector, useDispatch } from 'react-redux'
import {getCatList,getSubCatList,setUserName} from '../redux/categoryaction'
import Loading from '../components/Loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogBox } from 'react-native'
function Home({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch()
  const [islodinghome,setLoadingHome]=useState(false);
  const [islodingimage,setLoadingImage]=useState(false);
  const [resdata,setResponseData]=useState('');
  const [bannerData,setBnnerData]=useState('');
  
  const getData=async ()=>{
    //setLoadingHome(false)
    await homePageApi().then((res)=>{
     setResponseData(res);
     setBnnerData(res.bannerslider);
     setLoadingHome(true);
    }).catch((error)=>{
      setLoadingHome(true);
      console.log(error);
    })
  }

  const _retrieveData = async () => {
   // alert("ddddd")
    try {
      const value = await AsyncStorage.getItem('token');
      //alert(value);
      if (value !== null) {
        // We have data!!
        dispatch(setUserName(value));
        console.log(value);

      }
    } catch (error) {
      // Error retrieving data
    }
  };
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Notification!", "Are you sure you want to close?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    getData();
    LogBox.ignoreLogs(["VirtualizedLists should never be nested","Each child in a list should have a unique key prop"]);
    //LogBox.ignoreLogs(["Each child in a list should have a unique key prop"]);
  }, []);
 
 
  function aaa(){
    //Alert.alert('Click here for voice search ');
    //navigation.navigate('listing')

    navigation.navigate('SignInScreen')
  }
  function onLoadingImg(value,lable){
    setLoadingImage(value,lable)
  }
  let isloding=useSelector((state)=>state.catReducer.isloding);
  //_retrieveData();
  const RenderItemData = (props) => {
  return(
    <>
    
    <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center'}}>
    <TouchableOpacity style={{ borderRadius:10, borderWidth:0.5, borderColor:'#00A1A0'}}
     onPress={()=>{
      dispatch(getSubCatList(props.itemData.slug))
      navigation.navigate('subcategory')
      }}
    >
      <Image style={{width:36, height:36, borderRadius: 2, margin:6}}
        source={{
          uri: 'https://askwayin.com/assets/images/'+props.itemData.photo,
        }} 
       
        />
      </TouchableOpacity>
      <Text numberOfLines={2} style={{fontSize: 12, height:50, fontWeight: 'bold',color:'#000000', marginTop:5}}>{props.itemData.title}</Text>
    </View>
    {props.arr === 6 &&
    (
      <TouchableOpacity style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center'}} 
      onPress={()=>{
        navigation.navigate('category')
        }}>
     {isloding===true ? (<ActivityIndicator  />):
     (  
      <>  
    <View style={{ borderRadius:10, borderWidth:0.5, borderColor:'#00A1A0',}}>
      <Image style={{width:36, height:36, borderRadius: 2, margin:6}}
        source={require('../../imgss/explore.png')} />
    </View>
    <Text numberOfLines={2} style={{fontSize: 12, height:50,fontWeight: 'bold', color:'#000000', marginTop:5}}>Explore</Text>
        </>  
     )}
    </TouchableOpacity>)} 
    </>
  )
};
  
if(resdata===""){
return(<Loading sizes="small" colors="#0000ff"></Loading>)
}else{
  return (
    <SafeAreaView >
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        //backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header navigation={navigation}/>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        nestedScrollEnabled={true} 
        style={{ width: "100%" }}
      
        //</SafeAreaView>style={backgroundStyle}
        >
{islodinghome === false ? (<ActivityIndicator />) :
     (<View style={{backgroundColor:'#00A1A0', }}>
        <View style={{marginTop:10, marginLeft:8, marginRight:8, borderTopLeftRadius:15, borderTopRightRadius:12, backgroundColor:'#ffffff'}}>
          <View style={{padding:8, borderRadius:15}}>
            <View style={{justifyContent: 'center', alignItems: 'center', flexDirection:'row', width: '100%', height:50, borderRadius:15, backgroundColor:'#F3F2F2', marginTop: 0, paddingRight:6, paddingLeft:6}}>
              <Image
                  source={require('../../imgss/search.png')}
                  style={{ height: 24, width: 24, margin: 5}}
              />
            <TextInput 
                  placeholder="Discover Endless Possibilties" 
                  placeholderTextColor="#A0A0A0"
                  style={{backgroundColor:'#F3F2F2', flex:1,color: "#000000"}}
              />

              <View style={{padding:6}}> 
              <TouchableOpacity >
                <Image
                  source={require('../../imgss/microphone.png')}
                  style={{ height: 20, width: 20, margin:5,tintColor:'#7B7B7B'}}/>

                  {/* <SvgUri width="16" height="16" source={require('../../imgss/marker.svg')} /> */}

                  {/* <SvgUri
                    width="24"
                    height="24"
                    source={{uri:'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg'}}
                  /> */}
              </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{padding:5, borderRadius:15}}>

       
          {bannerData === "" ? (<Loading />):
          (<View>
            <Carousel data = {bannerData}/>
        </View>)}
          
         
          {/* <View>
            <CarouseBanner bannerData = {bannerData}/>
        </View>  */}
          </View>

         
          
          {/* https://github.com/meliorence/react-native-snap-carousel/issues/138 */}
          
          <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center', marginTop: 8}}>
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'baseline', height:50, }}>
              <Text numberOfLines={1} style={{fontSize: 14, fontWeight: 'bold',color:'#000000', marginTop:5,}}>Explore Wayin</Text>
              <Text numberOfLines={1} style={{fontSize: 12, fontWeight: 'normal',color:'#000000', marginTop:3,height:20}}>Discover the categories</Text>
            </View>
            {/* <View style={{ flexDirection: 'row', flex: 0.50, justifyContent: 'flex-end', alignItems: 'flex-end',  }}>
              <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold',color:'#000000', }}>View all</Text>
              <Image style={{width:12, height:12, borderRadius: 2, marginLeft:5, marginBottom:2, }}
                source={require('../../imgss/arrow.png')} />
            </View> */}
          </View>

    <View>
        <FlatList
        data={resdata.homecategory}
        renderItem={({item,index}) => <RenderItemData itemData={item}  arr={index}/>}
        keyExtractor={item => item.id}
        numColumns={4}
       
      />
          </View>
        </View> 


        <View style={{marginTop:0, backgroundColor:'#ffffff'}}>
          
          <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled={true} 
         
          >
           {resdata.smallbanner.map((item, index) => {
            return(
          <View style={{justifyContent: 'center', alignItems: 'center', padding:5}}  key={item.id}>
          <ImageBackground style={{width:120, height:140}}
              imageStyle={{ borderRadius: 12}}
              source={{
                uri: 'https://askwayin.com/assets/images/'+item.photo,
              }} >
              <Text numberOfLines={1} style={{fontSize: 12, fontWeight: 'bold', color:'#FFF',paddingTop:15,paddingLeft:10,paddingRight:15}}>{item.title} </Text>
              <Text  style={{fontSize: 11, width:55,fontWeight: 'normal', color:'#FFF',paddingLeft:10,height:50}}>{item.subtitle}</Text>
          </ImageBackground>
          </View>
            );
          })}
          </ScrollView>
        </View>

        <View style={{marginTop:0, paddingTop:30, backgroundColor:'#E8F5F6'}}>
          <ImageBackground 
            // source={require('../../imgss/images.jpg')}
            style={{ 
              width: 'auto',
              marginTop:0,
              paddingTop:1,
              height: 260,
              }}
          >

            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight:10, justifyContent: 'center', alignItems: 'center', marginTop: 1}}>
              <View style={{ flexDirection: 'row', flex: 0.50, justifyContent: 'flex-start', alignItems: 'flex-start', }}>
                <Image style={{width:25, height:34, borderRadius: 2, tintColor:'#1C5791', marginRight:15,  }}
                  source={require('../../imgss/log_new.png')} />
                <Text numberOfLines={2} style={{fontSize: 14, fontWeight: 'bold',color:'#000000', marginTop:8}}>Popular Category</Text>
              </View>
              <View style={{ flexDirection: 'row', flex: 0.50, justifyContent: 'flex-end', alignItems: 'flex-end',  }}>
                <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold',color:'#000000', }}>View all</Text>
                <Image style={{width:12, height:12, borderRadius: 2, tintColor:'#000000', marginLeft:5, marginBottom:2, }}
                  source={require('../../imgss/arrow.png')} />
              </View>
            </View>

            <View style={{marginTop:5,}}>
              <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              nestedScrollEnabled={true} 
              
              >
                 {resdata.popularcat.map((item, index) => {
              return(
              <View style={{ justifyContent: 'center', alignItems: 'center', padding:5}} key={item.id}>
                
                {item.photo1===""?
                  (<Image style={{width:120, height:140, borderRadius: 12, marginLeft:6 }}
                  source={require('../../imgss/noimg.png')} />)
                  :(<Image style={{width:120, height:140, borderRadius: 12, marginLeft:6}}
                    source={{
                      uri: 'https://askwayin.com/assets/images/'+item.photo1,
                    }} 
                    
                    />)}
                  <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#000000', marginTop:10}}>{item.title}</Text>
              </View>
                 );
                })}
              {/* <View style={{ justifyContent: 'center', alignItems: 'center', padding:5}}>
                <Image style={{width:120, height:140, borderRadius: 12}}
                  source={require('../../imgss/bel2.jpeg')} />
                  <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#ffffff', marginTop:10}}>Job/Career</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', padding:5}}>
                <Image style={{width:120, height:140, borderRadius: 12}}
                  source={require('../../imgss/bel1.jpeg')} />
                  <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#ffffff', marginTop:10}}>Restaurants & cafe</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', padding:5}}>
                <Image style={{width:120, height:140, borderRadius: 12}}
                  source={require('../../imgss/bel4.jpeg')} />
                  <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#ffffff', marginTop:10}}>Real Estate</Text>
              </View> */}
              </ScrollView>
            </View>
          </ImageBackground >
        </View>

        <View style={{backgroundColor:'#E8F5F6', width:'100%', paddingBottom:30, }}>
        {/* <View style={{marginTop:0, paddingTop:0, marginLeft:6, marginRight:6, backgroundColor:'#E8F5F6', borderRadius:25}}>
          <ImageBackground 
            source={require('../../imgss/Rectangle.jpg')}
            style={{ 
              width: '100%',
              marginTop:0,
              borderRadius:25,
              paddingTop:1,
              marginBottom:5,
              height: 200,
              }}
          >

            

          </ImageBackground>
          </View> */}

              <View style={{ marginLeft:6, marginRight:6}}>
                <ImageBackground style={{width:'100%', height:140, borderRadius: 12, }}
                imageStyle={{ borderRadius: 12}}
                  source={require('../../imgss/Rectangle.jpg')} 
                  >

<Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#ffffff', paddingTop:15,paddingLeft:10,paddingRight:15}}>Connect with </Text>
<Text numberOfLines={2} style={{fontSize: 22, fontWeight: 'bold', color:'#EEFF00', paddingTop:10,paddingLeft:10,paddingRight:10}}>Millions of Services </Text>
<TouchableOpacity style={{borderRadius: 10,backgroundColor: '#1100FF',width:95,height:30,margin:10,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'Roboto-Medium',
              fontWeight:'normal',
              color:'#FFF',
              textAlign:'center'
            }}>
           Listing now
          </Text>
        </TouchableOpacity>

                    </ImageBackground>
              </View>

          </View>


          <View style={{marginTop:0, paddingTop:5, paddingBottom:15, backgroundColor:'#f2f2f2'}}>
            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
              <View style={{ flexDirection: 'row', flex: 0.50, justifyContent: 'flex-start', alignItems: 'flex-start', }}>
                <Text numberOfLines={2} style={{fontSize: 14, fontWeight: 'bold',color:'#000000', marginTop:8}}>Popular Brands</Text>
              </View>
              <View style={{ flexDirection: 'row', flex: 0.50, justifyContent: 'flex-end', alignItems: 'flex-end',  }}>
              <Image style={{width:12, height:12, borderRadius: 2, tintColor:'#000000', marginLeft:5, marginBottom:2, }}
                  source={require('../../imgss/arrow.png')} />
              </View>
            </View>

              <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ backgroundColor:'#f2f2f2'}}
              nestedScrollEnabled={true} 
             
              >
            {resdata.partners.map((item, index) => {
              return(
               <View style={{ justifyContent: 'center', alignItems: 'center', padding:5,borderRadius: 30 }} key={item.id}>
                {/* <Image style={{width:80, height:80, borderRadius: 30}}
                 source={{
                  uri: 'https://askwayin.com/assets/images/'+item.brand_img,
                }} /> */}
                {item.brand_img===""?
                  (<Image style={{width:80, height:80, borderRadius: 40, marginLeft:6 }}
                  source={require('../../imgss/noimg.png')} />)
                  :(<Image style={{width:80, height:80, borderRadius: 40, marginLeft:6}}
                    source={{
                      uri: 'https://askwayin.com/assets/images/'+item.brand_img,
                    }} 
                    
                    />)}
                  <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#000000', marginTop:6}}>{item.brand_name}</Text>
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



            <View style={{marginTop:0, paddingTop:10, paddingBottom:158}}>
          

            <View style={{ padding: 10, marginTop: 0}}>
            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', height:50, }}>
              <Text numberOfLines={2} style={{fontSize: 14, fontWeight: 'bold',color:'#ffffff', marginTop:0}}>Explore Wayin</Text>
              <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'normal',color:'#ffffff', marginTop:3}}>Discover the categories</Text>
            </View>
            {/* <Image style={{width:'80%', height:160,  marginLeft:2, borderRadius:20, marginRight:12}}
                  source={require('../../imgss/aaaaaa.jpg')} /> */}
                   <ImageBackground 
            source={require('../../imgss/subs.png')}
            style={{ 
              width: '90%',
              height: 90,
              marginLeft:30,
              }}
              imageStyle={{ borderRadius: 5}}
          >
             <Text numberOfLines={2} style={{fontSize: 10, fontWeight: 'normal',color:'#ffffff', padding:5,width:"60%"}}>Grow Your Business by reaching out to 
 new customers.</Text>
 <TouchableOpacity style={{borderRadius: 10,backgroundColor: '#FFF',width:"40%",height:30,margin:10,flexDirection:'row'}}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'Roboto-Medium',
              fontWeight:'normal',
              padding:7,
              color:'#000'
            }}>
            Subscribe Now
          </Text>
          <Icon
            type={Icons.AntDesign}
            name="arrowright"
            size={15}
            color={'#000'}
            style={{marginTop:7,marginRight:10}}
            />
        </TouchableOpacity>
          </ImageBackground>
            </View>
            
            </View>

      </View>)}


      </ScrollView>
    </SafeAreaView>
  );
}
}
export default Home;
