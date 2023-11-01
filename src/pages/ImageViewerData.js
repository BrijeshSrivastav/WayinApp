import React, { useState, useRef, createRef } from 'react';
import { Text, Image, Animated, Dimensions } from 'react-native';
import { PanGestureHandler, PinchGestureHandler, State } from 'react-native-gesture-handler';


import {
  SafeAreaView,
  StatusBar

} from 'react-native';
import { View } from 'react-native-animatable';
import Gallery from 'react-native-image-gallery';
import Header_lmageviewer from '../components/Header_lmageviewer';
import { useSelector, useDispatch } from 'react-redux';

import { SliderBox } from 'react-native-image-slider-box'


function ImageViewerData({navigation}) {
  const [panEnabled, setPanEnabled] = useState(false);

  const images = [
    // require('../../imgss/list_img.png'),
    // require('../../imgss/list_img.png'),
    // require('../../imgss/list_img.png'),
    // require('../../imgss/list_img.png'),
     {uri: 'https://askwayin.com/assets/images/1158576461697107829.jpg'},
     {uri: 'https://askwayin.com/assets/images/Q8SKnPJ11691002479.jpg'},
     {uri: 'https://askwayin.com/assets/images/vzRVqC1W1691058430.png'},
    ];

    // console.log("**********************************");
    // console.log(images);
    // console.log("**********************************");

    console.log("**********************************");
    console.log(global.kdarrwq);
    console.log("**********************************");

  const scale = useRef(new Animated.Value(1)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const pinchRef = createRef();
  const panRef = createRef();

  const onPinchEvent = Animated.event([{
    nativeEvent: { scale }
  }],
    { useNativeDriver: true });

  const onPanEvent = Animated.event([{
    nativeEvent: {
      translationX: translateX,
      translationY: translateY
    }
  }],
    { useNativeDriver: true });

  const handlePinchStateChange = ({ nativeEvent }) => {
    // enabled pan only after pinch-zoom
    if (nativeEvent.state === State.ACTIVE) {
      setPanEnabled(true);
    }

    // when scale < 1, reset scale back to original (1)
    const nScale = nativeEvent.scale;
    if (nativeEvent.state === State.END) {
      if (nScale < 1) {
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: true
        }).start();
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: true
        }).start();
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true
        }).start();

        setPanEnabled(false);
      }
    }
  };

  return (
    <SafeAreaView>
    <StatusBar
        //barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        //backgroundColor={backgroundStyle.backgroundColor}
      />   
   <Header_lmageviewer navigation={navigation} />
{/* <Gallery
        style={{ flex: 1 }}
        images={[
          { source: {uri: 'https://askwayin.com/assets/images/1158576461697107829.jpg'}, dimensions: { width: 150, height: 150 } },
          { source: { uri: 'https://askwayin.com/assets/images/21160754211697107830.jpg' } },
          { source: { uri: 'https://askwayin.com/assets/images/RNp6rGzF1692163626.jpg' } },
          { source: { uri: 'https://askwayin.com/assets/images/RNp6rGzF1692163626.jpg' } },
          { source: { uri: 'https://askwayin.com/assets/images/4406293941697107830.jpg' } }
        ]}
      >
        </Gallery> */}


        {/* <PanGestureHandler
        onGestureEvent={onPanEvent}
        ref={panRef}
        simultaneousHandlers={[pinchRef]}
        enabled={panEnabled}
        failOffsetX={[-1000, 1000]}
        shouldCancelWhenOutside
      >
        <Animated.View>
          <PinchGestureHandler
            ref={pinchRef}
            onGestureEvent={onPinchEvent}
            simultaneousHandlers={[panRef]}
            onHandlerStateChange={handlePinchStateChange}
          >
            <Animated.Image
              source={{ uri: 'https://askwayin.com/assets/images/4406293941697107830.jpg' }}
              style={{
                width: '100%',
                height: '100%',
                transform: [{ scale }, { translateX }, { translateY }]
              }}
              resizeMode="contain"
            />

          </PinchGestureHandler>
        </Animated.View>

      </PanGestureHandler> */}

          <View style={{ height:'100%',marginLeft:10, marginRight:10, marginTop:200}}>
            <View style={{height:'100%',borderRadius:6, }}>
              <SliderBox style={{width:'94.6%', height:180, borderRadius:6,}}
                //images={images}
                images={
                  global.kdarrwq.map(function(item) {
                    return {
                      //key: item.id,
                      'uri': "https://askwayin.com/assets/images/"+item.photo
                    };
                  })
                }
                dotColor="#00A1A0"
                inactiveDotColor="#ffffff"
                dotStyle={{height: 5, width: 18, borderRadius: 50}} imageLoadingColor="black"
                autoplay={true}
                autoplayInterval={3000}
                circleLoop={true}
                // onCurrent ImagePressed={(index) => alert(index+1)}
                firstItem={0}
                paginationBoxVerticalPadding={5}
              />

            </View>
            </View>

  </SafeAreaView>
  )
}

export default ImageViewerData