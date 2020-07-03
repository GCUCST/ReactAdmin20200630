import React, { Component } from "react";
import { Card, Table, Button, Icon,message } from "antd";
import LinkButton from "../../components/link-button";
import {
  reqCategories,
  reqAddCategory,
  reqUpdateCategory,
} from "../../api/index";
export default class Category extends Component {
  state = {
    loading:false,
    categorys: [], //一级分类列表
  };

  //初始化table列数组
  initColumns = () => {
    this.columns = [
      {
        title: "分类名称",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "操作",
        width: 300,
        render: () => (
          //返回需要显示的界面标签
          <div>
            <LinkButton>修改分类</LinkButton>
            <LinkButton>查看子分类</LinkButton>
          </div>
        ),
      },
    ];
  };

  getCategorys = async () => {

    //请求前loading
    this.setState({loading:true})
    const result = await reqCategories("0");
    console.log(result)
    if(result.status===1){
        message.error(result.msg)
    }else{
        const categorys = result.data;
        this.setState({
            categorys
        })
    }
    this.setState({loading:false})

  };
  componentWillMount() {
    this.initColumns();
  }

  //发请求
  componentDidMount() {
    this.getCategorys();
  }

  render() {
    //读取状态数据
    const { categorys } = this.state;

    //左侧的标题
    const title = "一级分类列表";
    //右侧
    const extra = (
      <Button type="primary">
        <Icon type="plus" />
        添加
      </Button>
    );

    return (
      <div>
        <Card title={title} extra={extra}>
          <Table
            loading={this.state.loading}
            bordered
            rowKey="_id"
            dataSource={categorys}
            columns={this.columns}
            pagination={{defaultPageSize:5,showQuickJumper:true}}
          />
          ;
        </Card>
      </div>
    );
  }
}
