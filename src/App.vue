<template>
  <div id="app">
    <div class="zf">
      <Header></Header>
    </div>
    <div class="zfa"></div>
    <div class="zf1">
      <Tab-bar></Tab-bar>
    </div>
  </div>
</template>

<script>
import Header from "./views/Header"
import TabBar from "./views/tabbar"
  export default {
    name:'app',
    components:{
      Header,
      TabBar
    }
  }
</script>

<style scoped>
*{margin: 0;padding: 0;}
.zf{
  width: 100%;
  position: fixed;
  z-index: 111;
}
.zfa{
  height: 60px;
}
.zf1{
  height: 100%;
}
</style>