import React, { Component } from "react";
import memoryUtils from "../../utils/memoryUtils";
import { Redirect, Route,Switch } from "react-router-dom";
import { Layout } from "antd";
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'

import Home from '../home/home'
import Category from '../category/category'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'

const {  Footer, Sider, Content } = Layout;
export default class Admin extends Component {
  render() {
    const user = memoryUtils.user;
    //如果内存中没有user（还没登陆）
    if (!user || !user._id) {
      //跳转去登录界面（render()）
      console.log("admin() render")
      return <Redirect to="/login" />;
    }

    return (
      <Layout style={{height:'100%'}}>
        <Sider>
            <LeftNav/>
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content style={{margin:20,backgroundColor:"#fff"}}>
              <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/category" component={Category}/>
                <Route path="/product" component={Product}/>
                <Route path="/role" component={Role}/>
                <Route path="/user" component={User}/>
                <Route path="/charts/bar" component={Bar}/>
                <Route path="/charts/line" component={Line}/>
                <Route path="/charts/pie" component={Pie}/>
                <Redirect  to="/home"/>
              </Switch>
          </Content>
          <Footer style={{textAlign:"center"}}>react学习之路</Footer>
        </Layout>
      </Layout>
    );
  }
}
