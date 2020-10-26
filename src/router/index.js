import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/index/index"),
    children: [
      {
        path: "/user",
        name: "User",
        component: () => import("../views/user/index")
      },
      //安全设置  - 首页                                                  
      {
        path: "/safe",
        name: "Safe",
        component: () => import("../views/safe/index")
      },
      {
        path: "/password",//修改登录密码
        name: "Password",
        component: () => import("../views/safe/password")
      },
      {
        path: "/setpassword",//设置资金密码
        name: "SetPassword",
        component: () => import("../views/safe/SetPassword")
      },      
      {
        path: "/phone", //绑定手机号
        name: "Phone",
        component: () => import("../views/safe/phone")
      },
      {
        path: "/bankcard",//绑定银行卡
        name: "BankCard",
        component: () => import("../views/safe/BankCard")
      },
      
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
