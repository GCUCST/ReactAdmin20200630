import React, { Component } from "react";
import "./login.less";
import logo from "../../assets/images/logo.jpg";
import { Form, Icon, Input, Button, message } from "antd";
import {reqLogin} from '../../api/index'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'
import {Redirect} from 'react-router-dom'
const Item = Form.Item;
class Login extends Component {

    
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields(async(err, values) => {
      if (!err) {
        // console.log('没毛病，可以提交请求。', values);
        const {username,password} = values;
          const result = await reqLogin(username,password);
          console.log("请求成功：",result)
          if(result.status===0){
            message.success("登录成功！")
            //保存用户
            const user =  result.data
            memoryUtils.user = user
            storageUtils.saveUser(user)

            //页面跳转(使用replace，就不能返回来了)
            this.props.history.replace("/")
            


          }else{ //登录失败的提示信息
            message.error(result.msg)
          }
        // reqLogin(username,password)
        // .then(response=>{
        //   console.log('成功',response.data)
        // }).catch(error=>{
        //   console.log('失败',error)
        // })
      }else{
          console.log("校验失败！")
      }
    });
    //手动获取值
    // const form = this.props.form;
    // const values = form.getFieldsValue();
    // console.log("handleSubmit()", values);

  };

//自定义验证密码
  validatePwd =(rule, value, callback)=>{
    //写判断
    if(!value){
        callback("密码空的！！")
    }else if(value.length<4){
        callback("密码<4！！")
    }else if(value.length>12){
        callback("密码>12！！")
    }else if(!/^[a-zA-Z0-9]+$/.test(value)){
        callback("密码！！")
    }
    console.log("validatePwd()通过",value)
    callback() //验证通过
    // callback("失败提示的文本") //验证失败
  }


  render() {
    
    //如果用户已经登录，自动跳转到管理界面
   const user =  memoryUtils.user
    if(user._id){
      console.log("login() render()")
      return <Redirect to="/"/>
    }

    //传入的强大对象
    const form = this.props.form;
    const { getFieldDecorator } = form;

    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="" />
          <h1>React后台管理系统</h1>
        </header>
        <section className="login-content">
          <h2>用户登录</h2>
          <div>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Item>
                {getFieldDecorator(
                  "username",
                  {
                    rules: [
                        { required: true, message: 'Please input your username!' },
                        { min: 4, message: 'Please > 4 !' },
                        { max: 12, message: 'Please < 12 !' },
                        { pattern: /^[a-zA-Z0-9]+$/, message: 'Please!' },
                    ],
                  }
                )(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Username"
                  />
                )}
              </Item>

              <Item>
                {getFieldDecorator(
                  "password",
                  {
                      rules:[
                          {validator : this.validatePwd}
                      ]
                  }
                )(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="Password"
                    placeholder="Password"
                  />
                )}
              </Item>
              <Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
              </Item>
            </Form>
          </div>
        </section>
      </div>
    );
  }
}

/*****  重点 1.高阶函数 
 *              1)接收函数类型的参数
 *              2）返回值是函数
 *           2.例子：定时器：setTimeout()/setInterval()
 *                  Promise:Promise(()=>{}) then(value=>{},reason=>{})
 *                  遍历：forEach()/filter/map/reduce/find()/findIndex
 *                  函数对象的bind()方法
 *             3.高阶函数更新动态，根据有拓展性
 *              
 * 
 *          2.高阶组件  
 *              本质是一个函数
 *                接收一个组件，返回一个新的组件（包装组件），
 *      包装组件回向被包装组件传入特定属性。
 *      作用：拓展组件的功能
/**
 *      包装Form组件生成一个新的组件：Form(Login)
 *        新组件向Form组件传递一个强大的对象属性：from
 */


 /**
  * async 和 await
  * 1.作用？
  *   简化promise对象的使用，不再使用then()来指定成功/失败的回调函数。
  *   以同步编码方式实现异步流程
  * 
  * 2.那里写await?
  *   在返回promise的表达式左侧写await:不想要promise,想要promise异步执行成功的value数据
  * 3.哪里写async?
  *   await所在函数（最近的）左侧写async
  * 
  */

const WrapLogin = Form.create()(Login);
export default WrapLogin;
