import React, { Component } from "react";
import RichTextEditor from './rich-text-editor'
import { Card, Select, Input, Button, Cascader, Icon, Form } from "antd";
import LinkButton from "../../components/link-button";
const { Item } = Form;
const { TextArea } = Input;

const options = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    isLeaf: false,
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    isLeaf: false,
  },
];

class ProductAddUpdate extends Component {

  constructor(props){
    super(props)
    this.editor = React.createRef()
  }


  state = {
    options,
  };

  submit = () => {
    //进行表单验证
    this.props.form.validateFields((error, vales) => {
      if (!error) {
        alert("发送请求。。。");

        const detail = this.editor.current.getDetail()
        console.log(detail)
      }
    });
  };
  //自定义验证函数
  validatePrice = (rule, value, callback) => {
    if (value < 0) {
      //不带参数就是通过，带了就是失败
      callback("钱太少了。。");
    } else {
      callback();
    }
  };

  onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  };

  loadData = (selectedOptions) => {
    const targetOption = selectedOptions[0];
    targetOption.loading = true;

    // load options lazily
    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = [
        {
          label: `${targetOption.label} Dynamic 1`,
          value: "dynamic1",
          children: [
            {
              label: `${targetOption.label} Dynamic 3`,
              value: "dynamic3",
            },
          ],
        },
        {
          label: `${targetOption.label} Dynamic 2`,
          value: "dynamic2",
        },
      ];
      this.setState({
        options: [...this.state.options],
      });
    }, 1000);
  };

  fufun(num){
    console.log('我是父组件，我收到：'+num)
  }
  render() {
    const formItemLayout = {
      labelCol: { span: 2 },
      wrapperCol: { span: 8 },
    };

    const title = (
      <span>
        <LinkButton>
          <Icon type="arrow-left" />
        </LinkButton>
        <span>添加商品</span>
      </span>
    );

    const { getFieldDecorator } = this.props.form;

    return (


      <Card title={title}>
        <Form {...formItemLayout}>
          <Item label="商品名称:" style={{ fontSize: 24 }}>
            {getFieldDecorator("name", {
              initialValue: "",
              rules: [{ required: true, message: "必须输入！" }],
            })(<Input placeholder="请输入商品名称" />)}
          </Item>
          <Item label="商品描述:" style={{ fontSize: 24 }}>
            {getFieldDecorator("desc", {
              initialValue: "",
              rules: [{ required: true, message: "必须输入！" }],
            })(<TextArea placeholder="请输入商品描述" />)}
          </Item>
          <Item label="商品价格:" style={{ fontSize: 24 }}>
            {getFieldDecorator("price", {
              initialValue: "",
              rules: [
                { required: true, message: "必须输入！" },
                {
                  validator: this.validatePrice,
                },
              ],
            })(
              <Input
                type="number"
                placeholder="请输入商品价格"
                addonAfter="元"
              />
            )}
          </Item>
          <Item label="商品分类">
            <Cascader
              options={this.state.options}
              loadData={this.loadData}
              onChange={this.onChange}
              changeOnSelect
            />
          </Item>



          <Item label="商品详情" labelCol= { {span:2}} wrapperCol= { {span: 20} }>
            <RichTextEditor 
            // detail={this.detail}
            fufun={this.fufun} ref={this.editor}/>
          </Item>

          <Item>
            <Button
              type="primary"
              onClick={() => {
                this.submit();
              }}
            >
              提交
            </Button>
          </Item>

        </Form>
      </Card>
    );
  }
}

export default Form.create()(ProductAddUpdate);
