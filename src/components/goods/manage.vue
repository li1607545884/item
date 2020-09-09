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
            <div>
              <template>
                <el-select v-model="value" placeholder="下架">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </template>
            </div>
            <div class="zf7">
              <button v-for="(item,index) in list" :key="index" :class="{zf6:index == indexs}" @click="qh(index)">{{item}}</button>
            </div>
            <div class="zf8">
              商品名称：<input type="text"/>
            </div>
            <div class="zf8">
              品牌：<input type="text"/>
            </div>
            <div class="zf9"><button>查询</button></div>
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
                  width="40">
                </el-table-column>
                <el-table-column
                  label="图片"
                  width="50">
                  <template slot-scope="scope"><img style="width:30px;height:30px" :src="scope.row.date"/></template>
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="商品名称"
                  width="280">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="分类"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  prop="pp"
                  label="品牌"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  prop="jg"
                  label="价格"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  prop="kc"
                  label="库存"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="操作"
                  width="80"
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
                        <button @click="xg(scope.$index, tableData)" class="zf10"></button>
                      <!-- <img style="width:30px;height:30px" :src="scope.row.img1"/> -->
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
   name:'manage',
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
        list:["推荐","特价","热卖","新品"],
        indexs:0,
        tableData: [{
          // id:"1",
          date: require("../../assets/img/1.jpg"),
          name: '【低价疯抢】Apple iPhone 6 32G',
          address: '三星',
          pp:'品牌',
          jg:3100,
          kc:5,
          img: require("../../assets/img/18.png"),
          img1: require("../../assets/img/19.png"),
        }, {
          // id:"2",
          date: require("../../assets/img/1.jpg"),
          name: '【低价疯抢】Apple iPhone 6 32G',
          address: '三星',
          pp:'品牌',
          jg:3100,
          kc:5,
          img: require("../../assets/img/18.png"),
          img1: require("../../assets/img/19.png"),
        }, {
          // id:"3",
          date: require("../../assets/img/1.jpg"),
          name: '【低价疯抢】Apple iPhone 6 32G',
          address: '三星',
          pp:'品牌',
          jg:3100,
          kc:5,
          img: require("../../assets/img/18.png"),
          img1: require("../../assets/img/19.png"),
        }, {
          // id:"4",
          date: require("../../assets/img/1.jpg"),
          name: '【低价疯抢】Apple iPhone 6 32G',
          address: '三星',
          pp:'品牌',
          jg:3100,
          kc:5,
          img: require("../../assets/img/18.png"),
          img1: require("../../assets/img/19.png"),
        }, {
          // id:"5",
          date: require("../../assets/img/1.jpg"),
          name: '【低价疯抢】Apple iPhone 6 32G',
          address: '三星111',
          pp:'品牌',
          jg:3100,
          kc:5,
          img: require("../../assets/img/18.png"),
          img1: require("../../assets/img/19.png"),
        }, {
          // id:"6",
          date: require("../../assets/img/1.jpg"),
          name: '【低价疯抢】Apple iPhone 6 32G',
          address: '三星',
          pp:'品牌',
          jg:3100,
          kc:5,
          img: require("../../assets/img/18.png"),
          img1: require("../../assets/img/19.png"),
        }, {
          // id:"7",
          date: require("../../assets/img/1.jpg"),
          name: '【低价疯抢】Apple iPhone 6 32G',
          address: '三星',
          pp:'品牌',
          jg:3100,
          kc:5,
          img: require("../../assets/img/18.png"),
          img1: require("../../assets/img/19.png"),
        }, {
          // id:"8",
          date: require("../../assets/img/1.jpg"),
          name: '【低价疯抢】Apple iPhone 6 32G',
          address: '三星',
          pp:'品牌',
          jg:3100,
          kc:5,
          img: require("../../assets/img/18.png"),
          img1: require("../../assets/img/19.png"),
        }, {
          // id:"9",
          date: require("../../assets/img/1.jpg"),
          name: '【低价疯抢】Apple iPhone 6 32G',
          address: '三星',
          pp:'品牌',
          jg:3100,
          kc:5,
          img: require("../../assets/img/18.png"),
          img1: require("../../assets/img/19.png"),
        }, {
          // id:"10",
          date: require("../../assets/img/1.jpg"),
          name: '【低价疯抢】Apple iPhone 6 32G',
          address: '三星',
          pp:'品牌',
          jg:3100,
          kc:5,
          img: require("../../assets/img/18.png"),
          img1: require("../../assets/img/19.png"),
        }],
        multipleSelection: [],
        currentPage4: 5,
        indexa:0,
        list1:""
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      },
      qh(val){
        this.indexs = val
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
        // for(let i = 0;i < val.length;i++){
        //    console.log(JSON.stringify(this.tableData).indexOf(JSON.stringify(val[i])))
        // }
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
      },
      xg(index,val){
        this.$router.push({
          name:'revise01',
          params:{
            list:val[index],
            index:index
          }
        })
      },
    },
    mounted() {
      this.indexa = this.$route.params.index
      this.list1 = this.$route.params.list
      console.log(this.list1)
      this.tableData[this.indexa] = this.list1
    },
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
.zf13>button:nth-child(1) {
  background: #fff;
  border: 1px solid #ccc;
  padding: 3px 5px;
  border-radius: 4px;
}
.zf13>div:nth-child(2){
  margin-top: 15px;
  margin-left: 45px;
}
#classify >>> .el-table__row > td{
  padding: 0;
}
</style>