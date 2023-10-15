import React,{Fragment} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Button,
  Alert,
  Platform,
  SafeAreaView
} from 'react-native';
//import {Platform, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon, {Icons} from '../components/Icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ImageFilesData } from '../constants/images';
import CommonCard from '../common/CommonCard';


const CustomDrawer = (props) => {
 
  const MenuArr = [
    {
    ids:100,
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
  ids:200,
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
  ids:300,
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
  ids:400,
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
  return (
    <Fragment>
    <SafeAreaView style={{ flex: 0, backgroundColor: '#069199' }} />
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#FFFFFF'}}>
       
        <ImageBackground
          source={ImageFilesData.drawerbackground}
          //resizeMode='contains'
          >
          <View style={{margin: 20,justifyContent:'center'}}>
           <View style={{flexDirection:'row',justifyContent:'space-between'}}>
           <AntDesign name="arrowleft" size={20} color="#FFFFFF"   onPress={() => {
              props.navigation.closeDrawer();
            }}/>
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
           Hello! Mohamed Feroz
          </Text>
          </View> 
          </View>
        </ImageBackground>
      
        <View style={{backgroundColor:'#00EEBE',borderRadius: 10,height:90,margin:10}}>
        <Text
            style={{
              color: '#000',
              fontSize: 13,
              fontFamily: 'Roboto-Medium',
              margin:13
            }}>
           Grow Your Business by reaching out to 
          </Text>
   
         <View style={{flexDirection:'row'}}>
          <Text
            style={{
              color: '#000',
              fontSize: 14,
              fontFamily: 'Roboto-Medium',
              fontWeight:'bold',
              padding:10
            }}>
            new customers.
          </Text>
          <TouchableOpacity style={{borderRadius: 5,backgroundColor: '#F39200',marginRight:40,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <Text
            style={{
              fontSize: 13,
              fontFamily: 'Roboto-Medium',
              fontWeight:'normal',
              padding:5,
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
       {MenuArr.map((item, index) => { 
      return (
       
        <View
         key={item.ids}
        >
        <Text
          style={{
            color: '#000',
            fontSize: 14,
            fontWeight: 'bold',
            marginLeft: 20,
            marginTop:30
          }}>
         
          {item.headingtitle}
        </Text>
          {item.submenuitem.map((subitem, index2) => {
            return (
              <>
            <View
              key={subitem.id}
              style={{
                width: '100%',
                height: Platform.OS === 'ios' ? 60 : 65,
              }}>
              <CommonCard
                //key={subitem.id.toString}
                route={subitem.route}
                title={subitem.title}
                imagens={subitem.activeIcon}
                icontype={subitem.type}
                count={''}
               
              />
            </View>
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
        </View>
      
        {/* <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>  */}
      </DrawerContentScrollView>
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
};

export default CustomDrawer;