<template>
  <div id="staging">
    <div class="zf"><i class="el-icon-house"></i>  >>  工作台</div>
    <div class="zf1">
      <div class="zf2">
        <div><img src="../assets/img/2.png"/></div>
        <div>
          <div>0</div>
          <div>今日销售额</div>
        </div>
      </div>
      <div class="zf3">
        <div><img src="../assets/img/3.png"/></div>
        <div>
          <div>0</div>
          <div>今日订单数</div>
        </div>
      </div>
      <div class="zf4">
        <div><img src="../assets/img/4.png"/></div>
        <div>
          <div>50</div>
          <div>出售商品数</div>
        </div>
      </div>
      <div class="zf5">
        <div><img src="../assets/img/5.png"/></div>
        <div>
          <div>599</div>
          <div>总会员数</div>
        </div>
      </div>
    </div>
    <div class="zf6">
      <div class="zf7">
        <div class="zf7a">
          <div>待处理</div>
          <div class="zf8">
            <div>
              <div><img src="../assets/img/6.png"/></div>
              <div>待发货</div>
              <div>1057</div>
            </div>
            <div>
              <div><img src="../assets/img/7.png"/></div>
              <div>待付款</div>
              <div>1022</div>
            </div>
            <div>
              <div><img src="../assets/img/8.png"/></div>
              <div>退货/退款</div>
              <div>13</div>
            </div>
            <div>
              <div><img src="../assets/img/9.png"/></div>
              <div>退货/退款</div>
              <div>1</div>
            </div>
            <div>
              <div><img src="../assets/img/10.png"/></div>
              <div>商品咨询</div>
              <div>68</div>
            </div>
          </div>
        </div>
        <div class="zf7a">
          <div>常用菜单</div>
          <div class="zf8">
            <div>
              <div><img src="../assets/img/11.png"/></div>
              <div>商品发布</div>
            </div>
            <div>
              <div><img src="../assets/img/12.png"/></div>
              <div>首页轮播图</div>
            </div>
            <div>
              <div><img src="../assets/img/13.png"/></div>
              <div>优惠券</div>
            </div>
            <div>
              <div><img src="../assets/img/14.png"/></div>
              <div>在线客服</div>
            </div>
            <div>
              <div><img src="../assets/img/15.png"/></div>
              <div>文章发布</div>
            </div>
          </div>
        </div>
      </div>
      <div class="zf9">
        <div class="zf10">
          <div>热销商品</div>
          <div>
            <div v-for="(item,index) in list" :key="index" :class="{zf11 : index == indexs}" @click="qh(index)">{{item}}</div>
          </div>
        </div>
        <div class="zf11">
            <template v-if='indexs == 0' width='100%'>
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="商品名称"
                  width="430"
                  >
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="分类"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="数量"
                  width="57">
                </el-table-column>
              </el-table>
            </template>
            <template v-if='indexs == 1' width='100%'>
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="哈哈"
                  width="430"
                  >
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="哈哈"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="哈哈"
                  width="57">
                </el-table-column>
              </el-table>
            </template>
            <template v-if='indexs == 2' width='100%'>
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="日期"
                  width="430"
                  >
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址"
                  width="57">
                </el-table-column>
              </el-table>
            </template>
        </div>
      </div>
    </div>
    <div class="zf12">
      <div class="zf10">
        <div>热销商品</div>
        <div>
          <div v-for="(item,index) in list1" :key="index" :class="{zf11 : index == indexs1}" @click="qha(index)">{{item}}</div>
        </div>
      </div>
      <div class="zf13" id="myChart" :style="{width: '100%', height: '300px'}"></div>
    </div>
    <div class="zf14">
      <div class="zf15">
        <div><el-button type="primary" size='small'>生成索引</el-button></div>
        <div>系统初始时必须生成索引。生成后可加快商品的搜索速度，减小访问数据库的压力。 索引只需要生成一次即可。</div>
      </div>
      <div class="zf16">
        <div><img src="../assets/img/17.png"/></div>
        <div class="zf17">
          <div><span>当前系统版本:</span>jspgou 单店版 5.0版</div>
          <div><span>最近登录时间: </span>2018-07-29 15:18:30</div>
          <div><span>内存:</span>已用 508MB<span>剩余 78MB</span><span>最大 3531MB</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:["月","年","总"],
      list1:["月","年"],
      indexs:0,
      indexs1:0,
      tableData: [{
        date: '恋爱女王节妈咪版系列复古的灵感挑战你的高腰牛仔裤',
        name: '女装',
        address: '3'
      }, {
        date: '【低价疯抢】Apple iPhone 6 32G',
        name: '三星',
        address: '1'
      }, {
        date: 'Apple iPad Air 2 平板电脑',
        name: '平板电脑',
        address: '1'
      }]
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    qh(val){
      this.indexs = val
    },
    qha(val){
      this.indexs1 = val
    },
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            xAxis: {
                type: 'category',
                data: ['7-01', '7-02', '7-03', '7-04', '7-05', '7-06', '7-07']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [0, 0, 0, 0, 0, 1330, 0],
                type: 'line'
            }]
        });
    }
  },
}
</script>

<style scoped>
#staging{
  padding: 20px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: rgba(240, 244, 246, 1);
}
#staging >>> .el-icon-house{
  color: #1989fa;
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
.zf1{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.zf2{
  width: 24%;
  height: 100px;
  background-color: rgba(23, 213, 126, 1);
  position: relative;
}
.zf2>div:nth-child(1){
  position: absolute;
  top: 15px;
  left: 15px;
}
.zf2>div:nth-child(1) img{
  width: 28px;
}
.zf2>div:nth-child(2){
  float: right;
  margin-right: 15px;
  margin-top: 15px;
  text-align: right;
  color: #fff;
}
.zf2>div:nth-child(2) div:nth-child(1){
  font-size: 28px;
}
.zf3{
  width: 24%;
  height: 100px;
  background-color: rgba(254, 201, 43, 1);
  position: relative;
}
.zf3>div:nth-child(1){
  position: absolute;
  top: 15px;
  left: 15px;
}
.zf3>div:nth-child(1) img{
  width: 25px;
}
.zf3>div:nth-child(2){
  float: right;
  margin-right: 15px;
  margin-top: 15px;
  text-align: right;
  color: #fff;
}
.zf3>div:nth-child(2) div:nth-child(1){
  font-size: 28px;
}
.zf4{
  width: 24%;
  height: 100px;
  background-color: rgba(45, 163, 251, 1);
  position: relative;
}
.zf4>div:nth-child(1){
  position: absolute;
  top: 15px;
  left: 15px;
}
.zf4>div:nth-child(1) img{
  width: 25px;
}
.zf4>div:nth-child(2){
  float: right;
  margin-right: 15px;
  margin-top: 15px;
  text-align: right;
  color: #fff;
}
.zf4>div:nth-child(2) div:nth-child(1){
  font-size: 28px;
}
.zf5{
  width: 24%;
  height: 100px;
  background-color: rgba(193, 114, 216, 1);
  position: relative;
}
.zf5>div:nth-child(1){
  position: absolute;
  top: 15px;
  left: 15px;
}
.zf5>div:nth-child(1) img{
  width: 25px;
}
.zf5>div:nth-child(2){
  float: right;
  margin-right: 15px;
  margin-top: 15px;
  text-align: right;
  color: #fff;
}
.zf5>div:nth-child(2) div:nth-child(1){
  font-size: 28px;
}
.zf6{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.zf7{
  width: 49.2%;
}
.zf7a{
  border-radius:3px;
  background: #fff;
  margin-bottom: 20px;
}
.zf7a>div:nth-child(1){
  height: 40px;
  line-height: 40px;
  padding-left: 15px;
  border-bottom: 1px solid #ccc;
  font-size: 15px;
}
.zf8{
  display: flex;
  padding: 30px 0;
}
.zf8>div{
  flex: 1;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
}
.zf8>div>div:nth-child(3){
  font-size: 15px;
}
.zf9{
  width: 49.2%;
  height: 385px;
  background: #fff;
  border-radius:3px;
}
.zf10{
  height: 40px;
  border-bottom: 1px solid #ccc;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  align-items: center;
}
.zf10>div:nth-child(2){
  display: flex;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 12px;
  box-sizing: border-box;
}
.zf10>div:nth-child(2) div{
  padding: 2px 13px;
}
.zf10>div:nth-child(2) div:nth-child(1){
  border-radius: 5px 0 0 5px;
}
.zf10>div:nth-child(2) div:nth-child(3){
  border-radius: 0px 5px 5px 0;
}
.zf11{
  background-color: rgba(26, 179, 148, 1);
  color: #fff;
}
#staging >>> .is-leaf{
  color: #89B9D9;
  background-color: rgba(246, 249, 251, 1);
}
#staging >>> .cell{
  font-size: 13px;
}
.zf12{
  border-radius: 5px;
  background: #fff;
}
.zf13{
  padding: 10px 0;
}
.zf14{
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
}
.zf15{
  border-radius: 5px;
  width: 49.2%;
  background: #fff;
  font-size: 13px;
  padding: 15px;
  box-sizing: border-box;
}
.zf15>div:nth-child(2){
  margin-top: 8px;
  color: #666666;
}
.zf16{
  border-radius: 5px;
  width: 49.2%;
  background: #fff;
  font-size: 13px;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
}
.zf17{
  padding-left: 20px;
}
.zf17>div{
  line-height: 32px;
}
.zf17>div>span{
  color:#666;
}
.zf17>div:nth-child(3) span:nth-child(2){
  margin-left: 20px;
  color: #1AB394;
}
.zf17>div:nth-child(3) span:nth-child(3){
  margin-left: 20px;
  color: #F8AC59;
}
</style>