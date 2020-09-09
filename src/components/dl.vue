<template>
<div class="main">
    <div class="wai">
        <h1>商城后台管理系统</h1>
        <div class="asda">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-input type="text" placeholder="账号：admin" v-model="ruleForm.username" autocomplete="off"></el-input>
                <el-input type="password" placeholder="密码：admin" v-model="ruleForm.password" autocomplete="off"></el-input>
                <el-form-item>
                    <el-button type="warning" @click="submitForm()">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {

        return {
            ruleForm: {
                username: '',
                password: '',
            },
            rules: {
                username: [{
                    trigger: 'blur'
                }],
                password: [{
                    trigger: 'blur'
                }],
            },
            list:''
        };
    },
    methods: {
        submitForm() {
            this.$axios(
                {
                url:'http://139.9.169.87:8081/examsystem/login',
                method:'post',
                headers:{
                    "Content-Type":"application/json;charset=UTF-8"
                },
                params:{
                    username:this.ruleForm.username,
                    password:this.ruleForm.password
                }
                }
            )
            .then(res => {
                console.log(res)
                if(res.data.success == 'true'){
                    this.$store.commit("show",true)
                    this.$router.push({
                        path:'/staging'
                    })
                }
            })

        }
    }
}
</script>

<style>
.main {
    background: rgba(26, 179, 148, 1);
    width: 100%;
    height: 753px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1111;
}

.wai {
    width: 500px;
    height: 300px;
    background: #ffffff;
    position: relative;
    left: 35%;
    top: 30%;
    padding: 20px;
}

.asda {
    margin: 9%;
}

.asda input {
    margin-bottom: 5%;
}

.asda button {
    margin-left: -100px;

    width: 132%;
}
</style>