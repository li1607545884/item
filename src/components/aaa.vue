<template>
  <div id="aaa">
    <div class="zf1">
      <div><input type="text" v-model="name4"></div>
      <div><button @click="ss()" >搜索</button></div>
      <div><el-button @click="drawer = true" size="small" type="primary" style="margin-left: 16px;">
        点我添加
      </el-button></div>
    </div>
    <div v-if="!list[0]">
      <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="courseDesc"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="courseName"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="professional.id"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="professional.professionalName"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="professional.professionalDesc"
        label="地址">
      </el-table-column>
      <el-table-column
        label="地址">
        <template slot-scope="scope">
          <button @click="sc(scope.row.id)">删除</button>
          <button  @click="xga(scope.row.id)">修改</button>
        </template>
      </el-table-column>
    </el-table>
    </div>
    <div v-else>
      <el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="150">
      </el-table-column>
      <el-table-column
        prop="courseName"
        label="courseName"
        width="150">
      </el-table-column>
      <el-table-column
        prop="courseDesc"
        label="courseDesc">
      </el-table-column>
      <el-table-column
        prop="professional.id"
        label="professional.id">
      </el-table-column>
      <el-table-column
        prop="professional.professionalName"
        label="professional.professionalName">
      </el-table-column>
      <el-table-column
        prop="professional.professionalDesc"
        label="professional.professionalDesc">
      </el-table-column>
      <el-table-column
        label="操作"
        width="250">
        <template slot-scope="scope">
          <button  @click="sc(scope.row.id)">删除</button>
          <button  @click="xga(scope.row.id)">修改</button>
        </template>
      </el-table-column>
    </el-table>
    </div>
    <el-drawer
    title="我是标题"
    :visible.sync="drawer"
    :with-header="false">
      <div class="zf3">
        <el-form :label-position="labelPosition" label-width="100px">
          <el-form-item label="courseName">
            <el-input v-model="name2"></el-input>
          </el-form-item>
          <el-form-item label="courseDesc">
            <el-input v-model="name3"></el-input>
          </el-form-item>
        </el-form>
        <div><button @click="tj()">添加</button></div>
      </div>
    </el-drawer>
    <el-drawer
    title="我是标题"
    :visible.sync="drawer1"
    :with-header="false">
      <div class="zf3">
        <el-form :label-position="labelPosition" label-width="100px">
          <el-form-item label="courseName">
            <el-input v-model="name5"></el-input>
          </el-form-item>
          <el-form-item label="courseDesc">
            <el-input v-model="name6"></el-input>
          </el-form-item>
        </el-form>
        <div><button @click="xg()">修改</button></div> 
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData:[],
      name2:'',
      name3:'',
      name4:'',
      name5:'',
      name6:'',
      drawer: false,
      drawer1: false,
      list:[],
      labelPosition: 'right',
      index:''
    }
  },
  created() {
    this.$axios({
      url:"http://139.9.169.87:8081/examsystem/getAllCourse",
      method:"get",
    })
    .then(res => {
      this.tableData = res.data.data
      console.log(this.tableData)
    })
  },
  methods:{
    tj(){
      this.$axios.post('http://139.9.169.87:8081/examsystem/addCourse?professionalId=160&courseDesc='+ this.name3 +'&courseName='+ this.name2,{
      },{
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        }
      })
      .then(res => {
        console.log(res)
        this.name2 = ''
        this.name3 = ''
        this.drawer = false
        this.gx()
      })
    },
    sc(index){
      this.$axios.get("http://139.9.169.87:8081/examsystem/deleteCourse",{
        params:{
          id:index
        }
      })
      .then(res => {
        console.log(res)
        this.gx()
      })
    },
    xga(val){
      this.drawer1 = true
      console.log(val)
      this.index = val
    },
    xg(){
      this.$axios.post("http://139.9.169.87:8081/examsystem/updateCourse?professionalId=160&id="+this.index+"&courseDesc="+ this.name5 +"&courseName="+ this.name6 ,{},{
        headers:{
          'content-type': 'application/x-www-form-urlencoded',
        }
      })
      .then(res => {
        console.log(res)
        this.name5 = ''
        this.name6 = ''
        this.drawer1 = false
        this.gx()
      })
    },
    ss(){
      if(this.name4 != ""){
        this.$axios.get("http://139.9.169.87:8081/examsystem/courseForPage?courseName="+ this.name4 +"",{})
        .then(res => {
          this.list = res.data.data.data
          console.log(this.list)
        })
      }else{
        this.gx()
      }
    },
    gx(){
        this.$axios({
          url:"http://139.9.169.87:8081/examsystem/getAllCourse",
          method:"get",
        })
        .then(res => {
          this.tableData = res.data.data
          this.list = ""
          console.log(this.tableData)
        })
    }
  }
}
</script>

<style scoped>
#aaa{
  padding: 20px;
}
.zf{
  display: flex;
}
.zf>div{
  flex: 1;
}
#aaa >>> .cell{
  text-align: center;
}
.zf1{
  display: flex;
}
.zf1>div:nth-child(1) input{
  width: 200px;
  height: 31px;
  border: 1px solid #3a8ee6;
}
.zf1>div:nth-child(2) button{
  width: 60px;
  height: 33px;
  border: 1px solid #3a8ee6;
  background: #3a8ee6;
  color: #fff;
}
.el-table__row > td >.cell>button:nth-child(1){
  width: 60px;
  height: 30px;
  border: 1px solid red;
  background: red;
  color: #fff;
  border-radius: 4px;
}
.el-table__row > td > .cell>button:nth-child(2){
  width: 60px;
  height: 30px;
  border: 1px solid #3a8ee6;
  background: #3a8ee6;
  color: #fff;
  border-radius: 4px;
}
.zf3{
  padding: 30px 40px;
  text-align: center;
}
.zf3>div{
  margin-bottom: 20px;
}
.zf3>div:nth-child(1){
  margin-top: 200px;
}
.zf3>div:nth-child(2) button{
  width: 100px;
  height: 30px;
  border: 1px solid #3a8ee6;
  background: #3a8ee6;
  color: #fff;
  border-radius: 4px;
}
.zf3 >>> .el-input__inner{
  width: 200px;
}
</style>