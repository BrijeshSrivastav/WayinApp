 import axios from 'axios';
 export const homePageApi=async()=>{
   //alert(`${process.env.BASE_URL_ENV}"home"`)
return new Promise(async(resolve, reject)=>{
 await axios.get("https://askwayin.com/api/home").then(function ({data}){
     console.log(data, 'data');
       resolve(data);
    }).catch(function (error){
       reject(error);
    });
  });
 }

 
 //    await axios.get(url).then(res)=>{
    //     resolve(res);
    //    }
    //   }).catch((error)=>{
    //     reject(error)
    //   });