import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import storageUtils from './utils/storageUtils'
import memoryUtils from './utils/memoryUtils'
import Counter from './other/Counter'
import store from './other/store'

//读取本地存储的user到内存中
const user = storageUtils.getUser()
memoryUtils.user = user

ReactDOM.render(
    <App/>,document.getElementById('root')
)
// store.subscribe(()=>{
//     ReactDOM.render(
//       <Counter />,
//        document.getElementById('root')
//      );
//   })