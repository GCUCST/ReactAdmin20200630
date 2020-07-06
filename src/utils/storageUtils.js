//用于保存数据在local的工具
const USER_KEY = "user_key"

export default {
    //保存
    saveUser(user){
        localStorage.setItem(USER_KEY,JSON.stringify(user))
    },
    //读取
    getUser(){
        return JSON.parse(localStorage.getItem(USER_KEY)||'{}')
    },
    //删除
    removeUser(){
        localStorage.removeItem(USER_KEY)
    }

}