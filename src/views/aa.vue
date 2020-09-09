<template>
  <div id="aa">
    <el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        prop="QuestionId"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="Title"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="Content"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="Prize"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="CreateUserId"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="CreateUserName"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="CreatedTime"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="VisitCount"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="State"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:''
    }
  },
  created() {
    this.$axios.get("http://47.111.250.151:8081/api/Question/GetQuestion")
    .then(res => {
      this.list = res.data.rows
    })
  },
}
</script>

<style scoped>

</style>