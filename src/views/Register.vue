<template>
  <div>
    <div>
      <div style="height: 1000px">
        <div class="warp" style="width: 400px; height: 280px; margin: auto;">
          <div style="font-size: 25px; position: relative; top: 20px">登&nbsp;&nbsp;录</div>
          <el-form ref="form" :model="form" style="position: relative; top: 30px">
            <el-form-item prop="username">
              <el-input placeholder="用户名" type="username" v-model="form.email" autocomplete="off" clearable></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="form.password" placeholder="密码" type="password" autocomplete="off" clearable show-password></el-input>
            </el-form-item>
            <el-form-item class="btn_login">
              <el-button type="primary" @click="login">登&nbsp;&nbsp;录</el-button>
            </el-form-item>
          </el-form>
          <div class="suffix">
            <router-link to="/logonpage"><p style="color: gray">注册帐号</p></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import qs from "qs";
export default {
  name: "RegisterPage",
  data() {
    return {
      form: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    login() {
      this.$axios.post('/user/login/',qs.stringify(this.form)).then(
          res =>{
            switch (res.data.result) {
              case 1:
                this.$message.success("登录成功！");
                this.$store.state.userid = res.data.id;
                this.$router.push('/homepage');
                break;

              case 0:
                window.alert(res.data.msg);
                this.$message.error("登录失败！");
                break;
            }
          }
      )
    },
  },
}
</script>

<style scoped>

.btn_login {
  margin-top: 25px;
  text-align: center;
}

.suffix {
  position: absolute;
  bottom: 30px;
  right: 30px;
  font-size:14px;
  line-height:10px;
  color:#999;
  cursor: pointer;
  float:right;
}

#background{
  width: 100%;
  height: 100%;
  border: 1px #1A4BAF;
  background-image: url("../../src/img/星空4.jpg");
  background-size: cover;
  background-attachment: fixed;
}
#diaphaneity{
  width: 100%;
  height: 100%;
  background-color: white;
  background: rgba(255, 255, 255, 0.7);
  background-attachment: fixed;
}
.warp{
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