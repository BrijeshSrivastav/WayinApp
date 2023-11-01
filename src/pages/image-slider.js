import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Slideshow from "react-native-image-slider-show";

const dataSource = [
  {
    title: "Burger 1",
    caption: "Original  Cheezy Meat",
    url:
      "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg"
  },
  {
    title: "Burger 2",
    caption: "100% Original Beef",
    url:
      "https://www.thespruceeats.com/thmb/vJUFf6L4p8y9Cn_1pE9Z7Ua9uok=/3000x2001/filters:fill(auto,1)/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg"
  },
  {
    title: "Burger 3",
    caption: "Mouthfull Of Happiness",
    url:
      "https://www.thespruceeats.com/thmb/l4w6PvMqsz1EjueCAh_foPmYafM=/3456x3456/smart/filters:no_upscale()/garlic-burger-patties-333503-hero-01-e4df660ff27b4e5194fdff6d703a4f83.jpg"
  }
];

const ImageSlider = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const toggle = setInterval(() => {
      setPosition(position === dataSource.length - 1 ? 0 : position + 1);
    }, 3000);

    return () => clearInterval(toggle);
  });

  return (
    <View style={{borderRadius: 25,padding:2}}>
      <Slideshow height={100} overlay={false} arrowSize={0} position={position} dataSource={dataSource} 
      containerStyle={{borderRadius: 250, }}
    //   containerStyle={{
    //     //width: 15,
    //     //height: 15,
    //     borderRadius: 150 / 2,
    //     //marginHorizontal: 10,
    //     //padding: 0,
    //     //margin: 0
    //   }}
    />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageSlider;