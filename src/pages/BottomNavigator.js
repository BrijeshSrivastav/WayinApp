import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon, {Icons} from '../components/Icons';
import Colors from '../constants/Colors';
import Home from '../pages/Home';
import Category from '../pages/Category';
import UserList from '../pages/UserList';
import Favourites from '../pages/Favourites';
import Help from '../pages/Help';

import * as Animatable from 'react-native-animatable';
import { ImageFilesData } from '../constants/images';
import SvgUri from 'react-native-svg-uri';

const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    type: Icons.SimpleLineIcons,
    activeIcon: 'home',
    inActiveIcon: 'home',
    component: Home,
  },
  {
    route: 'Category',
    label: 'Categories',
    type: Icons.SimpleLineIcons,
    activeIcon: 'grid',
    inActiveIcon: 'grid',
    component: Category,
  },
  {
    route: 'UserList',
    label: 'Account',
    type: Icons.SimpleLineIcons,
    activeIcon: 'user',
    inActiveIcon: 'user',
    component: UserList,
  },
  {
    route: 'Favourites',
    label: 'Favourites',
    type: Icons.SimpleLineIcons,
    activeIcon: 'heart',
    inActiveIcon: 'heart',
    component: Favourites,
  },
  {
    route: 'Help',
    label: 'Help',
    type: Icons.SimpleLineIcons,
    activeIcon: 'bubble',
    inActiveIcon: 'bubble',
    component: Help,
  },
];

// const TabArr = [
//   {
//     route: 'Home',
//     label: 'Home',
//     type: ImageFilesData.home_img_active,
//     activeIcon: ImageFilesData.home_img_active,
//     inActiveIcon: ImageFilesData.home_img_inactive,
//     component: Home,
//   },
//   {
//     route: 'Category',
//     label: 'Categories',
//     type: ImageFilesData.cat_img_active,
//     activeIcon: ImageFilesData.cat_img_active,
//     inActiveIcon: ImageFilesData.cat_img_inactive,
//     component: Category,
//   },
//   {
//     route: 'UserList',
//     label: 'Account',
//     type: ImageFilesData.profile_img_active,
//     activeIcon: ImageFilesData.profile_img_active,
//     inActiveIcon: ImageFilesData.profile_img_inactive,
//     component: UserList,
//   },
//   {
//     route: 'Favourites',
//     label: 'Favourites',
//     type: ImageFilesData.fav_img_active,
//     activeIcon: ImageFilesData.fav_img_active,
//     inActiveIcon: ImageFilesData.fav_img_inactive,
//     component: Favourites,
//   },
//   {
//     route: 'Help',
//     label: 'Help',
//     type: ImageFilesData.help_img_active,
//     activeIcon: ImageFilesData.help_img_active,
//     inActiveIcon: ImageFilesData.help_img_inactive,
//     component: Help,
//   },
// ];

const Tab = createBottomTabNavigator();

const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    // if (focused) {
    //   viewRef.current.animate({
    //     0: {scale: 0.5, rotate: '0deg'},
    //     1: {scale: 1.5, rotate: '360deg'},
    //   });
    // } else {
    //   viewRef.current.animate({
    //     0: {scale: 1.5, rotate: '360deg'},
    //     1: {scale: 1, rotate: '0deg'},
    //   });
    // }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        <Icon
          type={item.type}
          name={focused ? item.activeIcon : item.inActiveIcon}
          color={focused ? Colors.primary : "#000"}
          size={20}
          style={focused ? styles.iconstyleactive : styles.iconstyleInactive}
        />
          {/* <SvgUri width="18" height="18" source={focused ? item.activeIcon : item.inActiveIcon} /> */}
        <Text style={focused ? styles.texttyleactive : styles.texttyleInactive}>
          {item.label}
        </Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 65,
          position: 'absolute',
          //bottom: 16,
          //right: 16,
          //left: 16,
          borderRadius: 5,
        },
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:3
   
  },
  iconstyleactive:{
    height:25,
    width:25,
  },
  iconstyleInactive:{
    height:25,
    width:25
  },
  texttyleactive: {
    fontSize: 8,
    marginTop:5,
    color:'#000'
  },
  texttyleInactive: {
    fontSize: 10,
    marginTop:5,
    color:'#000'
  },
});
