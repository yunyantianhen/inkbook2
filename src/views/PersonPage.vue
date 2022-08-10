<template>
  <html>
  <body>
  <div id="background" style="height: 120px; "></div>
  <div style="height: 40px; box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
    <div style="position: relative; bottom: 40px; left: 50px; width: 300px;">
      <img class="head" src="../img/3.png">
    </div>
    <div style="position: relative; bottom: 97px; left: 250px; font-size: 20px; font-weight: bold; width: 100px">
      {{this.username}}
    </div>
    <div style="position: relative; bottom: 122px; left: 1280px;width: 100px">
      <el-link type="info" @click="toregister" style="font-size: 18px">注销</el-link>
    </div>
    <div style="position: relative; bottom: 265px; left: 1180px;width: 100px">
      <img style="height: 100px" src="../img/baimoshu.png">
    </div>
  </div>
  <div style="height: 30px"></div>
  <el-row class="tac" style="float: left">
    <el-col :span="12">
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="height: 703px; width: 155px">
        <!--<el-submenu index="1">
         <div style="color: deepskyblue"></div>
        background-color="#545c64"
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>-->
        <router-link to="/homepage2" style="text-decoration-line: none">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span style="color: white;">主页</span>
          </el-menu-item>
        </router-link>
        <router-link to="/personpage" style="text-decoration-line: none">
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span style="color: white;">个人资料</span>
          </el-menu-item>
        </router-link>
        <router-link to="/teamwork" style="text-decoration-line: none">
          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span style="color: white;">团队管理</span>
          </el-menu-item>
        </router-link>
        <router-link to="/itemwork" style="text-decoration-line: none">
          <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <span style="color: white;">项目管理</span>
          </el-menu-item>
        </router-link>
        <!--<el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>-->
      </el-menu>
    </el-col>
  </el-row>
  <div>
    <el-row class="tac" style="float: left">
      <el-col :span="12">
        <el-menu
            default-active="5"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            style="height: 703px; width: 155px">
          <router-link to="/teampage" style="text-decoration-line: none;">
            <el-menu-item index="5">
              <i class="el-icon-menu"></i>
              <span style="color: white;">个人信息</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-col>
    </el-row>
    <div style="width: 1150px; float: left">
      <div style="height: 10px"></div>
    <div style="width: 800px; margin: auto">
      <el-tabs type="border-card">
        <el-tab-pane label="信息展示">
          <div style="height: 400px; width: 350px; float: left">
            <div style="height: 50px"></div>
            <div style="height: 200px">
              <img class="head" src="../img/3.png">
            </div>
          </div>
          <div style="height: 400px; width: 400px; float: left">
            <div style="height: 70px"></div>
              <div style="height: 200px; text-align: left">
                <div class="small"><span style="font-weight: bold">昵称:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{{this.old_nickname}}</div>
                <div class="small"><span style="font-weight: bold">姓名:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{{this.old_name}}</div>
                <div class="small"><span style="font-weight: bold">邮箱:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{{this.old_mail}}</div>
                <div class="small"><span style="font-weight: bold">签名:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{{this.old_identity}}</div>
              </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="信息修改">
          <div style="height: 400px; width: 350px; float: left">
            <div style="height: 50px"></div>
            <div style="height: 200px">
              <img class="head" src="../img/3.png">
            </div>
          </div>
          <div style="width: 400px; float: left">
            <div style="height: 20px"></div>
          <div style="text-align: left; margin-left: 50px; font-size: 18px; font-weight: bold">
            请在以下区域修改个人信息：
            <br/><br/>
          </div>
          <el-form ref="form" :model="form" style="text-align: left; margin-left: 50px">
            <el-form-item label="" style="margin-bottom: 20px; display: inline-block">
              昵称&nbsp;&nbsp;
              <el-input  v-model="form.nickname" style="width: 250px;" size="small" :placeholder="this.old_nickname" :value="this.old_nickname" clearable>
              </el-input>
            </el-form-item>
            <el-form-item label="" style="margin-bottom: 20px; display: inline-block">
              姓名&nbsp;&nbsp;
              <el-input  v-model="form.name" style="width: 250px;" size="small" :placeholder="this.old_name" :value="this.old_name" clearable>
              </el-input>
            </el-form-item>
            <el-form-item label="" style="margin-bottom: 20px; display: inline-block">
              邮箱&nbsp;&nbsp;
              <el-input  v-model="form.mail" style="width: 250px;" size="small" :placeholder="this.old_mail" :value="this.old_mail" clearable>
              </el-input>
            </el-form-item>
            <el-form-item label="" style="margin-bottom: 20px; display: inline-block">
              身份&nbsp;&nbsp;
              <el-input  v-model="form.identity" style="width: 250px;" size="small" :placeholder="this.old_identity" :value="this.old_identity" clearable>
              </el-input>
            </el-form-item>
          </el-form>
          <el-button @click="submit_all" type="primary" style="height: 40px; width: 70px; margin-left: 10px">提交</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    </div>
  </div>
  </body>
  </html>
</template>

<script>
import qs from "qs";

export default {
  name: "NewPage",
  data() {
    return {
      username:"",
      form: {
        nickname: '',
        name: '',
        mail: '',
        identity: '',
      },
      old_nickname: '*****',
      old_name: '*****',
      old_mail: '*****',
      old_identity: '*****',
    };
  },
  created() {
    this.username = sessionStorage.getItem('username');
    this.$axios.post('/user/show_info/',{id:sessionStorage.getItem('userid')}).then(
        res =>{
          this.old_nickname = res.data.username;
          this.old_name = res.data.name;
          this.old_mail = res.data.email;
        }
    )
  },
  methods: {
    toregister() {
      this.$router.push('/register');
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    submit_all() {
      this.$axios({
        method: 'post',
        url:'/user/modify_info/',
        data: qs.stringify({
          id:sessionStorage.getItem('userid'),
          username: this.form.nickname,
          name: this.form.name,
          email: this.form.mail,
        })
      }).then(
          res =>{
            switch (res.data.result) {
              case 1:
                this.$message.success("修改成功");
                this.old_nickname = this.form.nickname;
                this.old_name = this.form.name;
                this.old_mail = this.form.mail;
                this.old_identity = this.form.identity;
                break;
              case 0:
                this.$message.error(res.data.msg);
                break;
            }
          }
      )
    },
  }
}
</script>

<style scoped>
.head2{
  height: 180px;
  width: 180px;
  border-radius: 50%;
}
.small{
  width: 400px;
  height: 40px;
  text-align: left;
  margin-left: 50px;
}

#background{
  width: 100%;
  height: 100%;
  border: 1px #1A4BAF;
  background-image: url("../img/xingkong3.jpg");
  background-size: 750px;
  background-attachment: fixed;
}
.head{
  height: 100px;
  width: 100px;
  border-radius: 50%;
}
</style>