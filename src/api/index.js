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

//获取分类列表
export const reqCategories = (parentId)=>{
    let param = new URLSearchParams();
    param.append("parentId",parentId)
    return ajax(BASE+'/manage/category/list',param,'POST')
}

//添加分类
export const reqAddCategory = (parentId,categoryName)=>{
    let param = new URLSearchParams();
    param.append("parentId",parentId)
    param.append("categoryName",categoryName)
    return ajax(BASE+'/manage/category/add',param,'POST')
}

//更新分类
export const reqUpdateCategory = (categoryId,categoryName)=>{
    let param = new URLSearchParams();
    param.append("categoryId",categoryId)
    param.append("categoryName",categoryName)
    return ajax(BASE+'/manage/category/update',param,'POST')
}

//获取商品
export const reqProducts = (pageNum,pageSize)=>{
    let param = new URLSearchParams();
    param.append("pageNum",pageNum)
    param.append("pageSize",pageSize)
    return ajax(BASE+'/manage/product/list',param)
}

