import React, { Component } from "react";
import { Form, Select, Input } from "antd";
import PropsTypes from 'prop-types'
const Item = Form.Item;
class UpdateForm extends Component {
  static propsTypes = {
    categoryName:PropsTypes.string.isRequired,
    setForm:PropsTypes.func.isRequired
  }
  componentWillMount(){
    //将form对象通过setForm（）传递给父组件
    this.props.setForm(this.props.form)
  }


  render() {
    const {categoryName} = this.props
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        <Item>
          {getFieldDecorator("categoryName", {
            initialValue: categoryName,
            rules:[
              {required:true,message:'分类名称输入'}
            ]
          })(<Input placeholder="请输入分类名称" />)}
        </Item>
      </Form>
    );
  }
}

export default Form.create()(UpdateForm);
