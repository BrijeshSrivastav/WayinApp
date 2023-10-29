import {View, Text, FlatList, Dimensions, TouchableOpacity,ImageBackground,SafeAreaView,Image,Platform} from 'react-native';
import React, {useState,Fragment} from 'react';
import Icon, {Icons} from '../components/Icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ImageFilesData } from '../constants/images';
import CommonCard from '../common/CommonCard';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
const {height, width} = Dimensions.get('window');

export default function UserList({navigation}) {
  const [data, SetData] = useState([1, 1, 1, 1, 1]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const MenuArr = [
    {
    headingtitle:"Profile Setting",
    submenuitem:[{
      id:1,
      route: 'Personalnfo',
      //imgenam: ImageFilesData.userimg,
      type: Icons.Ionicons,
      activeIcon: 'person-outline',
      title:'Personal Information'
      //component: Personalnfo,
    },
    {
      id:2,
      route: 'AddListing',
      //imgenam: ImageFilesData.notemedical,
      type: Icons.Ionicons,
      activeIcon: 'list-outline',
      title:'AddListing' 
    },
    {
      id:3,
      route: 'advertisements',
      //imgenam: ImageFilesData.megaphone,
      type: Icons.Ionicons,
      activeIcon: 'megaphone-outline',
      title:'Adverties with us' 
    },
    {
      id:4,
      route: 'Notification',
      //imgenam: ImageFilesData.bell,
      type: Icons.Ionicons,
      activeIcon: 'notifications-outline',
      title:'Notification'
    }],
},
{
  headingtitle:"Useful Links",
  submenuitem:[{
    id:5,
    route: 'user',
    //imgenam: ImageFilesData.messagesdollar,
    type: Icons.Ionicons,
    activeIcon: 'wallet-outline',
    title:'Refer & Earn'
  },
  {
    id:6,
    route: 'TermsConditions',
    //imgenam:ImageFilesData.memopad,
    type: Icons.Ionicons,
    activeIcon: 'reader-outline',
    title:'Terms &  Conditions' 
  },
  {
    id:7,
    route: 'PrivacyPolicy',
    //imgenam: ImageFilesData.shieldexclamation,
    type: Icons.Ionicons,
    activeIcon: 'shield-checkmark-outline',
    title:'Privacy Policy' 
  },
  {
    id:8,
    route: 'InvestorRelations',
  //imgenam: ImageFilesData.handshake,
  type: Icons.Ionicons,
    activeIcon: 'people-outline',
    title:'Investor Relations'
  },
  {
    id:9,
    route: 'AppFeedBack',
    //imgenam: ImageFilesData.Union2,
    type: Icons.Ionicons,
    activeIcon: 'thumbs-up-outline',
    title:'App Feed Back'
  }
],
},
{
  headingtitle:"Support",
  submenuitem:[{
    id:10,
    route: 'Help',
    //imgenam: ImageFilesData.Union3,
    type: Icons.Ionicons,
    activeIcon: 'help-circle-outline',
    title:'Help'
  },
  {
    id:11,
    route: 'Ratetheapp',
    //imgenam: ImageFilesData.squarestar,
    type: Icons.Ionicons,
    activeIcon: 'star-outline',
    title:'Rate the app' 
  },
],
},
{
  headingtitle:"Preferences",
  submenuitem:[{
    id:12,
    route: 'Language',
    //imgenam: ImageFilesData.globe,
    type: Icons.Ionicons,
    activeIcon: 'globe-outline',
    title:'Language'
  },
  {
    id:13,
    route: 'City',
    //imgenam: ImageFilesData.marker,
    type: Icons.Ionicons,
    activeIcon: 'location-outline',
    title:'City' 
  },
  {
    id:14,
    route: 'Settings',
    //imgenam: ImageFilesData.Union4,
    type: Icons.Ionicons,
    activeIcon: 'settings-outline',
    title:'Settings' 
  },
],
}
];
const removeItemValue=async()=> {
  try {
      await AsyncStorage.removeItem("user_name");
      await AsyncStorage.removeItem("user_email");
      await AsyncStorage.removeItem("token");
      return true;
  }
  catch(exception) {
      return false;
  }
}
  return (
    <Fragment>
    <SafeAreaView style={{ flex: 0, backgroundColor: '#069199' }} />
    <View style={{flex: 1}}>
     
       
        <ImageBackground
          source={ImageFilesData.drawerbackground}
          resizeMode='contains'
          >
          <View style={{margin: 20,justifyContent:'center'}}>
           <View style={{flexDirection:'row',justifyContent:'space-between'}}>
           <TouchableOpacity onPress={()=>navigation.goBack()}>
           <AntDesign name="arrowleft" size={20} color="#FFFFFF"   />
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>{
            navigation.navigate('SignInScreen')
            removeItemValue()
          }
            }>
           <Text
            style={{
              color: '#FFFFFF',
              fontSize: 14,
              fontFamily: 'Roboto-Medium',
              fontWeight:'bold',
              marginBottom: 5,
              
            }}>
            Logout
          </Text>
          </TouchableOpacity>
            </View>  
        <View style={{justifyContent:'center',alignItems:'center'}}>    
          <Image
            source={ImageFilesData.profileImagedrawer}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 14,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
           Hello! {global.kddd}
          </Text>
          </View> 
          </View>
        </ImageBackground>
        
        <View style={{backgroundColor:'#00EEBE',borderRadius: 10,height:100,margin:10}}>
        <Text
            style={{
              color: '#000',
              fontSize: 13,
              fontFamily: 'Roboto-Medium',
              marginLeft:30,
              marginTop:13,
              paddingLeft:10,
              paddingRight:5,
              paddingTop:10
            }}>
           Grow Your Business by reaching out to 
          </Text>
   
         <View style={{flexDirection:'row',marginLeft:30,marginTop:10}}>
          <Text
            style={{
              color: '#000',
              fontSize: 20,
              fontFamily: 'Roboto-Medium',
              fontWeight:'bold',
              paddingLeft:10,
              marginRight:10,
              paddingTop:10,
             
            }}>
            new customers.
          </Text>
          <TouchableOpacity style={{borderRadius: 5,backgroundColor: '#F39200',marginRight:40,marginTop:10,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <Text
            style={{
              fontSize: 13,
              fontFamily: 'Roboto-Medium',
              fontWeight:'normal',
              padding:7,
              textAlign:'center',
              color:'#FFF'
            }}>
            Subscribe Now
          </Text>
          <Icon
            type={Icons.AntDesign}
            name="arrowright"
            size={15}
            style={{marginRight:10}}
            />
        </TouchableOpacity>
        </View>
       </View>
       <View style={{backgroundColor: 'white', flex: 1}}>
        <ScrollView style={{marginTop:10}}>
       {MenuArr.map((item, index) => { 
      return (
        <View style={{justifyContent:'center',alignItems:'flex-start'}}>
          <>
        <Text
          style={{
            color: '#000',
            fontSize: 16,
            fontWeight: 'bold',
            textAlign:'center',
            marginLeft:20,
            marginTop:20,
            marginBottom:20
          }}>
         
          {item.headingtitle}
        </Text>
       

       
</>
          {item.submenuitem.map((subitem, index2) => {
            return (
            <>
            <View
             key={index2}
              style={{
                width: '100%',
                height: Platform.OS === 'ios' ? 60 : 65,
              }}>
                {/* <Text>{subitem.imgenam}</Text> */}
              <CommonCard
               route={subitem.route}
               title={subitem.title}
               imagens={subitem.activeIcon}
               icontype={subitem.type}
               count={''}
               
              />
               
            </View>
           {/* // && subitem.title=== "App Feed Back"  && subitem.title=== "Rate the app"  && subitem.title=== "Settings"  && */}
           {subitem.title=== "Notification"  &&
              (<View style={{height:0.3,width:'90%',backgroundColor:'#B8B8B8',marginLeft:5, marginTop:15}}/>)}
               {subitem.title=== "App Feed Back"  &&
              (<View style={{height:0.3,width:'90%',backgroundColor:'#B8B8B8',marginLeft:5, marginTop:15}}/>)}
               {subitem.title=== "Rate the app" &&
              (<View style={{height:0.3,width:'90%',backgroundColor:'#B8B8B8',marginLeft:5, marginTop:15}}/>)}
               {subitem.title=== "Settings"  &&
              (<View style={{height:0.3,width:'90%',backgroundColor:'#B8B8B8',marginLeft:5, marginTop:15}}/>)}
              </>
              );
              
              
            })}
          </View>
          
           
          )
    })}
    </ScrollView>
        </View>
        
      
        {/* <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>  */}
    
       <View style={{padding: 5, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              WaYinApp 1.0
            </Text>
          </View>
        </TouchableOpacity>
      </View> 
    </View>
  </Fragment>
  
  );
}
