import React, { Component } from "react";
import { Card, Select, Input, Button, Icon, Table } from "antd";
import LinkButton from "../../components/link-button";
import {reqProducts} from '../../api/index'
import {PAGE_SIZE} from '../../utils/constants'
const Option = Select.Option;

export default class ProductHome extends Component {
  state = {
    total:0,
    products: [
        {
            status:1,
            _id:'001',
            name:"维生素",
            desc:"没有描述",
            price:1230
        },
        {
            status:0,
            _id:'002',
            name:"维生素22",
            desc:"没有描述222",
            price:12302
        },
        {
            status:1,
            _id:'00145',
            name:"维生素445",
            desc:"没有描述",
            price:1230
        },
        {
            status:0,
            _id:'002433',
            name:"维生素22443",
            desc:"没有描述222",
            price:12302
        }
    ], //商品数组/
  };

  getProducts=async (pageNum)=>{
      const result  = await reqProducts(pageNum,PAGE_SIZE)
      console.log("====没有写后台数据，所以本方法无效。（有接口，无实现）===")
      if(result.status===0){
          const {total,list} = result.data
          this.setState({
              total,
              products:list
          })
      }

  }


  componentDidMount(){
        this.getProducts(1);
  }



  //初始化表格
  initColumns = () => {
    this.columns = [
      { title: "商品名称", dataIndex: "name" },
      { title: "商品描述", dataIndex: "desc" },
      { title: "商品价格", dataIndex: "price", render: (price) => "$" + price }, //当前指定price所以传入的是对应的属性值
      {
          width:100,
        title: "商品状态",
        dataIndex: "status",
        render: (status) => {
          return (
            <span>
              <Button type="primary">下架</Button>
              <span>在售</span>
            </span>
          );
        },
      },
      {
        title: "操作",
        render: (status) => {
          return (
            <span>
              <LinkButton>详情</LinkButton>
              <LinkButton>修改</LinkButton>
            </span>
          );
        },
      },
    ];
  };

  componentWillMount() {
    this.initColumns();
  }

  render() {
    const { products,total } = this.state;

    const title = (
      <span>
        <Select value="1" style={{ width: "150px" }}>
          <Option value="1">按名称搜索</Option>
          <Option value="2">按描述搜索</Option>
        </Select>
        <Input
          placeholder="关键字"
          style={{ width: "150px", margin: "15px 15px" }}
        />
        <Button type="primary">搜索</Button>
      </span>
    );
    const extra = (
      <Button type="primary">
        <Icon type="plus"></Icon>
      </Button>
    );

    return (
      <Card title={title} extra={extra}>
        <Table
          dataSource={products}
          bordered
          rowKey="_id"
          columns={this.columns}
          pagination={{total,defaultPageSize:PAGE_SIZE,showQuickJumper:true,
            onChange:(pageNum)=>{
                this.getProducts(pageNum)
          }}}
        ></Table>
      </Card>
    );
  }
}
