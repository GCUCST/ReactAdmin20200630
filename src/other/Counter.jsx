import store from './store'
import React from 'react';
export default  function Counter(props){
    let state = store.getState()
    return (
      <div className="index">
        <h1 >值：{state.num }</h1>
        <button onClick={add}>加一</button>&nbsp;&nbsp;&nbsp;
        <button onClick={decr}>减一</button>
      </div>
    )
  }

  function add(){
    //通过仓库的方法dispath进行修改数据
    store.dispatch({type:'add'})
    console.log(store.getState())
  }
  //调用dispatch执行,传入对应的action.type，指明执行的方法
  function decr(){
    //通过仓库的方法dispath进行修改数据
    store.dispatch({type:'decr'})
    console.log(store.getState())
  }