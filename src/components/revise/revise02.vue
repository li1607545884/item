<template>
  <div id="revise01">
      <div class="zf"><i class="el-icon-house"></i>  >>  商品  >>  商品管理  >>  修改商品</div>
      <div>
        <div>商品名称:<input type="text" v-model="list.date"/></div>
        <div>分类:<input type="text" v-model="list.name"/></div>
        <div>品牌:<input type="text" v-model="list.address"/></div>
        <div>价格:<input type="text" v-model="list.pp"/></div>
      </div>
      <div>
        <button @click="bc()">保存</button>
      </div>
  </div>
</template>

<script>
export default {
  name:'revise02',
  data() {
    return {
      list:"",
      index:""
    }
  },
  mounted() {
    this.list = this.$route.params.list
    this.index = this.$route.params.index
    console.log(this.list)
  },
  methods: {
    bc(){
      this.$router.push({
        name:'classify',
        params:{
          list:this.list,
          index:this.index
        }
      })
    }
  },
}
</script>

<style scoped>
#revise01{
  padding: 20px 20px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: rgba(240, 244, 246, 1);
}
.zf{
  font-size: 12px;
  display: flex;
  align-items: center;
  color: #999;
}
.zf > i{
  font-size: 20px;
  margin-right: 8px;
}
#revise01 >>> .el-icon-house{
  color: #1989fa;
}
</style>