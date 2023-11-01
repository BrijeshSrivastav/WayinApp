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
  Pressable,
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
import { Card } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CategoryFilter from '../components/CategoryFilter';
import Header_with_Back from '../components/Header_with_Back';
import { Dimensions } from 'react-native'
import {getProductDetail} from '../redux/productaction';
import Header_listing from '../components/Header_listing';

function Listing({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();
  const [islodinghome,setLoadingHome] = useState(false);
  const [resdata,setResponseData] = useState('');
  const { width, height } = Dimensions.get('window');
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
    //getData();
    LogBox.ignoreLogs(['VirtualizedLists should never be nested','Each child in a list should have a unique key prop']);
    //alert((width/2)-10);
    //LogBox.ignoreLogs(["Each child in a list should have a unique key prop"]);
  }, [width]);

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
  
  let productList = useSelector((state)=>state.productReducer.productList);
  //alert(JSON.productList);
  const RenderItemData = (props) => {
  return (
    <>
    <Pressable style={{marginTop:12, justifyContent:'center'}} 
    onPress={()=>
      {
      navigation.navigate('details');
      dispatch(getProductDetail(props.itemData.slug));
      global.phoneno=props.itemData.phone_number;
     }
      }>   
    <Card style={{width:'100%'}}>
    {/* <Image style={{width:(width/2)-10, height:100, borderTopLeftRadius:5, borderTopRightRadius:5}} */}
          
          {/* <Image style={{height:130, borderTopLeftRadius:5, borderTopRightRadius:5}}
              source={{
                uri: 'https://askwayin.com/assets/images/'+props.itemData.photo,
          }}/> */}

          <ImageBackground 
            source={{
              uri: 'https://askwayin.com/assets/images/'+props.itemData.photo,
              }}
            style={{ 
              //width: '90%',
              height: 130,
              marginLeft:0,
              }}
              imageStyle={{ borderTopLeftRadius:5, borderTopRightRadius:5}} >

            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight:10, justifyContent: 'center', alignItems: 'center', marginTop: 1}}>
              <View style={{ flexDirection: 'row', flex: 0.50, justifyContent: 'flex-start', alignItems: 'flex-start', }}>
              <View style={{backgroundColor:'#8BC34B', paddingLeft:12, paddingRight:12, paddingTop:4, paddingBottom:4, borderRadius:6, marginTop:6}}>
                <Text numberOfLines={2} style={{fontSize: 13, fontWeight: 'bold',color:'#ffffff', backgroundColor:'#8BC34B', padding:4, borderRadius:10}}>{props.close_open.toUpperCase()}</Text></View>
                
                { props.is_featuredd == 'FEATURED' ? 
                <View style={{backgroundColor:'#00A1A1', paddingLeft:12, paddingRight:12, paddingTop:4, paddingBottom:4, borderRadius:6, marginTop:6, marginLeft:10}}>
                <Text numberOfLines={2} style={{fontSize: 13, fontWeight: 'bold',color:'#ffffff', padding:4, borderRadius:10}}>{props.is_featuredd}</Text></View> 
                : ""
                }
                </View>
                
              <View style={{ flexDirection: 'row', flex: 0.50, justifyContent: 'flex-end', alignItems: 'flex-end',  }}>
                {/* <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold',color:'#000000', }}>View all</Text> */}
                {/* <Image style={{width:12, height:12, borderRadius: 2, tintColor:'#000000', marginLeft:5, marginBottom:2, }}
                  source={require('../../imgss/favourite.png')} /> */}
                <View style={{backgroundColor:'#937B77', width:30, height:30, justifyContent:'center', alignItems:'center', borderRadius:25}}>
                    <Icon 
                      style={{marginTop:3, marginLeft:1}}
                      type={Icons.Ionicons}
                      name={'heart-outline'}
                      color={"#ffffff"}
                      size={22}
                    />
                </View>
              </View>
            </View>

          </ImageBackground>
        
          <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft:15}}>
            
            <Text numberOfLines={2} style={{fontSize: 11, fontWeight: 'bold',color:'#E02932', marginTop:7}}>{global.catnam}</Text>
            <Text numberOfLines={2} style={{fontSize: 14, fontWeight: 'bold',color:'#000000', marginTop:7}}>{props.itemData.name}</Text>
            
            <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection:'row', marginTop:8}}>
            <Icon 
              style={{marginLeft:-3}}
              type={Icons.Ionicons}
              name={'location-outline'}
              color={"#727272"}
              size={13}
            />
              <Text numberOfLines={1} style={{fontSize: 10, fontWeight: 'normal', color:'#727272', marginLeft:5}}>{props.itemData.real_address}</Text>
            </View>

            <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection:'row', marginTop:8}}>
            <Icon 
            style={{marginLeft:-2}}
             type={Icons.Ionicons}
              name={'call-outline'}
              color={"#727272"}
              size={13}
            />
              <Text numberOfLines={1} style={{fontSize: 10, fontWeight: 'normal', color:'#727272', marginLeft:5}}>{props.itemData.phone_number}</Text>
            </View>

            <View style={{backgroundColor:'#B8B8B8', width:"100%",marginTop:25,borderWidth:0.2,borderStyle:'dotted',marginLeft:-5}}>
            </View>

            {/* <View style={{width:'100%', justifyContent:'flex-start',flexDirection:'row', marginTop:10,marginBottom:10, backgroundColor:'#ff0000'}}>
            <View style={{backgroundColor:'#07A262', width:30, height:30,justifyContent: 'space-between', alignItems: 'center', borderRadius:3, }}>
              <Text numberOfLines={1} style={{fontSize: 14, fontWeight: 'bold', color:'#ffffff',}}>{props.itemData.phone_number}</Text>
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
            <View style={{ justifyContent:'flex-end'}}>
            <Text numberOfLines={1} style={{fontSize: 10, fontWeight: 'normal', color:'#ffffff',marginLeft:7, }}>3 Week Ago</Text>
            </View>
            </View> */}



            <View style={{flex:1, height:50, width:'100%',flexDirection:'row', borderRadius:12}}>
              <View style={{flex:.5}}>
              <View style={{width:'100%', justifyContent:'flex-start',flexDirection:'row', marginTop:10,marginBottom:10, }}>
              <View style={{backgroundColor:'#07A262', width:40, height:30,justifyContent: 'center', alignItems: 'center', borderRadius:3, }}>
              <Text numberOfLines={1} style={{fontSize: 14, fontWeight: 'bold', color:'#ffffff',}}>5.0</Text>
            </View>
            <Rating
              type='custom'
              //ratingImage={WATER_IMAGE}
              // ratingColor='#F7C310'
              // ratingBackgroundColor='#c8c7c8'
              // ratingCount={5}
              // imageSize={12}
              // onFinishRating={this.ratingCompleted}
              // style={{ paddingVertical: 10, marginLeft:5 }}
              ratingColor='#F7C310'
              readonly
              ratingBackgroundColor='#d2d2d2'
              ratingCount={5}
              //startingValue={productDetail.data.Rating} // dynamic
              startingValue={3.5}
              imageSize={12}
              tintColor={'#F4F4F7'}
              style={{ paddingVertical: 10, marginLeft:5, tintColor:'#F4F4F7', }}
            />
              </View>
              </View>
              <View style={{flex:.5, justifyContent:'center', paddingRight:10}}>
              <View style={{ justifyContent:'flex-end', alignItems:'flex-end'}}>
            <Text numberOfLines={1} style={{fontSize: 10, fontWeight: 'normal', color:'#000000',marginLeft:7, }}>3 Week Ago</Text>
            </View>
              </View>
            
            </View>


            </View>
          
  </Card>
  </Pressable> 
   
    </>
  );
};
//alert(JSON.stringify(productList))
if (productList === ''){
// eslint-disable-next-line react/self-closing-comp
return (<Loading sizes="small" colors="#0000ff"></Loading>);
} else {
  const { width, height } = Dimensions.get('window');
  return (
    <SafeAreaView >
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        //backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header_listing navigation={navigation}/>
      <ScrollView
        //contentInsetAdjustmentBehavior="automatic"
        nestedScrollEnabled={true}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{width:width , ackgroundColor:'#fff'}}
         >
     <CategoryFilter color={"#FFF"}/>    
     <View>
     {productList.data.status===false ? (
       <View style={{width:width,height:height-150,justifyContent:'center',alignItems:'center'}}>
       <Text style={{fontWeight:'bold'}}> oh! Sorry No Records Found..</Text>
     </View>
     ):
     (
  <FlatList
        data={productList.data.lishting}
        renderItem={({item}) => <RenderItemData itemData={item} navigation={navigation} close_open={productList.data.OpenCloseTime} is_featuredd={productList.data.is_feature}/>}
        keyExtractor={item => item.id}
        numColumns={1}
        contentContainerStyle={{ paddingBottom: 100,paddingRight:15, paddingLeft:15}}
      />)}
      </View>
          
         </ScrollView>
    </SafeAreaView>
  );
}
}
export default Listing;
