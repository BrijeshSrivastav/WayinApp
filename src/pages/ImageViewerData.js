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
function ImageViewerData({navigation}) {
  const [panEnabled, setPanEnabled] = useState(false);



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
        <PanGestureHandler
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

      </PanGestureHandler>
  </SafeAreaView>
  )
}

export default ImageViewerData