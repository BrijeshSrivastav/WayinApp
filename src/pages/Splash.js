/* eslint-disable react-hooks/exhaustive-deps */
import {SafeAreaView,View,StyleSheet, Text,Image} from 'react-native';
import React, {useEffect} from 'react';
import {ImageFilesData} from '../constants/images'
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      //navigation.navigate('Parent');
      navigation.navigate('SignInScreen');
      
    }, 2000);
  }, []);
  return (
     <SafeAreaView style={{flex: 1}}>
     
        {/*Simple Gradient*/}
        {/* <LinearGradient
          colors={['#1D1D1B', '#1C5791', '#2A338A']}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>
            Simple Linear Gradient Background
          </Text>
        </LinearGradient> */}

        {/*Horizontal Gradient*/}
        {/* <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#1D1D1B', '#1C5791', '#2A338A']}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>
            Horizontal Gradient Background
          </Text>
        </LinearGradient> */}

        {/*Location Gradient*/}
        <LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.5, y: 1.0}}
          locations={[0, 0.5, 0.6]}
          colors={['#1D1D1B', '#1C5791', '#2A338A']}
          style={styles.linearGradient}>
          <Animatable.Image  
          animation="slideInRight"
          duraton="1000"    
          style={styles.imagestyle} source={ImageFilesData.logo} />
        </LinearGradient>
     
    </SafeAreaView>
  );
};

export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    borderTopRightRadius: 5,
    borderTopLeftRadius:5,
    //marginTop: 16,
    justifyContent:'center',
    alignItems:'center'
  },
  imagestyle: {
   width:300,
   height:130
  },
});
