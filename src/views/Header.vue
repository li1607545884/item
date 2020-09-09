<template>
  <div id="Header">
    <div class="zf">
      <div>商城后台管理系统</div>
      <div>单店版</div>
    </div>
    <div class="zf1">
      <div>
        <img src="../assets/img/1.png"/>
        <div>Test</div>
      </div>
      <div><i class="el-icon-s-tools"></i></div>
      <div @click="tc()" class="zf2">
        <i class="el-icon-close"></i>
        <div>退出</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Header',
  methods: {
    tc(){
      this.$confirm('确定退出吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '退出成功!',
          });
          this.$router.push({
            path:'/dl'
          })
        }).catch(() => {
                    
        });
    }
  },
}
</script>

<style scoped>
*{margin: 0;padding: 0;}
#Header{
  width: 100%;
  height: 60px;
  align-items: center;
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 18px;
  box-sizing: border-box;
  box-shadow:0px 0.5px 2px 0px rgba(0, 0, 0, 0.5)
}
.zf{
  display: flex;
}
.zf>div:nth-child(1){
  font-size: 22px;
  font-weight: bold;
}
.zf>div:nth-child(2){
  background: rgba(0, 174, 255, 1);
  height: 20px;
  color: #fff;
  border-radius: 10px;
  font-size: 12px;
  padding: 2px 8px;
  margin-top: 4px;
  margin-left: 25px;
}
.zf1{
  display: flex;
}
.zf1>div{
  margin-right: 20px;
}
.zf1>div:nth-child(1){
  display: flex;
  line-height: 60px;
  font-size: 13px;
}
.zf1>div:nth-child(1) img{
  width: 45px;
  height: 50px;
  margin-top: 5px;
  margin-right: 10px;
}
.zf1>div:nth-child(2){
  line-height: 60px;
  font-size: 25px;
}
.zf1>div:nth-child(3){
  display: flex;
  line-height: 60px;
}
.zf1>div:nth-child(3) i:nth-child(1){
  margin-top: 18px;
  font-size: 25px;
  margin-right: 6px;
}
.zf1>div:nth-child(3) div:nth-child(2){
  font-size: 14px;
  margin-right: 6px;
}
.zf2{
  cursor: pointer;
}
</style>