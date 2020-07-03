import React, { Component } from "react";
import { Form, Select, Input } from "antd";
import PropsTypes from 'prop-types'
const Item = Form.Item;
const Option = Select.Option;

class AddForm extends Component {



static propTypes = {
    setForm:PropsTypes.func.isRequired, //form
    categorys:PropsTypes.array.isRequired,
    parentId:PropsTypes.string.isRequired
}

componentWillMount(){
    this.props.setForm(this.props.form)
}

  render() {
    const { getFieldDecorator } = this.props.form;
    const {categorys,parentId} = this.props
    return (
      <Form>
        <Item>
          {
          getFieldDecorator("parentId", {
            initialValue: parentId,
           
          })(
            <Select>
              <Option value="0">一级分类</Option>
              {
                  categorys.map(item=><Option key={item._id} value={item._id}>{item.name}</Option>)
              }
            </Select>
          )}
        </Item>
        <Item>
          {getFieldDecorator("categoryName", {
            initialValue: "",
            rules:[
                {required:true,message:'分类名称输入'}
            ]
          })(<Input placeholder="请输入分类名称" />)}
        </Item>
      </Form>
    );
  }
}

export default Form.create()(AddForm);
