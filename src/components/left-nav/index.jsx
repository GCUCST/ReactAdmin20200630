import React, { Component } from "react";
import "./index.less";
import logo from "../../assets/images/logo.jpg";
import { Link, withRouter } from "react-router-dom";

import menuList from '../../config/menuConfig'
import { Menu, Icon } from "antd";

const { SubMenu } = Menu;

 class LeftNav extends Component {

  //使用map
  getMenuNodes_map = (menuList)=>{
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
  //使用reduce()
  getMenuNodes = (menuList)=>{

    const path = this.props.location.pathname

    return menuList.reduce((pre,item)=>{
        //向pre添加item
        if(!item.children){
        pre.push((
              <Menu.Item key={item.key}>
              <Link to={item.key}>
                <span>
                  <Icon type={item.icon} />
                   <span>{item.title}</span>
                </span>
                </Link>
              </Menu.Item>
        ))
      }
      else{
       const citem =
        item.children.find(citem=>citem.key === path)
        //往组件传入一个openKey
        if(citem)
        this.openKey = item.key

        pre.push(
          (
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
        )
      }
      return pre;


    },[])
  }

  //第一次render之前执行一次
  componentWillMount(){
    this.menuNodes = this.getMenuNodes(menuList)
  }

  render() {

    //要点，非路由组件变成路由组件（withRouter）
    const path = this.props.location.pathname
    const openKey = this.openKey

    return (
      <div className="left-nav">
        <Link to="/" className="left-nav-header">
          <img src={logo} alt="" />
          <h1>学习后台</h1>
        </Link>

        <Menu
          selectedKeys={[path]}
          defaultOpenKeys={[openKey]}
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
            // this.getMenuNodes(menuList)
            this.menuNodes
          }




        </Menu>
      </div>
    );
  }
}


export default withRouter(LeftNav)