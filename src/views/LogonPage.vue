<template>
  <html>
  <body>
  <div>
    <div class="wrap">
      <div style="font-size: 22px; position: absolute; top: 15px; right: 150px">注&nbsp;&nbsp;册</div>
      <el-form :model="form" ref="form" class="form" style="position: relative; top: 70px;">
        <el-form-item prop="username">
          <el-input placeholder="用户名" type="username" v-model="form.username" autocomplete="off" clearable></el-input>
        </el-form-item>
        <el-form-item prop="password_1">
          <el-input placeholder="密码" type="password" v-model="form.password_1" autocomplete="off" clearable show-password></el-input>
        </el-form-item>
        <el-form-item prop="password_2" clearable>
          <el-input
              placeholder="确认密码"
              show-password
              clearable
              type="password"
              v-model="form.password_2"
              autocomplete="off"
              @keyup.enter.native="register"
          ></el-input>
        </el-form-item>
        <el-form-item class="btn_register">
          <el-button type="primary" @click="register">注&nbsp;&nbsp;册</el-button>
        </el-form-item>
        <!--<router-link to="/"><el-form-item class="btn_register">
          <el-button type="danger" >取&nbsp;&nbsp;消</el-button>
        </el-form-item></router-link>-->
        <div class="suffix2">
          <p @click="toRegister">取消</p>
        </div>
      </el-form>
    </div>
  </div>
  </body>
  </html>
</template>

<script>
import qs from "qs";
export default {
  name: "LogonPage",
  data() {
    return {
      form: {
        username: '',
        password_1: '',
        password_2: '',
      }
    }
  },
  methods:{
    register: function () {
      // 跳转注册的路由
      this.$axios.post('/user/register/',qs.stringify(this.form)).then(
          res =>{
            switch (res.data.result) {
              case 1:
                this.$message.success("注册成功！");
                this.$store.state.UserId = res.data.id;
                this.$router.push('/register');
                break;

              case 0:
                this.$message.error("注册失败！");
                break;
            }
          }
      )
    },
    toRegister() {
      this.$router.push('/register');
    }
  }
}
</script>

<style scoped>

.suffix2 {
  position: absolute;
  bottom: 0px;
  right: 10px;
  font-size:14px;
  line-height:10px;
  color:#999;
  cursor: pointer;
  float:right;
}

.wrap{
  width: 300px;
  height: 350px;
  padding: 0 25px 0 25px;
  line-height: 50px;
  position: relative;
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.85);;
  border-radius: 15px;
  color: #303133;
  top: 160px;
  border: 2px solid #ebeef5;
  box-shadow: 2px 2px 12px 2px rgb(0 0 0 / 10%);
  transition: .3s;
}

</style>