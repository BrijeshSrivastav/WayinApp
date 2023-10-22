import {View, Text, Image, TouchableOpacity,Alert} from 'react-native';
import React from 'react';
import Icon, {Icons} from '../components/Icons';
import SvgUri from 'react-native-svg-uri';
const CommonCard = ({
  route,
  title,
  imagens,
  icontype,
  count,
  onClick,
}) => {
 //alert(imagens);
  return (
    <>
    <View style={{width: '100%', height: 70, justifyContent: 'center'}}>
      <TouchableOpacity
        key={route}
        style={{
          width: '96%',
          height: 40,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,
         // backgroundColor: bgColor ? bgColor : '#fff',
          marginLeft:30
        }}
        // onPress={() => {
        //   onClick();
        // }}
        >
        <View style={{flexDirection: 'row', alignItems: 'center',justifyContent:'center',alignItems:'center'}}>
        <View style={{ borderRadius:25, borderWidth:0.5, borderColor:'#C1C1C1',backgroundColor:'#FFF',padding:7,marginRight:15,justifyContent:'center',alignItems:'center'}}>
        <Icon
          type={icontype}
          name={imagens}
          color={"#000"}
          size={16}
        />
           {/* <SvgUri width="14" height="14" source={imagens} /> */}
          </View>
          <Text
            style={{
              marginLeft: 7,
              fontWeight: '600',
              color: '#000000',
              fontSize: 10,
              width:100
            }}>
            {title}
          </Text>
       
        </View>
        <View
          style={{
            //backgroundColor: newColor ? newColor : bgColor ? bgColor : '#fff',
            height: 35,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 20,
            paddingRight: 20,
            marginRight: 10,
          }}>
        
        <Icon
            type={Icons.MaterialIcons}
            name="keyboard-arrow-right"
            style={{
              width: 24,
              height: 24,
              //tintColor: bgColor ? 'red' : '#6D6D6D',
            }}
          />
</View>
       
      </TouchableOpacity>
    </View>
   
     </>
  );
};

export default CommonCard;
