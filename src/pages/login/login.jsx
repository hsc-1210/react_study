import React from 'react'
import { Form, Input, Button, Checkbox,message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'
import "./css/login.less"
import logo from "./img/logo.png"
export default class Login extends React.Component{
  //表单提交成功回调
  onFinish = (values) => {
    if (values) message.info('正在请求登录')
    console.log('Received values of form: ', values);
  }
  //表单提交失败回调
  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }
  //某个onChange回调
  onValuesChange = (values)=>{
    console.log(values.target.value);
  }

  render(){
    return(
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo" width="30px" style={{float:"left",marginTop:"15px"}}/>
          <h1 style={{float:"left",marginLeft:"10px"}}>后台管理系统</h1>
        </header>
        <div style={{width:0,height:"50px"}}></div>
        <div className="login-content">
          <h1 style={{textAlign: 'center',fontSize: '20px',color:"#2dbab1"}}>用户登录</h1>
            <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            {/* 用户名输入框及antd 声明式验证 */}
            <Form.Item
              name="username"
              rules={[
                {
                  required:true,
                  message:"请输入用户名"
                },
                {
                  min:3,
                  max:6,
                  message:"用户名最少3位最大六位"
                },
                {
                  pattern: /^\w+$/,
                  message: "用户名只支持英文字母数字下划线"
                }
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            </Form.Item>
            {/* 密码输入框及自定义验证 */}
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: '请输入您的密码!',
                },
                {
                  validator: (_, value) =>{
                      if(value && value.length >= 6 && value.length<=10) {
                          return Promise.resolve()
                      }else{
                          return Promise.reject('密码长度必须是6~10位')
                      }
                  }
                }
              ]}
            >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="密码"
                />

            </Form.Item>
            {/* 条款声明 */}
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>已知条例</Checkbox>
                </Form.Item>

                <Link className="login-form-forgot"  to="">
                  忘记密码
                </Link>
            </Form.Item>
            {/* 登录按钮 */}
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
                </Button>
                Or <Link to="" >注册</Link>
            </Form.Item>
          
          </Form>
        </div> 
      </div>
    )
  }
}