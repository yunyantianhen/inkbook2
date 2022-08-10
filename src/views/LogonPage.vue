<template>
  <html>
  <body>
  <div id="background">
    <div id="diaphaneity">
      <div style="height: 700px">
    <div class="wrap">
      <div style="font-size: 22px; position: absolute; top: 15px; right: 150px">注&nbsp;&nbsp;册</div>
      <el-form :model="form" ref="form" class="form" style="position: relative; top: 70px;">
        <el-form-item prop="username">
          <el-input placeholder="用户名" type="username" v-model="form.username" autocomplete="off" clearable></el-input>
        </el-form-item>
        <el-form-item prop="username">
          <el-input placeholder="真实姓名" type="username" v-model="form.name" autocomplete="off" clearable></el-input>
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
        <el-form-item prop="username">
          <el-input placeholder="邮箱" type="username" v-model="form.email" autocomplete="off" clearable></el-input>
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
    </div>
  </div>
  </body>
  </html>
</template>

<script>
export default {
  name: "LogonPage",
  data() {
    return {
      form: {
        username: '',
        name: '',
        password_1: '',
        password_2: '',
        email: '',
      }
    }
  },
  methods:{
    register: function () {
      // 跳转注册的路由
      this.$axios.post('/user/register/',{
        username:this.form.username,
        name:this.form.name,
        password_1:this.form.password_1,
        password_2:this.form.password_2,
        email:this.form.email
      }).then(
          res =>{
            switch (res.data.result) {
              case 1:
                this.$message.success("注册成功！");
                this.$store.state.UserId = res.data.id;
                this.$router.push('/');
                break;

              case 0:
                this.$message.error(res.data.msg);
                break;
            }
          }
      )
    },
    toRegister() {
      this.$router.push('/');
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

#background{
  width: 100%;
  height: 100%;
  border: 1px #1A4BAF;
  background-image: url("../../src/img/星空.png");
  background-size: cover;
  background-attachment: fixed;
}
#diaphaneity{
  width: 100%;
  height: 100%;
  background-color: white;
  background: rgba(255, 255, 255, 0.5);
  background-attachment: fixed;
}

.wrap{
  width: 300px;
  height: 450px;
  padding: 0 25px 0 25px;
  line-height: 50px;
  position: relative;
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.85);;
  border-radius: 15px;
  color: #303133;
  top: 100px;
  border: 2px solid #ebeef5;
  box-shadow: 2px 2px 12px 2px rgb(0 0 0 / 10%);
  transition: .3s;
}

</style>