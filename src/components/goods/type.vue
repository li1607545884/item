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
                  label="类型名称"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="商品分类模板前缀"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name1"
                  label="商品内容模板前缀"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name2"
                  label="顺序列表"
                  show-overflow-tooltip
                  width="180">
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
        data: [{
          label: '所有分类',
          children: [{
            label: '数码',
            children: [{
              label: '手机',
              children: [{
                label: '三星'
              },{
                label: '苹果'
              },{
                label: '华为'
              }]
            },{
              label: '笔记本',
              children: [{
                label: '联想'
              }]
            },{
              label: '电脑整机',
              children: [{
                label: '平板电脑'
              },{
                label: '台式机'
              }]
            },{
              label: '办公',
              children: [{
                label: '文具'
              },{
                label: '打印机'
              }]
            },{
              label: '摄影摄像',
              children: [{
                label: '相机'
              },{
                label: '单反'
              }]
            }]
          },{
            label: '服装',
            children: [{
              label: '女装',
              children: [{
                label: '浪漫裙装'
              },{
                label: '精选上装'
              }]
            },{
              label: '男装',
              children: [{
                label: '男士外套'
              },{
                label: '男士裤装'
              }]
            },{
              label: '童装',
              children: [{
                label: '亲子装'
              },{
                label: '套装'
              }]
            },{
              label: '内衣',
            },{
              label: '套装',
            }]
          },{
            label: '鞋包配饰',
            children: [{
              label: '三级 1-1-1'
            }]
          },{
            label: '日用百货',
            children: [{
              label: '三级 1-1-1'
            }]
          },{
            label: '家居建材',
            children: [{
              label: '三级 1-1-1'
            }]
          },{
            label: '珠宝手表',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        options: [{
          value: '选项1',
          label: '下架'
        }, {
          value: '选项2',
          label: '在售'
        }],
        value: '',
        tableData: [{
          date: 27,
          mc:"生活电器",
          name: '分类',
          name1: '商品',
          name2: '[分类字段] [商品字段]',
        }, {
          date: 27,
          mc:"生活电器",
          name: '分类',
          name1: '商品',
          name2: '[分类字段] [商品字段]',
        }, {
          date: 27,
          mc:"生活电器",
          name: '分类',
          name1: '商品',
          name2: '[分类字段] [商品字段]',
        }, {
          date: 27,
          mc:"生活电器",
          name: '分类',
          name1: '商品',
          name2: '[分类字段] [商品字段]',
        }, {
          date: 27,
          mc:"生活电器",
          name: '分类',
          name1: '商品',
          name2: '[分类字段] [商品字段]',
        }, {
          date: 27,
          mc:"生活电器",
          name: '分类',
          name1: '商品',
          name2: '[分类字段] [商品字段]',
        }, {
          date: 27,
          mc:"生活电器",
          name: '分类',
          name1: '商品',
          name2: '[分类字段] [商品字段]',
        }, {
          date: 27,
          mc:"生活电器",
          name: '分类',
          name1: '商品',
          name2: '[分类字段] [商品字段]',
        }, {
          date: 27,
          mc:"生活电器",
          name: '分类',
          name1: '商品',
          name2: '[分类字段] [商品字段]',
        }, {
          date: 27,
          mc:"生活电器",
          name: '分类',
          name1: '商品',
          name2: '[分类字段] [商品字段]',
        }],
        multipleSelection: [],
        currentPage4: 5,
        currentPage2:0
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
#classify >>> .el-table__row > td{
  padding: 0;
}
#classify >>> .el-tooltip{
  color:#1AB394;
}
</style>