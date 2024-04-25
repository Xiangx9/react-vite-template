import React from "react";
// import { useState } from "react";

import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import imgLogo from "./logo.png";
import "./login.scss";
import { LoginType } from "@/common/ts/interface";

import { useNavigate } from "react-router-dom";

function Login() {
  // const [Name, setNamee] = useState("");
  // const [Passwords, setPasswords] = useState("");
  // 去home页面
  // const navigate = useNavigate();
  // const goDetail = (Name,Password) => {
  //   navigate(`/?name=${Name}&Password=${Password}`);
  // };

  // 创建路由钩子
  const navigate = useNavigate();

  const onFinish: FormProps<LoginType>["onFinish"] = async (values) => {

    // navigate(`/?name=${values.username}&Password=${values.password}`);
    // console.log("Success:", values);
  };

  const onFinishFailed: FormProps<LoginType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="P-login Center">
          {/* <img src={imgLogo} alt="" className="logo" /> */}
          <div className="B-login">
            <div className="ipt-con">
              <Form.Item<LoginType>
                name="username"
                label="账号"
                rules={[{ required: true, message: "请输入账号!" }]}
              >
                <Input placeholder="请输入账号" />
              </Form.Item>
              <Form.Item<LoginType>
                name="password"
                label="密码"
                rules={[{ required: true, message: "请输入密码!" }]}
              >
                <Input.Password placeholder="请输入密码" />
              </Form.Item>
              <Form.Item<LoginType>
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 0, span: 16 }}
              >
                <Checkbox>记住</Checkbox>
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 5, span: 10 }}>
                <Button htmlType="submit" type="primary" block={true}>
                  登录
                </Button>
              </Form.Item>
            </div>
            {/* <div className="ipt-con">
              <Input
                placeholder="账号"
                value={Name}
                onChange={(e) => {
                  setNamee(e.target.value);
                }}
              />
              <div className="ipt-con">
                <Input.Password
                  placeholder="密码"
                  value={Passwords}
                  onChange={(e) => {
                    setPasswords(e.target.value);
                  }}
                />
              </div>
            </div> */}
          </div>
        </div>
      </Form>
    </>
  );
}

export default Login;
