import React, { Component } from "react";
import { Card, Icon, List } from "antd";
const Item = List.Item;


export default class ProductDetail extends Component {
  render() {
    const title = (
      <span>
        <Icon type="arrow-left" style={{color:'green',marginRight:"15px"}}
        onClick={()=>{
            this.props.history.goBack()
        }}
        ></Icon>
        <span>商品详情</span>
      </span>
    );

    return (
      <Card title={title} className="product-detail">

        <List>
          <Item>
            <span className="left">商品名称：</span>
            <span>北京烤鸭</span>
          </Item>
        </List>
      </Card>
    );
  }
}
