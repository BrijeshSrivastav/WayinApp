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
import { Card } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CategoryFilter from '../components/CategoryFilter';
import Header_with_Back from '../components/Header_with_Back';
import { Dimensions } from 'react-native'
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
  
  let catList = useSelector((state)=>state.catReducer.catList);
  const RenderItemData = (props) => {
  return (
    <>
    {/* <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', width:251, marginLeft:5, marginRight:5, backgroundColor:'#ffffff', borderColor:'#727272', borderWidth:0.5, borderRadius:5, paddingBottom:10, marginTop:20,margin:10}}>
          <View style={{ borderTopLeftRadius:5, borderTopRightRadius:5,  }}>
            <Image style={{width:250, height:130, borderTopLeftRadius:5, borderTopRightRadius:5,  }}
            source={require('../../imgss/list_img.png')} />
          </View>
          <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft:15}}>
            
            <Text numberOfLines={2} style={{fontSize: 11, fontWeight: 'bold',color:'#E02932', marginTop:7}}>INDIAN RESTAURANTS</Text>
            <Text numberOfLines={2} style={{fontSize: 10, fontWeight: 'bold',color:'#000000', marginTop:7}}>Desi Dhaba</Text>
            
            <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection:'row', marginTop:8}}>
            <Icon 
            style={{marginLeft:-3}}
             type={Icons.Ionicons}
              name={'location-outline'}
              color={"#727272"}
              size={13}
            />
              <Text numberOfLines={1} style={{fontSize: 10, fontWeight: 'normal', color:'#727272', marginLeft:5}}>Desi Dhaba</Text>
            </View>

            <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection:'row', marginTop:8}}>
            <Icon 
            style={{marginLeft:-2}}
             type={Icons.Ionicons}
              name={'call-outline'}
              color={"#727272"}
              size={13}
            />
              <Text numberOfLines={1} style={{fontSize: 10, fontWeight: 'normal', color:'#727272', marginLeft:5}}>+971 541234525</Text>
            </View>

            

            <View style={{justifyContent: 'space-between', alignItems: 'stretch', flexDirection:'row', marginTop:20}}>
            <View style={{backgroundColor:'#07A262', width:30, height:30,justifyContent: 'center', alignItems: 'center', borderRadius:3, }}>
              <Text numberOfLines={1} style={{fontSize: 14, fontWeight: 'bold', color:'#ffffff',}}>3</Text>
            </View>
            <Rating
              type='custom'
              //ratingImage={WATER_IMAGE}
              ratingColor='#F7C310'
              ratingBackgroundColor='#c8c7c8'
              ratingCount={5}
              imageSize={15}
              onFinishRating={this.ratingCompleted}
              style={{ paddingVertical: 10, marginLeft:10 }}
            />
            <Text numberOfLines={1} style={{fontSize: 10, fontWeight: 'normal', color:'#727272', marginLeft:25, marginTop:10,}}>3 Week Ago</Text>
            </View>

          </View>
        </View> */}
    <TouchableOpacity style={{margin:5,width:(width/2)-10}} onPress={()=>navigation.navigate('details')}>   
    <Card>
    <Image style={{width:(width/2)-10, height:100, borderTopLeftRadius:5, borderTopRightRadius:5}}
            source={require('../../imgss/list_img.png')} />
        
          <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft:15}}>
            
            <Text numberOfLines={2} style={{fontSize: 11, fontWeight: 'bold',color:'#E02932', marginTop:7}}>INDIAN RESTAURANTS</Text>
            <Text numberOfLines={2} style={{fontSize: 10, fontWeight: 'bold',color:'#000000', marginTop:7}}>Desi Dhaba</Text>
            
            <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection:'row', marginTop:8}}>
            <Icon 
            style={{marginLeft:-3}}
             type={Icons.Ionicons}
              name={'location-outline'}
              color={"#727272"}
              size={13}
            />
              <Text numberOfLines={1} style={{fontSize: 10, fontWeight: 'normal', color:'#727272', marginLeft:5}}>Desi Dhaba</Text>
            </View>

            <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection:'row', marginTop:8}}>
            <Icon 
            style={{marginLeft:-2}}
             type={Icons.Ionicons}
              name={'call-outline'}
              color={"#727272"}
              size={13}
            />
              <Text numberOfLines={1} style={{fontSize: 10, fontWeight: 'normal', color:'#727272', marginLeft:5}}>+971 541234525</Text>
            </View>

            <View style={{backgroundColor:'#B8B8B8', width:"100%",marginTop:25,borderWidth:0.2,borderStyle:'dotted',marginLeft:-5}}>
            </View>

            <View style={{justifyContent: 'space-between', alignItems: 'stretch', flexDirection:'row', marginTop:10,marginBottom:10}}>
            <View style={{backgroundColor:'#07A262', width:30, height:30,justifyContent: 'center', alignItems: 'center', borderRadius:3, }}>
              <Text numberOfLines={1} style={{fontSize: 14, fontWeight: 'bold', color:'#ffffff',}}>3</Text>
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
            <Text numberOfLines={1} style={{fontSize: 10, fontWeight: 'normal', color:'#727272',marginLeft:7, marginTop:10,}}>3 Week Ago</Text>
            </View>
            </View>
          
  </Card>
  </TouchableOpacity> 
   
    </>
  );
};

if (catList === ''){
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
      <Header_with_Back navigation={navigation}/>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        nestedScrollEnabled={true}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{width:width , ackgroundColor:'#fff'}}
         >
     <CategoryFilter color={"#FFF"}/>    
  <View>
     <FlatList
        data={catList.data.allcategories}
        renderItem={({item}) => <RenderItemData itemData={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 100,paddingRight:20}}
      />
      </View>
          
         </ScrollView>
    </SafeAreaView>
  );
}
}
export default Listing;
