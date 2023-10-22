 import axios from 'axios';
 import { BASE_URL_ENV, ASSETS_DIR } from '@env';
 export const homePageApi=async()=>{
return new Promise(async(resolve, reject)=>{
 await axios.get(`${BASE_URL_ENV}home`).then(function ({data}){
     console.log(data, 'data');
       resolve(data);
    }).catch(function (error){
       reject(error);
    });
  });
 }

 export var usernam = "";

 export const registerPost=async(param)=>{
   //alert(`${process.env.BASE_URL_ENV}"home"`)
return new Promise(async(resolve, reject)=>{
 await axios.post(`${BASE_URL_ENV}user/registerapi`,param).then(function ({data}){
     console.log(data, 'data');
     //alert(JSON.stringify(data));
       resolve(data);
    }).catch(function (error){
       reject(error);
    });
  });
 }
 

 export const loginPost=async(param)=>{
   //alert(`${process.env.BASE_URL_ENV}"home"`)
return new Promise(async(resolve, reject)=>{
 await axios.post(`${BASE_URL_ENV}user/login`,param).then(function ({data}){
     console.log(data, 'data');
     //alert(JSON.stringify(data));
       resolve(data);
    }).catch(function (error){
       reject(error);
    });
  });
 }