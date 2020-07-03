import React, { Component } from "react";
import { Form, Select, Input } from "antd";
import PropsTypes from 'prop-types'
const Item = Form.Item;
class UpdateForm extends Component {
  static propsTypes = {
    categoryName:PropsTypes.string.isRequired
  }

  render() {
    const {categoryName} = this.props
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        <Item>
          {getFieldDecorator("categoryName", {
            initialValue: categoryName,
          })(<Input placeholder="请输入分类名称" />)}
        </Item>
      </Form>
    );
  }
}

export default Form.create()(UpdateForm);
