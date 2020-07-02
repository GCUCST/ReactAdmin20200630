import axios from 'axios'
import {message} from 'antd'

//封装发送请求的方法
// 封装的axios库
//  函数返回值是promise对象
//  1.优化：统一处理亲环球异常
//          在外层包一个自己创建 的promise对象
//          请求出错不去reject，直接显示错误提示

export default function ajax(url,data={},method='GET'){

    return new Promise((resolve,reject)=>{
        let promise
        //1.执行异步ajax请求
        if(method ==='GET'){
            promise =  axios.get(url,{params:data})
        }else{
            promise =  axios.post(url,data)
        }

        //2.成功？调用resolve(value)
        promise.then(response=>{
            resolve(response.data)
        })
        //3.失败？不调用reject（reason），提示异常信息
        .catch(error=>{
            message.error('请求错误'+error.message)
        })
    })
        // if(method ==='GET'){
        //     return  axios.get(url,{params:data})
        // }else{
        //     return  axios.post(url,data)
        // }
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