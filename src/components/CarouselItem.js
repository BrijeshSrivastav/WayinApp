import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import { Card } from 'react-native-paper';
const { width, height } = Dimensions.get('window')

const dimensions = Dimensions.get('window');   
const imageWidth = dimensions.width;
const imageHeight = dimensions.height;

const CarouselItem = ({ item }) => {
    return (
        // <View style={styles.cardView}>
        //<View style={{width:width-10, borderRadius:10, backgroundColor:'#ff0000',}}>
            <Image style={{height: 110, width: imageWidth, borderRadius:12, margin:3, resizeMode:'contain'}} source={{ uri: "https://askwayin.com/assets/images/"+item.photo }} />
           
          //  </View>
        // {/* </View> */}

    //     <Card style={{width:'100%'}}>
    // <Image style={{height:130, borderTopLeftRadius:5, borderTopRightRadius:5}}
    //           source={{ uri: item.url }}  />
    //           <View style={styles.textView}>
    //             <Text style={styles.itemTitle}> {item.title}</Text>
    //              <Text style={styles.itemDescription}>{item.description}</Text>
    //          </View>
    //           </Card>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: width - 20,
        height: 120,
        backgroundColor: 'white',
        // marginLeft:6,
        // marginRight:12,
        borderRadius: 10,
        // shadowColor: '#000',
        // shadowOffset: { width: 0.5, height: 0.5 },
        // shadowOpacity: 0.5,
        // shadowRadius: 3,
        // elevation: 5,
    },

    textView: {
        position: 'absolute',
        bottom: 10,
        margin: 10,
        left: 5,
    },
    image: {
        //width: width - 38,
        height: 120,
        //marginLeft:2,
        marginRight:3,
        borderRadius: 10,
        resizeMode:'contain'
    },
    itemTitle: {
        color: 'white',
        fontSize: 22,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5
    },
    itemDescription: {
        color: 'white',
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5
    }
})

export default CarouselItem