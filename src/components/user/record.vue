<template>
  <div id="classify">
    <div class="zf"><i class="el-icon-house"></i>  >>  商品  >>  规格品牌</div>
    <div class="zf1">
      <div>规格列表</div>
      <div class="zf2">
        <div class="zf4">
          <div class="zf5">
            <button><span>+</span> 添加规格</button>
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
                  type="selection"
                  width="80">
                </el-table-column>
                <el-table-column
                  label="ID"
                  width="180">
                  <template slot-scope="scope">{{scope.row.date}}</template>
                </el-table-column>
                <el-table-column
                  prop="mc"
                  label="字典名称"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="字典类型"
                  width="180">
                </el-table-column>
                <el-table-column
                  label="排序"
                  show-overflow-tooltip>
                  <template slot-scope="scope"><input type="text" :value="scope.row.name1"/></template>
                </el-table-column>
                <el-table-column
                  label="操作"
                  width="90"
                  >
                  <template slot-scope="scope">
                    <div class="zf12">
                      <!-- <img style="width:30px;height:30px" :src="scope.row.img" @click.native.prevent="deleteRow(scope.$index, tableData)"/> -->
                       <el-button
                          @click.native.prevent="deleteRow(scope.$index, tableData)"
                          type="text"
                          size="small"
                          class="zf11">
                          
                        </el-button>
                        <button class="zf10"></button>
                      <!-- <img style="width:30px;height:30px" :src="scope.row.img1"/> -->
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </template>
            <div class="zf13">
              <button>保存排序</button>
              <button @click="aa()">批量删除</button>
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
        tableData: [{
          date: 1,
          mc:"高中以下",
          name: '教育程度',
          name1: 1,
        }, {
          date: 2,
          mc:"学生",
          name: '身份',
          name1: 10,
        }, {
          date: 3,
          mc:"在职",
          name: '身份',
          name1: 10,
        }, {
          date: 4,
          mc:"自由职业",
          name: '身份',
          name1: 10,
        }, {
          date: 5,
          mc:"家庭主妇",
          name: '身份',
          name1: 10,
        }, {
          date: 6,
          mc:"退休",
          name: '身份',
          name1: 10,
        }, {
          date: 7,
          mc:"1人",
          name: '家庭成员',
          name1: 10,
        }, {
          date: 8,
          mc:"2人",
          name: '家庭成员',
          name1: 10,
        }, {
          date: 9,
          mc:"3人",
          name: '家庭成员',
          name1: 10,
        }, {
          date: 10,
          mc:"4人以上",
          name: '家庭成员',
          name1: 10,
        }],
        multipleSelection: [],
        currentPage2:0
      };
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      aa(){
        // console.log(this.multipleSelection)
    
      }
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
#classify >>> .el-input{
  width: 80px;
}
.zf5{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  border-bottom: 1px solid #ccc;
}
.zf5>button:nth-child(1){
  background: #1AB394;
  color: #fff;
  border: 1px solid #1AB394;
  padding: 5px 8px;
  border-radius: 3px;
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
#classify >>> .el-tooltip input{
  width: 100px;
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
#classify >>> .el-table__row > td{
  padding: 0;
}
#classify >>> .cell{
  text-align: center;
}
</style>