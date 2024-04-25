import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, theme } from "antd";

import "./home.scss";

const { useToken } = theme;

function Home() {
  // 创建路由钩子
  const navigate = useNavigate();

  // 获取Design Token
  const { token } = useToken();

  return (
    <div className="P-home" style={{background: token.colorBgContainer}}>
      <h1 style={{color: token.colorText}}>Home Page</h1>
      <div className="ipt-con">
        <Button >返回登录</Button>
      </div>
    </div>
  );
}

export default Home;
