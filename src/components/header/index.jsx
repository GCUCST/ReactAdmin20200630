import React, { Component } from "react";
import "./index.less";
import { formatDate } from "../../utils/dateUtils";
import memoryUtils from "../../utils/memoryUtils";
import { withRouter } from "react-router-dom";
import menuList from "../../config/menuConfig";
import storageUtils from '../../utils/storageUtils'
import { Modal } from 'antd';
import LinkButton from "../link-button";
// import 
const { confirm } = Modal;
class Header extends Component {
  state = {
    currentTime: formatDate(Date.now()),
    dayPictureUrl: "https://www.baidu.com/img/flexible/logo/pc/result.png",
    weather: "晴",
  };

  getTime = () => {
    this.interval_id = setInterval(() => {
      this.setState({
        currentTime: formatDate(Date.now()),
      });
    }, 1000);
  };
  componentDidMount() {
    this.getTime();
  }
  logout = ()=>{
    confirm({
      title: 'Do you Want to logout?',
      content: 'Some descriptions',
      //箭头函数使用外部this
      onOk:()=>{
        console.log('删除保存的user数据');
        storageUtils.removeUser();
        memoryUtils.user = {};
        this.props.history.replace('/login')
      }
    });
  }

  //获取标题
  getTitle = () => {
    const path = this.props.location.pathname;
    let title
    menuList.forEach(item=>{
      if(item.key===path){
        title = item.title
      }else{
        if(item.children){
          //在子item中查找
          const citem = item.children.find(citem=>citem.key===path)
          if(citem){
            title = citem.title
          }
        }
      }
    })
    return title;
  };

  componentWillUnmount(){
    clearInterval(this.interval_id)
  }

  render() {
    const { currentTime, dayPictureUrl, weather } = this.state;
    const user = memoryUtils.user;
    //获取本地的标题
    const title = this.getTitle()
    return (
      <div className="header">
        <div className="header-top">
          <span>欢迎，{user.username}</span>
          <LinkButton onClick={this.logout}>退出</LinkButton>
        </div>
        <div className="header-bottom">
    <div className="header-bottom-left">{title}</div>
          <div className="header-bottom-right">
            <span>{currentTime}</span>
            <img alt="天气" src={dayPictureUrl} />
            <span>{weather}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
