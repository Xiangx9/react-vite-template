import React, { lazy } from "react";
import { RouteObject, Navigate } from "react-router-dom";

const Home = lazy(() => import("@/pages/home/index"));
const Login = lazy(() => import("@/pages/login/index"));
const Account = lazy(() => import("@/pages/account"));

const List = lazy(() => import("@/pages/List/index"));

// 引入Entry框架页面
const Entry = lazy(() => import("@/pages/entry"));

const Router: RouteObject[] = [
  // 对精确匹配"/login"，跳转Login页面
  {
    path: "/login",
    element: <Login />,
  },
  {
    // 未匹配"/login"，全部进入到entry路由
    path: "/",
    element: <Entry />,
    // 定义entry二级路由
    children: [
      {
        // 如果URL没有"路由"，跳转Home页面
        path: "/",
        element: <Navigate to="/home" />,
      },
      {
        // 精确匹配"/home"，跳转Home页面
        path: "/home",
        element: <Home />,
      },
      {
        // 精确匹配"/account"，跳转Account页面
        path: "/account/:title/:info",
        element: <Account />,
      },
      {
        // 未匹配，跳转Login页面
        path: "*",
        element: <Navigate to="/login" />,
      },
    ],
  },
];

export default Router;
