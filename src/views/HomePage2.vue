<template>
  <html>
  <body>
  <div id="background" style="height: 120px; width: 1510px"></div>
  <div></div>
  <el-row class="tac" style="float: left">
    <el-col :span="12">
      <el-menu
          default-active="1"
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
    <img style="height: 200px" src="../img/tubiao2.png">
    <div style="width: 800px; height: 200px;">
      1
    </div>
  </div>
  </body>
  </html>
</template>

<script>
export default {
  name: "NewPage",
  data() {
    return {
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
#background{
  width: 100%;
  height: 100%;
  border: 1px #1A4BAF;
  background-image: url("../../src/img/星空4.jpg");
  background-size: cover;
  background-attachment: fixed;
}
</style>