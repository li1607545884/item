<template>
  <div id="tabbar">
    <div class="zf">
      <el-row class="tac">
        <el-col>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="rgb(255, 208, 75)">
            <el-menu-item index="1">
              <router-link to='/staging' tag="div" slot="title">工作台</router-link>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <span>商品</span>
              </template>
              <el-menu-item-group>
                <router-link to='/manage' tag="div"><el-menu-item index="2-1">商品管理</el-menu-item></router-link>
                <router-link to='/publish' tag="div"><el-menu-item index="2-2">发布商品</el-menu-item></router-link>
                <router-link to='/classify' tag="div"><el-menu-item index="2-3">分类管理</el-menu-item></router-link>
                <router-link to='/brand' tag="div"><el-menu-item index="2-4">品牌管理</el-menu-item></router-link>
                <router-link to='/norms' tag="div"><el-menu-item index="2-5">规格管理</el-menu-item></router-link>
                <router-link to='/type' tag="div"><el-menu-item index="2-6">类型管理</el-menu-item></router-link>
                <router-link to='/information' tag="div"><el-menu-item index="2-7">商品咨询</el-menu-item></router-link>
                <router-link to='/appraise' tag="div"><el-menu-item index="2-8">商品评价</el-menu-item></router-link>
                <router-link to='/bestseller' tag="div"><el-menu-item index="2-9">热销商品</el-menu-item></router-link>
                <router-link to='/stock' tag="div"><el-menu-item index="2-10">库存预警</el-menu-item></router-link>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <span>订单</span>
              </template>
              <el-menu-item-group>
                <router-link to='/administer' tag="div"><el-menu-item index="3-1">订单管理</el-menu-item></router-link>
                <router-link to='/print' tag="div"><el-menu-item index="3-2">打印快递单</el-menu-item></router-link>
                <router-link to='/delivery' tag="div"><el-menu-item index="3-3">发货信息管理</el-menu-item></router-link>
                <router-link to='/retreat' tag="div"><el-menu-item index="3-4">退货/退款订单</el-menu-item></router-link>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <span>运营</span>
              </template>
              <el-menu-item-group>
                <router-link to='/admin' tag="div"><el-menu-item index="4-1">管理员</el-menu-item></router-link>
                <router-link to='/role' tag="div"><el-menu-item index="4-2">角色管理</el-menu-item></router-link>
                <router-link to='/notice' tag="div"><el-menu-item index="4-3">广告版位</el-menu-item></router-link>
                <router-link to='/manageads' tag="div"><el-menu-item index="4-4">广告管理</el-menu-item></router-link>
                <router-link to='/preferential' tag="div"><el-menu-item index="4-5">优惠券</el-menu-item></router-link>
                <router-link to='/service' tag="div"><el-menu-item index="4-6">在线客服</el-menu-item></router-link>
                <router-link to='/posters' tag="div"><el-menu-item index="4-7">首页海报</el-menu-item></router-link>
                <router-link to='/handle' tag="div"><el-menu-item index="4-8">操作系统日志</el-menu-item></router-link>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <span>用户</span>
              </template>
              <el-menu-item-group>
                <router-link to='/theuser' tag="div"><el-menu-item index="5-1">用户管理</el-menu-item></router-link>
                <router-link to='/grade' tag="div"><el-menu-item index="5-2">用户等级</el-menu-item></router-link>
                <router-link to='/record' tag="div"><el-menu-item index="5-3">数据字典</el-menu-item></router-link>
                <router-link to='/dictionarytype' tag="div"><el-menu-item index="5-4">字典类型</el-menu-item></router-link>
                <router-link to='/mail' tag="div"><el-menu-item index="5-5">站内信</el-menu-item></router-link>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <span>界面</span>
              </template>
              <el-menu-item-group>
                <router-link to='/column' tag="div"><el-menu-item index="6-1">栏目</el-menu-item></router-link>
                <router-link to='/article' tag="div"><el-menu-item index="6-2">文章</el-menu-item></router-link>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="7">
              <template slot="title">
                <span>设置</span>
              </template>
              <el-menu-item-group>
                <router-link to='/aaa' tag="div"><el-menu-item index="7-1">接口增删改查</el-menu-item></router-link>
                <el-menu-item index="7-2">基本设置</el-menu-item>
                <el-menu-item index="7-3">邮箱设置</el-menu-item>
                <el-menu-item index="7-4">单点登录设置</el-menu-item>
                <el-menu-item index="7-5">第三方登录设置</el-menu-item>
                <router-link to='/pay' tag="div"><el-menu-item index="7-6">支付插件</el-menu-item></router-link>
                <el-menu-item index="7-7">公众号设置</el-menu-item>
                <router-link to='/distribution' tag="div"><el-menu-item index="7-8">配送方式</el-menu-item></router-link>
                <el-menu-item index="7-9">API接口账户管理</el-menu-item>
                <el-menu-item index="7-10">API接口信息</el-menu-item>
                <el-menu-item index="7-11">API接口调用记录</el-menu-item>
                <el-menu-item index="7-12">FTP管理</el-menu-item>
                <el-menu-item index="7-13">物流公司</el-menu-item>
                <el-menu-item index="7-14">区域管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="8">
              <span slot="title"><router-link to='youzhifang' tag='div'>优职坊</router-link></span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="zfa"></div>
    <div class="zf1">
      <keep-alive include="manage">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
.zf{
  width: 207px;
  position: fixed;
  height: 100%;
  background-color: rgb(84, 92, 100);
  overflow: scroll;
  width: 16.2%;
}
.zf::-webkit-scrollbar {
  display: none;
}
.zfa{
  width: 16.2%;
  float: left;
  height: 100px;
}
.zf1{
  float: left;
  width: 83.8%;
}
.router-link-active{
  color: rgb(255, 208, 75);
}
</style>