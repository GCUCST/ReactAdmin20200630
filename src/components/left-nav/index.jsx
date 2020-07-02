import React, { Component } from "react";
import "./index.less";
import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";

import menuList from '../../config/menuConfig'
import { Menu, Icon } from "antd";

const { SubMenu } = Menu;

export default class LeftNav extends Component {

  getMenuNodes = (menuList)=>{
    return menuList.map(item=>{
        if(!item.children){
            return (
              <Menu.Item key={item.key}>
              <Link to={item.key}>
                <span>
                  <Icon type={item.icon} />
                   <span>{item.title}</span>
                </span>
                </Link>
              </Menu.Item>
            )
        }else{
          return(
            <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon}/>
                <span>{item.title}</span>
              </span>
            }
          >
            {this.getMenuNodes(item.children)}
          </SubMenu>

          )
        }

    })
  }

  render() {
    return (
      <div className="left-nav">
        <Link to="/" className="left-nav-header">
          <img src={logo} alt="" />
          <h1>学习后台</h1>
        </Link>

        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          //   inlineCollapsed={this.state.collapsed}
        >
          {/* <Menu.Item key="1">
            <Link to="/home">
              <Icon type="pie-chart" />
              <span>首页</span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>商品</span>
              </span>
            }
          >
            <Menu.Item key="5">
            <Link to="/category">
              <span>
                <Icon type="mail" />
                <span>品类管理</span>
              </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="6">
            <Link to="/product">
              <span>
                <Icon type="mail" />
                <span>商品管理</span>
              </span>
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="2">
            <Link to="/user">
              <Icon type="pie-chart" />
              <span>用户管理</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/role">
              <Icon type="pie-chart" />
              <span>角色管理</span>
            </Link>
          </Menu.Item> */
          }
          {
            this.getMenuNodes(menuList)
          }




        </Menu>
      </div>
    );
  }
}
