import axios from 'axios'
// import {message} from 'antd'

//封装发送请求的方法

export default function ajax(url,data={},method='GET'){
        if(method ==='GET'){
            return  axios.get(url,{params:data})
        }else{
            return  axios.post(url,data)
        }

}

//请求登录接口
// ajax('/login',{username:'Tome',password:'12345'},'POST').then()
//添加用户
// ajax('/manage/user/add',{username:'Tome',password:'12345',phone:'15211111111'},'POST').then()


// export default function ajax(url,data={},method='GET'){
//     return new Promise(function(resolve,reject){
//         let promise
//         if(method ==='GET'){
//             promise = axios.get(url,{params:data})
//         }else{
//             promise = axios.post(url,data)
//         }
//         promise.then(response=>{
//             resolve(response.data)
//         }).catch(error=>{
//             message.error('请求错误'+error.message)
//         })

//     })
// }