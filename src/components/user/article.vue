<template>
  <div id="manage">
    <div class="zf"><i class="el-icon-house"></i>  >>  商品  >>  商品管理</div>
    <div class="zf1">
      <div>分类列表</div>
      <div class="zf2">
        <div class="zf3">
          <div><i class="el-icon-refresh"></i>刷新</div>
          <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </div>
        <div class="zf4">
          <div class="zf5">
            <button>+ 添加文章</button>
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
                  width="60">
                </el-table-column>
                <el-table-column
                  prop="date"
                  label="ID"
                  width="182">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="标题"
                  width="200">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="栏目名称"
                  width="200">
                </el-table-column>
                <el-table-column
                  prop="name1"
                  label="是否禁用"
                  width="200">
                </el-table-column>
                <el-table-column
                  label="操作"
                  width="80"
                  >
                  <template slot-scope="scope">
                    <div class="zf12">
                       <el-button
                          @click.native.prevent="deleteRow(scope.$index, tableData)"
                          type="text"
                          size="small"
                          class="zf11">
                          
                        </el-button>
                        <button class="zf10"></button>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </template>
            <div class="zf13">
              <button @click="aa()">批量删除</button>
              <div class="block">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage4"
                  :page-sizes="[2, 5, 10, 15]"
                  :page-size="100"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="20">
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
         data: [{
          label: '所有分类',
          children: [{
            label: '新手入门',
          },{
            label: '网站公告',
          },{
            label: '新闻中心',
          },{
            label: '热门促销',
          },{
            label: '配送范围及时间',
          },{
            label: '支付方式',
          },{
            label: '公司简介',
          },{
            label: '保障',
          },{
            label: '底栏',
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        tableData: [{
          date: 1,
          address: '联系我们',
          name:"底栏",
          name1:"否"
        }, {
          date: 1,
          address: '联系我们',
          name:"底栏",
          name1:"否"
        }, {
          date: 1,
          address: '联系我们',
          name:"底栏",
          name1:"否"
        }, {
          date: 1,
          address: '联系我们',
          name:"底栏",
          name1:"否"
        }, {
          date: 1,
          address: '联系我们',
          name:"底栏",
          name1:"否"
        }, {
          date: 1,
          address: '联系我们',
          name:"底栏",
          name1:"否"
        }, {
          date: 1,
          address: '联系我们',
          name:"底栏",
          name1:"否"
        }, {
          date: 1,
          address: '联系我们',
          name:"底栏",
          name1:"否"
        }, {
          date: 1,
          address: '联系我们',
          name:"底栏",
          name1:"否"
        }, {
          date: 1,
          address: '联系我们',
          name:"底栏",
          name1:"否"
        }],
        multipleSelection: [],
        currentPage4: 5,
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
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
        //this.tableData  原来的数组
        //this.multipleSelection  选择数据的数组
        for (let i = this.tableData.length; i > 0; i--) {
          for (let j = 0; j < this.multipleSelection.length; j++) {
            console.log(this.tableData)
            if (this.tableData[i - 1] == this.multipleSelection[j]) {
              this.tableData.splice(i - 1, 1)
            }
          }
        }
      }
    }
  };
</script>


<style scoped>
#manage{
  padding: 20px 60px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: rgba(240, 244, 246, 1);
}
#manage >>> .el-icon-house{
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
.zf3{
  border-right: 1px solid #ccc;
  background: #fff;
  width: 20%;
  padding-left: 20px;
  box-sizing: border-box;
}
.zf3>div:nth-child(1){
  width: 100%;
  font-size: 15px;
  margin-left: 6px;
  color: #999999;
}
.zf4{
  width: 80%;
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
#manage >>> .el-input{
  width: 80px;
}
.zf5{
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #ccc;
}
.zf5>button{
  background: #1AB394;
  color: #fff;
  border: 1px solid #1AB394;
  padding: 5px 8px;
  border-radius: 3px;
  margin-right: 10px;
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
#manage >>> .el-table th{
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
  padding: 0 20px;
  box-sizing: border-box;
}
.zf13>button{
  background: #fff;
  border: 1px solid #ccc;
  padding: 5px 8px;
  border-radius: 3px;
  margin-right: 10px;
  color: #666;
}
.zf13>div:nth-child(2){
  margin-top: 15px;
  margin-left: 45px;
}
#manage >>> .cell{
  text-align: center;
}
#manage >>> .el-table__row > td{
  padding: 0;
}
</style>