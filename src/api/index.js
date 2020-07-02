import ajax from './ajax'

// const BASE = 'http://localhost:8080'
const BASE = ''
//根据接口文档定义接口函数
export const reqLogin = (username,password)=>{
    let param = new URLSearchParams();
    param.append("username",username)
    param.append("password",password)
    return ajax(BASE+'/login',param,'POST')
}

export const reqAddUser = (user)=>ajax(BASE+'/manage/add/user',user,'POST')
