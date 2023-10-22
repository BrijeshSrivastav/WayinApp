import React,{useEffect} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    ToastAndroid,
    
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { useTheme } from 'react-native-paper';
import {ImageFilesData} from '../constants/images'
import {loginPost} from '../normalapi'
import Loading from '../components/Loading';
import { useSelector, useDispatch } from 'react-redux'
import {getUserLogin,userNameD} from '../redux/useraction'
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignInScreen = ({navigation}) => {
    const [islodingres,setLoadingRes]=React.useState(false);
    const [resdata,setResponseData]=React.useState('');
    const dispatch = useDispatch()
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });
    const { colors } = useTheme();
    //const { signIn } = React.useContext(AuthContext);
    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }
    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
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
                    onPress: () => {}
                  },
                ],
                {cancelable: false},
                //clicking out side of alert will not cancel
              );
            
        }
      }
      
      const notifyMessageRes=(msg)=> {
        if (Platform.OS === 'android') {
            navigation.navigate('Parent');
            ToastAndroid.show(msg, ToastAndroid.SHORT);
        } else {
            Alert.alert(
                //title
                'Notification',
                //body
                msg,
                [
                  {
                    text: 'OK',
                    onPress: () =>  {navigation.navigate('Parent')}
                  },
                ],
                {cancelable: false},
                //clicking out side of alert will not cancel
              );
        }
      }
     const _storeData = async (name) => {
        try {
          await AsyncStorage.setItem(
            'user_name',
            name,
          );
        } catch (error) {
          // Error saving data
        }
      };
      const _storeDataEmail = async (email) => {
        try {
          await AsyncStorage.setItem(
            'user_email',
            email,
          );
        } catch (error) {
          // Error saving data
        }
      };
      const _storeDataToken = async (token) => {
        try {
          await AsyncStorage.setItem(
            'token',
            token,
          );
        } catch (error) {
          // Error saving data
        }
      };
      let userdata=useSelector((state)=>state.userReducer.userdata);
      console.log(JSON.stringify(userdata));
      useEffect(() => {
      if(userdata!==""){
        if(userdata.data.status === "success"){
                 setLoadingRes(false);
                 _storeData(userdata.data.name);
                 dispatch(userNameD(userdata.data.name));
                _storeDataEmail(userdata.data.email);
                _storeDataToken(userdata.data.token);
                navigation.navigate('Parent');
              }else{
                setLoadingRes(false);
                notifyMessage("Invalid User!', 'Username or password is incorrect");
              }  
      }
      }, [userdata,navigation,dispatch]);
     // alert(JSON.stringify(userdata));
    const loginHandle = async() => {
        if ( data.username.length === 0 || data.password.length === 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                { text: 'Okay' }
            ]);
            return;
        }

        if (data.length === 0) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                {text: 'Okay'}
            ]);
            return;
        }
         const param = {
           "email":data.username,
           "password":data.password
            }
            setLoadingRes(true);
            dispatch(getUserLogin(param));
        // await loginPost(param).then((res)=>{
        //   if(res.status === "success"){
        //     setLoadingRes(false);
        //     //alert(res.name)
        //     setResponseData(res);
        //     _storeData(res.name);
        //     _storeDataEmail(res.email);
        //     _storeDataToken(res.token);
        //     navigation.navigate('Parent')
        //   }else{
        //     setLoadingRes(false);
        //     notifyMessage("Invalid User!', 'Username or password is incorrect");
          
        //     //alert("Something worng");
        //   }  
        // }).catch((error)=>{
        //   setLoadingRes(false);  
        //   notifyMessage("Something worng");
        //   console.log(JSON.stringify(error));
        // })
    }
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#204F90' barStyle="light-content"/>
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
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
        >
            <Text style={[styles.text_footer, {
                color: "#000000"
            }]}>Username</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color={colors.text}
                    size={20}
                />
                <TextInput 
                    placeholder="Your Username"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: '#000000'
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
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
            {/* { data.isValidUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
            </Animatable.View>
            } */}
            

            <Text style={[styles.text_footer, {
                color: "#000000",
                marginTop: 35
            }]}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color={colors.text}
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                    placeholderTextColor="#666666"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={[styles.textInput, {
                        color: '#000000'
                    }]}
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
            {/* { data.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
            </Animatable.View>
            } */}
            

            <TouchableOpacity>
                <Text style={{color: '#009387', marginTop:15}}>Forgot password?</Text>
            </TouchableOpacity>
            <View style={styles.button}>
            {islodingres === true ? (<Loading />):
                (<TouchableOpacity
                    style={styles.signIn}
                   onPress={() => {loginHandle()}}
                   //onPress={() => navigation.navigate('Parent')}
                >
                <LinearGradient
                    colors={['#00A1A0', '#00A1A0']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign In</Text>
                </LinearGradient>
                </TouchableOpacity>)}

                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#00A1A0'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        paddingHorizontal: 20,
        paddingBottom: 50,
        justifyContent:'center'
    },
    footer: {
        flex: 3,
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
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
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
    imagestyle: {
        alignItems:'center',
        width:150,
        height:65,
        marginTop:50,
        tintColor:'#FFF'
       },
  });
