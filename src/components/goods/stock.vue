<template>
  <div id="classify">
    <div class="zf"><i class="el-icon-house"></i>  >>  商品  >>  库存预警</div>
    <div class="zf1">
      <div>库存预警</div>
      <div class="zf2">
        <div class="zf4">
          <div class="zf5">
          </div>
          <div>
            <template>
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="商品名称"
                  width="200">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="分类"
                  width="200">
                </el-table-column>
                <el-table-column
                  prop="name1"
                  label="品牌"
                  width="200">
                </el-table-column>
                <el-table-column
                  prop="name2"
                  label="类型"
                  width="200">
                </el-table-column>
                <el-table-column
                  prop="name3"
                  label="库存"
                  width="200">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="库存警戒值">
                </el-table-column>
              </el-table>
            </template>
            <div class="zf13">
              <div class="block zf14">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage2"
                  :page-sizes="[2, 4, 5, 10]"
                  :page-size="100"
                  layout="sizes, prev, pager, next"
                  :total="10">
                </el-pagination>
              </div>
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
        value:'',
        tableData: [{
            date: '测试商品',
            name: '三星',
            name1: '平板电脑',
            name2: '三星',
            name3: '5',
            address: '1111'
          }, {
            date: '测试商品',
            name: '三星',
            name1: '平板电脑',
            name2: '三星',
            name3: '5',
            address: '1111'
          }, {
            date: '测试商品',
            name: '三星',
            name1: '平板电脑',
            name2: '三星',
            name3: '5',
            address: '1111'
          }, {
            date: '测试商品',
            name: '三星',
            name1: '平板电脑',
            name2: '三星',
            name3: '5',
            address: '1111'
          }, {
            date: '测试商品',
            name: '三星',
            name1: '平板电脑',
            name2: '三星',
            name3: '5',
            address: '1111'
          }, {
            date: '测试商品',
            name: '三星',
            name1: '平板电脑',
            name2: '三星',
            name3: '5',
            address: '1111'
          }, {
            date: '测试商品',
            name: '三星',
            name1: '平板电脑',
            name2: '三星',
            name3: '5',
            address: '1111'
          }, {
            date: '测试商品',
            name: '三星',
            name1: '平板电脑',
            name2: '三星',
            name3: '5',
            address: '1111'
          }, {
            date: '测试商品',
            name: '三星',
            name1: '平板电脑',
            name2: '三星',
            name3: '5',
            address: '1111'
          }, {
            date: '测试商品',
            name: '三星',
            name1: '平板电脑',
            name2: '三星',
            name3: '5',
            address: '1111'
          }, {
            date: '测试商品',
            name: '三星',
            name1: '平板电脑',
            name2: '三星',
            name3: '5',
            address: '1111'
          }],
        currentPage2:0,
      };
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
    }
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
#classify >>> .zf5>.el-input{
  width: 200px;
}
.zf5{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 15px;
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
  background: url("../../assets/img/20.png") no-repeat;
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
#classify >>> .el-tooltip input{
  width: 50px;
  border-radius: 3px;
  height: 25px;
  border: 1px solid #ccc;
}
#classify >>> .el-tooltip{
  font-size: 12px;
}
.zf14{
  line-height: initial;
  margin-left: 30px;
}
#classify >>> .cell{
  text-align: center;
}
</style>