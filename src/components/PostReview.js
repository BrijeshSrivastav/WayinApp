import React,{useState} from 'react'
import { View } from 'react-native-animatable'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView ,ScrollView,Text,TextInput,StyleSheet,Platform,Button,TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native'
import { Rating, RatingProps } from '@rneui/themed';
const { width, height } = Dimensions.get('window');
export const PostReview = () => {
   
    const [data, setData] = React.useState({
        name: '',
        username: '',
        email:'',
        mobile:'',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        check_textInputChangename: false,
        check_textInputChangeMobile:false,
        check_textInputChangeEmail:false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
        secureTextEntryPass: false,
        confirm_secureTextEntry_Pass: false,
    });

    const [currency, setCurrency] = useState('US Dollar');
    const ratingCompleted = (rating) => {
        console.log('Rating is: ' + rating);
      };
      
      const ratingProps = {};
  return (
    <SafeAreaView style={styles.container}>
<ScrollView>
<View style={styles.container}>
      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:18,marginTop:5}}> Post Review </Text>
      <View style={{marginTop:20}}>
        <View
        style={{borderRadius:25, borderWidth:0.5,borderColor:'grey',height:40,width:width-30,marginTop:10,marginLeft:20}}
        >
       <TextInput 
          placeholder="Name" 
          placeholderTextColor={"#000000"}
          style={{height:30,width:width-30,paddingLeft:20,paddingTop:10}}
          />
        </View>
        
        <View
        style={{borderRadius:25,borderWidth:0.5,borderColor:'grey',height:40,width:width-30,marginLeft:20,marginTop:10}}
        >
            <TextInput 
          placeholder="Email" 
          placeholderTextColor={"#000000"}
          style={{height:30,width:width-30,paddingLeft:20,paddingTop:10}}
          />
        </View>
       
        <View
        style={{borderRadius:25, borderWidth:0.5,borderColor:'grey',height:120,width:width-30,marginTop:10,marginLeft:20, marginBottom:20,}}
        >
       <TextInput 
          placeholder="Write feedback" 
          placeholderTextColor={"#000000"}
          style={{height:30,width:width-30,paddingLeft:20,paddingTop:10}}
          />
        </View>
       
        <Rating
          type="custom"
          ratingColor="#3498db"
          ratingCount={10}
          imageSize={30}
          onFinishRating={ratingCompleted}
          showRating
          style={{ paddingVertical: 10,marginTop:30 }}
        />
      </View>
      <View style={{justifyContent:'center',alignItems:'center',marginTop:30}}>
      <TouchableOpacity style={{ height:30,width:100,borderRadius:5,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
                  <Text numberOfLines={1} style={{fontSize: 10, fontWeight: 'bold',color:'#ffffff',alignItems:'center'}}>Post Review</Text>
        </TouchableOpacity>
        </View>
    </View>
</ScrollView>
    </SafeAreaView>
  )
}
export default PostReview;
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      width:width,
      paddingTop:20
    },
   
  });
