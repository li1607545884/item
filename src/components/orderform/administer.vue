<template>
  <div id="classify">
    <div class="zf"><i class="el-icon-house"></i>  >>  订单  >>  商品资讯</div>
    <div class="zf1">
      <div>订单列表</div>
      <div class="zf2">
        <div class="zf4">
          <div class="zf4a">
            <div class="zf5a">
              <div>
                <el-select v-model="value" placeholder="订单状态">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div>
                <el-select v-model="valuea" placeholder="支付状态">
                  <el-option
                    v-for="item in optionsa"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div>
                <el-select v-model="valueb" placeholder="配送状态">
                  <el-option
                    v-for="item in optionsb"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div>
                <el-select v-model="valuec" placeholder="配送方式">
                  <el-option
                    v-for="item in optionsc"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="zf5">
            <div>订单编号:<input type="text"/></div>
            <div class="block">
              <span>资讯时间：</span>
              <el-date-picker
                v-model="value1"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </div>
            <div><button>查询</button></div>
          </div>
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
                  width="50">
                </el-table-column>
                <el-table-column
                  label="ID"
                  width="60">
                  <template slot-scope="scope">{{scope.row.date}}</template>
                </el-table-column>
                <el-table-column
                  prop="mc"
                  label="订单编号"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="买家用户名"
                  width="90">
                </el-table-column>
                <el-table-column
                  label="订单金额(元)"
                  width="120" class="zff">
                  <template slot-scope="scope"><div>
                      <div>{{scope.row.name1}}</div>
                      <div>(含运费{{scope.row.name1a}})</div>
                    </div></template>
                </el-table-column>
                <el-table-column
                  prop="name2"
                  label="下单日期"
                  width="152">
                </el-table-column>
                <el-table-column
                  prop="name3"
                  label="订单状态"
                  width="80">
                </el-table-column>
                <el-table-column
                  prop="name4"
                  label="支付状态"
                  width="80">
                </el-table-column>
                <el-table-column
                  prop="name5"
                  label="支付方式"
                  width="80">
                </el-table-column>
                <el-table-column
                  prop="name6"
                  label="配送状态"
                  width="80">
                </el-table-column>
                <el-table-column
                  prop="name7"
                  label="配送方式"
                  width="80">
                </el-table-column>
                <el-table-column
                  label="操作"
                  width="130"
                  >
                  <template slot-scope="scope">
                    <div class="zf12">
                      <!-- <img style="width:30px;height:30px" :src="scope.row.img" @click.native.prevent="deleteRow(scope.$index, tableData)"/> -->
                        <button class="zf10"></button>
                        <button class="zf10a"></button>
                        <el-button
                          @click.native.prevent="deleteRow(scope.$index, tableData)"
                          type="text"
                          size="small"
                          class="zf11">
                        </el-button>
                      <!-- <img style="width:30px;height:30px" :src="scope.row.img1"/> -->
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </template>
            <div class="zf13">
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
        options: [{
          value: '选项1',
          label: '未确定'
        }, {
          value: '选项2',
          label: '已确定'
        }, {
          value: '选项3',
          label: '已取消'
        }, {
          value: '选项4',
          label: '已完成'
        }],
        value: '',
        optionsa: [{
          value: '选项1',
          label: '未支付'
        }, {
          value: '选项2',
          label: '已支付'
        }, {
          value: '选项3',
          label: '已退款'
        }],
        valuea: '',
        optionsb: [{
          value: '选项1',
          label: '未发货'
        }, {
          value: '选项2',
          label: '已发货'
        }, {
          value: '选项3',
          label: '已退货'
        }],
        valueb: '',
        optionsc: [{
          value: '选项1',
          label: '普通快递'
        }, {
          value: '选项2',
          label: '顺丰快递'
        }],
        valuec: '',
        // value: '',
        tableData: [{
          date: 1688,
          mc:"1533019644791",
          name: 'text1',
          name1: '6398',
          name1a: 0,
          name2: '2018-07-31 14:47:24',
          name3: '未确认',
          name4: '未支付',
          name5: '网上支付',
          name6: '未发货',
          name7: '普通快递',
        }, {
          date: 1688,
          mc:"1533019644791",
          name: 'text1',
          name1: '6398',
          name1a: 0,
          name2: '2018-07-31 14:47:24',
          name3: '未确认',
          name4: '未支付',
          name5: '网上支付',
          name6: '未发货',
          name7: '普通快递',
        }, {
          date: 1688,
          mc:"1533019644791",
          name: 'text1',
          name1: '6398',
          name1a: 0,
          name2: '2018-07-31 14:47:24',
          name3: '未确认',
          name4: '未支付',
          name5: '网上支付',
          name6: '未发货',
          name7: '普通快递',
        }, {
          date: 1688,
          mc:"1533019644791",
          name: 'text1',
          name1: '6398',
          name1a: 0,
          name2: '2018-07-31 14:47:24',
          name3: '未确认',
          name4: '未支付',
          name5: '网上支付',
          name6: '未发货',
          name7: '普通快递',
        }, {
          date: 1688,
          mc:"1533019644791",
          name: 'text1',
          name1: '6398',
          name1a: 0,
          name2: '2018-07-31 14:47:24',
          name3: '未确认',
          name4: '未支付',
          name5: '网上支付',
          name6: '未发货',
          name7: '普通快递',
        }, {
          date: 1688,
          mc:"1533019644791",
          name: 'text1',
          name1: '6398',
          name1a: 0,
          name2: '2018-07-31 14:47:24',
          name3: '未确认',
          name4: '未支付',
          name5: '网上支付',
          name6: '未发货',
          name7: '普通快递',
        }, {
          date: 1688,
          mc:"1533019644791",
          name: 'text1',
          name1: '6398',
          name1a: 0,
          name2: '2018-07-31 14:47:24',
          name3: '未确认',
          name4: '未支付',
          name5: '网上支付',
          name6: '未发货',
          name7: '普通快递',
        }, {
          date: 1688,
          mc:"1533019644791",
          name: 'text1',
          name1: '6398',
          name1a: 0,
          name2: '2018-07-31 14:47:24',
          name3: '未确认',
          name4: '未支付',
          name5: '网上支付',
          name6: '未发货',
          name7: '普通快递',
        }, {
          date: 1688,
          mc:"1533019644791",
          name: 'text1',
          name1: '6398',
          name1a: 0,
          name2: '2018-07-31 14:47:24',
          name3: '未确认',
          name4: '未支付',
          name5: '网上支付',
          name6: '未发货',
          name7: '普通快递',
        }, {
          date: 1688,
          mc:"1533019644791",
          name: 'text1',
          name1: '6398',
          name1a: 0,
          name2: '2018-07-31 14:47:24',
          name3: '未确认',
          name4: '未支付',
          name5: '网上支付',
          name6: '未发货',
          name7: '普通快递',
        }],
        multipleSelection: [],
        currentPage4: 5,
        currentPage2:0,
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: ''
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
#classify >>> .zf5 > .el-input{
  width: 80px;
}
#classify >>> .el-select{
  width: 120px;
}
.zf5{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  border-bottom: 1px solid #ccc;
}
.zf5>div input{
  height: 25px;
  border-radius: 3px;
  border: 1px solid #ccc;
  width: 150px;
  margin-left: 5px;
}
.zf5>div button{
  background-color: rgba(26, 179, 148, 1);
  color: #fff;
  border: 1px solid rgba(26, 179, 148, 1);
  padding: 5px 25px;
}
.zf5a{
  display: flex;
  margin-top: 15px;
}
.zf5a>div{
  margin-left: 10px;
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
.zf10a{
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
#classify >>> .cell{
  text-align: center;
  font-size: 13px;
}
#classify >>> .el-table__row > td:nth-child(5)>div>div>div:nth-child(2){
  color: #999999;
  font-size: 13px;
}
</style>