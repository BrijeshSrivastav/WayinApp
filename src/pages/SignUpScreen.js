import React from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    ToastAndroid, Alert,
    
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {registerPost} from '../normalapi'
import Loading from '../components/Loading';
import {ImageFilesData} from '../constants/images'


const SignUpScreen = ({navigation}) => {
    const [islodingres,setLoadingRes]=React.useState(false);
    const [resdata,setResponseData]=React.useState('');
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

    const textInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }

    const textInputChangeMobile = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                mobile: val,
                check_textInputChangeMobile: true
            });
        } else {
            setData({
                ...data,
                mobile: val,
                check_textInputChangeMobile: false
            });
        }
    }
    const textInputChangeEmail = (val) => {
        const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
        if( val.length !== 0 && strongRegex.test(val)) {
            setData({
                ...data,
                email: val,
                check_textInputChangeEmail: true
            });
         
        }else {
            setData({
            ...data,
            email: val,
            check_textInputChangeEmail: false
            });
        }
    }

    const textInputChangeName = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                name: val,
                check_textInputChangename: true
            });
        } else {
            setData({
                ...data,
                name: val,
                check_textInputChangename: false
            });
        }
    }

    const handlePasswordChange = (val) => {
    if( val.length !== 0 ) {
        setData({
            ...data,
            password: val,
            secureTextEntryPass:true
        });
    }else{
        setData({
            ...data,
            password: val,
            secureTextEntryPass: false
        });
    }
    }
    

    const handleConfirmPasswordChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                confirm_password: val,
                confirm_secureTextEntry_Pass:true
            });
        }else{
            setData({
                ...data,
                confirm_password: val,
                confirm_secureTextEntry_Pass: false
            });
        }
      
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }
    const notifyMessage=(msg)=> {
        if (Platform.OS === 'android') {
          ToastAndroid.show(msg, ToastAndroid.SHORT);
          //navigation.goBack();
        } else {
            Alert.alert(
                //title
                'Notification',
                //body
                msg,
                [
                  {
                    text: 'OK',
                    onPress: () =>  {}
                  },
                ],
                {cancelable: false},
                //clicking out side of alert will not cancel
              );
            
        }
      }

      const notifyMessageRes=(msg)=> {
        if (Platform.OS === 'android') {
          ToastAndroid.show(msg, ToastAndroid.SHORT);
          navigation.goBack();
        } else {
            Alert.alert(
                //title
                'Notification',
                //body
                msg,
                [
                  {
                    text: 'OK',
                    onPress: () =>  {navigation.goBack();}
                  },
                ],
                {cancelable: false},
                //clicking out side of alert will not cancel
              );
            
        }
      }

    const registerData=async ()=>{
       
        if(data.check_textInputChangename === false){
            notifyMessage("Plese Enter Name");
        }else if(data.check_textInputChange === false){
            notifyMessage("Plese Enter Username");
        }else if(data.check_textInputChangeEmail === false){
            notifyMessage("Invailid Email Id");
        }else if(data.check_textInputChangeMobile === false){
            notifyMessage("Plese Enter Mobile Number");
        }else if(data.secureTextEntryPass === false){
            notifyMessage("Plese Enter Password");
        }
        else if(data.confirm_secureTextEntry_Pass === false){
            notifyMessage("Plese Confirm Password not match ");
        }else{
            setLoadingRes(true);
       const param  ={
            "name":data.name,
            "username":data.username,
            "phone":data.phone,
            "email":data.email,
            "password":data.password
            }
        await registerPost(param).then((res)=>{
            setResponseData(res);
            setLoadingRes(false);
          if(res.status==="success"){
            //alert(res.message);
            notifyMessageRes(res.message);
            _storeData(res.token)
          }else{
            notifyMessage("Something worng");
            //alert("Something worng");
          }  
        }).catch((error)=>{
          setLoadingRes(false);
         // Toast.show(error, Toast.LONG);
          console.log(error);
        })
    }
}
const _storeData = async (token) => {
    try {
      await AsyncStorage.setItem(
        'token_id',
        token,
      );
    } catch (error) {
      // Error saving data
    }
  };

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        {/* <View style={styles.header}>
            <Text style={styles.text_header}>Register Now!</Text>
        </View> */}

<LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.5, y: 1.0}}
          locations={[0, 0.5, 0.6]}
          colors={['#00A1A0', '#00A1A0', '#00A1A0']}
          style={styles.header}>
             <Animatable.Image  
          animation="slideInRight"
          duraton="1000"    
          style={styles.imagestyle} source={ImageFilesData.loginlogo} />
            </LinearGradient>

        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>

            <Text style={styles.text_footer}>Name</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Name"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChangeName(val)}
                />
                {data.check_textInputChangename ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>

            <Text style={styles.text_footer2}>Username</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Username"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>
            <Text style={styles.text_footer2}>Email</Text>
            <View style={styles.action}>
                <MaterialCommunityIcons 
                    name="email"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    autoCompleteType="email"
                    onChangeText={(val) => textInputChangeEmail(val)}
                />
                {data.check_textInputChangeEmail ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>



            <Text style={styles.text_footer2}>Mobile</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Mobile"
                    style={styles.textInput}
                    autoCapitalize="none"
                    keyboardType="numeric"
                    onChangeText={(val) => textInputChangeMobile(val)}
                />
                {data.check_textInputChangeMobile ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Confirm Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Confirm Your Password"
                    secureTextEntry={data.confirm_secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handleConfirmPasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By signing up you agree to our
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
            </View>
            <View style={styles.button}>
              
                {islodingres === true ? (<Loading />):
                (<TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {registerData()}}
                >
                <LinearGradient
                    colors={['#00A1A0', '#00A1A0']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign Up</Text>
                </LinearGradient>
                </TouchableOpacity>)}
               

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign In</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </Animatable.View>
      </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
        marginTop:10
    },
    text_footer2: {
        color: '#05375a',
        fontSize: 18,
        marginTop:20
    },

    text_footer3: {
        color: '#05375a',
        fontSize: 18,
        marginTop:20
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#000000',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    },
    imagestyle: {
        alignItems:'center',
        width:150,
        height:65,
        marginTop:50,
        tintColor:'#FFF'
       },
  });
