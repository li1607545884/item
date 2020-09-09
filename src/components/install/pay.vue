<template>
  <div id="classify">
    <div class="zf"><i class="el-icon-house"></i>  >>  设置  >>  支付插件</div>
    <div class="zf1">
      <div>支付插件列表</div>
      <div class="zf2">
        <div class="zf4">
          <div class="zf5">

          </div>
          <div>
            <template>
              <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange"
                >
                <el-table-column
                  label="ID"
                  width="100">
                  <template slot-scope="scope">{{scope.row.date}}</template>
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="栏目类型"
                  width="520">
                </el-table-column>
                 <el-table-column
                  label="排序"
                  width="454">
                  <template slot-scope="scope"><input class="zf15" type="text" :value="scope.row.name5"/></template>
                </el-table-column>
                <el-table-column
                  label="操作"
                  width="90"
                  >
                  <template>
                    <div class="zf12">
                        <button class="zf10"></button>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </template>
            <div class="zf13">
              <button>保存排序</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        tableData: [{
          date: 5,
          name:"1",
          name5:2,
        }, {
          date: 3,
          name:"支付宝即时交易",
          name5:3,
        }, {
          date: 6,
          name:"微信公众号支付",
          name5:4,
        }, {
          date: 7,
          name:"支付宝移动端网页支付",
          name5:10,
        }, {
          date: 8,
          name:"单笔转账到支付宝账户",
          name5:10,
        }],
        currentPage2:0
      };
    },
  };
</script>

<style scoped>
#classify{
  padding: 20px 60px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: rgba(240, 244, 246, 1);
}
#classify >>> .el-icon-house{
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
  width: 100%;
  border: 1px solid #ccc;
}
.zf1>div:nth-child(1){
  background: #ECEFF1;
  height: 45px;
  line-height: 45px;
  padding-left: 20px;
  box-sizing: border-box;
  font-size: 14px;
}
.zf2{
  width: 100%;
  background: #fff;
  border-right: 1px solid #ccc;
  display: flex;
}
.zf3>div:nth-child(1){
  width: 100%;
  font-size: 15px;
  margin-left: 6px;
  color: #999999;
}
.zf4{
  width: 100%;
}
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
#classify >>> .el-input{
  width: 80px;
}
.zf5{
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid #ccc;
}

.zf6{
  color: rgb(26, 179, 148);
}
.zf7>button{
  border: 1px solid #ccc;
  background: #fff;
  padding: 5px 10px;
  margin-left: 8px;
  font-size: 12px;
}
.zf8>input{
  height: 30px;
  width: 135px;
  border-radius: 3px;
  border: 1px solid #ccc;
}
.zf8{
  font-size: 13px;
  margin-left: 15px;
}
.zf9{
  margin-left: 15px;
}
.zf9>button{
  background-color: rgba(26, 179, 148, 1);
  width: 54px;
  height: 30px;
  border: 1px solid rgba(26, 179, 148, 1);
  color: #fff;
  border-radius: 3px;
}
#classify >>> .el-table th{
  padding: 0;
}
.zf10{
  width: 40px;
  height: 40px;
  background: url("../../assets/img/18.png") no-repeat;
  background-size: 100%;
  border: 1px solid #fff;
}
.zf11{
  width: 40px;
  height: 40px;
  background: url("../../assets/img/19.png") no-repeat;
  background-size: 100%;
}
.zf12{
  display: flex;
}
.zf13{
  display: flex;
  align-items: center;
  padding: 10px 20px;
  box-sizing: border-box;
}
.zf13>button {
  background: #fff;
  border: 1px solid #ccc;
  padding: 5px 8px;
  border-radius: 3px;
  margin-right: 10px;
  color: #666;
}

#classify >>> .el-tooltip{
  font-size: 12px;
}
.zf14{
  line-height: initial;
  margin-left: 30px;
}
#classify >>> .el-table__row > td{
  padding: 0;
}
#classify >>> .cell{
  text-align: center;
}
.zf15{
  width: 50px;
  border-radius: 3px;
  height: 25px;
  border: 1px solid #ccc;
}
</style>