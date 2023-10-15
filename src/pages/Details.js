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
  const [islodinghome,setLoadingHome] = useState(false);
  const [resdata,setResponseData] = useState('');
  const getData = async ()=>{
    //setLoadingHome(false)
    await homePageApi().then((res)=>{
     setResponseData(res);
     setLoadingHome(true);
    }).catch((error)=>{
      setLoadingHome(true);
      console.log(error);
    });
  };
  useEffect(() => {
    getData();
    LogBox.ignoreLogs(['VirtualizedLists should never be nested','Each child in a list should have a unique key prop']);
    //LogBox.ignoreLogs(["Each child in a list should have a unique key prop"]);
  }, []);

  // let userList=useSelector((state)=>state.catReducer.userList);
  // let isloding=useSelector((state)=>state.userReducer.isloding);
  // useEffect(() => {
  //   //Runs only on the first render
  //   dispatch(getUserList(true));
  // },[dispatch]);
  //alert(JSON.stringify(userList));

  function aaa(){
    Alert.alert('Click here for voice search ');
  }
  let isloding = useSelector((state)=>state.catReducer.isloding);
  const RenderItemData = (props) => {
  return (
  <>
    <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center'}}>
    <View style={{ borderRadius:10, borderWidth:0.5, borderColor:'#00A1A0'}}>
      <Image style={{width:36, height:36, borderRadius: 2, margin:6}}
        source={{
          uri: 'https://askwayin.com/assets/images/' + props.itemData.photo,
        }} />
      </View>
      <Text numberOfLines={2} style={{fontSize: 12, height:50, fontWeight: 'bold',color:'#000000', marginTop:5}}>{props.itemData.title}</Text>
    </View>
    {props.arr === 6 &&
    (
      <TouchableOpacity style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center'}}
      onPress={()=>{
        dispatch(getCatList(''));
        navigation.navigate('category');
        }}>
     {isloding === true ? (<ActivityIndicator  />) :
     (
      <>
    <View style={{ borderRadius:10, borderWidth:0.5, borderColor:'#00A1A0'}}>
      <Image style={{width:36, height:36, borderRadius: 2, margin:6}}
        source={require('../../imgss/explore.png')} />
    </View>
    <Text numberOfLines={2} style={{fontSize: 12, height:50,fontWeight: 'bold', color:'#000000', marginTop:5}}>Explore</Text>
        </>
     )}
    </TouchableOpacity>)}
    </>
  );
};

if (resdata === ''){
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
      <Detailheader navigation={navigation} resdata={resdata}/>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        nestedScrollEnabled={true}
        style={{ width: '100%',backgroundColor:'#fff'}}
         >
       <View> 
        <View style={{ flex: 1,  alignItems: 'flex-start', width:'100%', marginLeft:5, marginRight:5, backgroundColor:'#ffffff', paddingBottom:10, marginTop:10,paddingTop:20}}>
        <Text numberOfLines={2} style={{fontSize: 18, fontWeight: 'bold', color:'#000', marginLeft:5,width:width-20}}>Dubai, Al Nahada Restaurants Dubai
          400+ Listings</Text>

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
             <Text numberOfLines={1} style={{fontSize: 10,fontWeight: 'normal', color:'#000000'}}>Explore</Text>
             </View>
            </View>
           

            </View>
            <Text numberOfLines={2} style={{fontSize: 14, fontWeight: 'bold',color:'#000000', marginLeft:12}}>Indian Palace</Text>
            </View>
            <View style={{ flexDirection: 'row',alignItems:'flex-end'}}>
            <View style={{ justifyContent: 'center', alignItems: 'center', height:30,width:70,borderRadius:20,backgroundColor:'#5C30A9'  }}>
            <Text numberOfLines={1} style={{fontSize: 10, fontWeight: 'bold',color:'#FFF', }}>Top Rated</Text>
            </View>
            </View>
            </View>
            </View>
            <View>
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
              {/* <Text numberOfLines={1} style={{fontSize: 12, fontWeight: 'bold', color:'#FFF',paddingTop:15,paddingLeft:10,paddingRight:15}}>{item.title} </Text>
              <Text  style={{fontSize: 11, width:55,fontWeight: 'normal', color:'#FFF',paddingLeft:10,height:50}}>{item.subtitle}</Text> */}
          </ImageBackground>
          </View>
            );
          })}
          </ScrollView>
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
            <Text numberOfLines={1} style={{fontSize: 10, fontWeight: 'bold',color:'#FFF', marginLeft:2}}>+971545720202</Text>
            </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', height:30,width:80,borderRadius:5,backgroundColor:'#FFF',marginLeft:5,padding:5,borderColor:'#707070',borderWidth:0.5}}>
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
              <Text numberOfLines={1} style={{fontSize: 14, fontWeight: 'bold', color:'#ffffff',}}>Rating 4</Text>
            </View>
                </View>
               
    
                </View>
                <Rating
              type='custom'
              //ratingImage={WATER_IMAGE}
              ratingColor='#F7C310'
              ratingBackgroundColor='#c8c7c8'
              ratingCount={5}
              imageSize={12}
              onFinishRating={this.ratingCompleted}
              style={{ paddingVertical: 10, marginLeft:5 }}
            />
                </View>
                <View style={{ flexDirection: 'row',alignItems:'flex-end'}}>
                <View style={{ justifyContent: 'center', alignItems: 'center', height:30,width:70,borderRadius:5,backgroundColor:'red'  }}>
                <Text numberOfLines={1} style={{fontSize: 10, fontWeight: 'bold',color:'#FFF', }}>Close</Text>
                </View>
                </View>
                </View>
               <View>
               <Text numberOfLines={2} style={{fontSize: 15, fontWeight: 'bold', color:'#000', marginLeft:5,width:width-10,marginTop:5}}>About the Business</Text>
               <Text numberOfLines={100} style={{fontSize: 14,height:200, fontWeight: 'normal', color:'#000', marginLeft:5,width:width-10,marginTop:5}}>Serving authentic Indian cuisine complemented by traditional interiors for a regal dining experience</Text>
               </View>
          </ScrollView>
         
    </SafeAreaView>
  );
}
}
export default Details;
