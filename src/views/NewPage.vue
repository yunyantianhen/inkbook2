<template>
<html>
<body>
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
    <el-menu-item index="1">
      <router-link to="/personpage" style="text-decoration-line: none">
        <i class="el-icon-menu"></i>
        <span slot="title">主页</span>
      </router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/personpage" style="text-decoration-line: none">
        <i class="el-icon-menu"></i>
        <span style="color: white;">个人资料</span>
      </router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link to="/personpage" style="text-decoration-line: none">
        <i class="el-icon-menu"></i>
        <span slot="title">团队管理</span>
      </router-link>
    </el-menu-item>
    <el-menu-item index="4">
      <router-link to="/personpage" style="text-decoration-line: none">
        <i class="el-icon-menu"></i>
        <span slot="title">项目管理</span>
      </router-link>
    </el-menu-item>
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
  1234
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

</style>