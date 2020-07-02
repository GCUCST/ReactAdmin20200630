import React, { Component } from "react";
import "./index.less";
import { formatDate } from "../../utils/dateUtils";
import memoryUtils from "../../utils/memoryUtils";
export default class Header extends Component {
  state = {
    currentTime: formatDate(Date.now()),
    dayPictureUrl: "https://www.baidu.com/img/flexible/logo/pc/result.png",
    weather: "晴",
  };

  getTime=()=>{
    setInterval(()=>{
        this.setState({
          currentTime: formatDate(Date.now())
        })
    },1000)
  }
  componentDidMount() {
        this.getTime()
  }

  render() {
    const { currentTime, dayPictureUrl, weather } = this.state;
    const user = memoryUtils.user;
    return (
      <div className="header">
        <div className="header-top">
          <span>欢迎，{user.username}</span>
          <a href="www#">退出</a>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">首页</div>
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
