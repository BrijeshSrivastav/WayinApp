import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './pages/Splash';
import Parent from './pages/Parent';

import ListScroll from './pages/ListScroll';

import SubCategory from './pages/SubCategory';
import Category from './pages/Category';
import SignInScreen from './pages/SignInScreen';
import SignUpScreen from './pages/SignUpScreen';

import Listing from './pages/Listing';
import Details from './pages/Details';
import ImageViewerData from './pages/ImageViewerData';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{headerShown: false}}
        />


      <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Parent"
          component={Parent}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ListScroll"
          component={ListScroll}
          options={{headerShown: false}}
        />

      <Stack.Screen
          name="subcategory"
          component={SubCategory}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="category"
          component={Category}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="listing"
          component={Listing}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="details"
          component={Details}
          options={{headerShown: false}}
        />

<Stack.Screen
          name="ImageViewerData"
          component={ImageViewerData}
          options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
