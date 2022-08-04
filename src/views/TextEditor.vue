<template>
  <body style="width: 1500px;margin: auto;">
  <div style="width: 300px;position: fixed;height: 100%">
    <el-col :span="12">
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">个人资料</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-document"></i>
          <span slot="title">团队管理</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">项目管理</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
  <div style="position: fixed;left: 159px;height: 100%">
    <el-divider direction="vertical"></el-divider>
  </div>
  <div style="width: 430px;position: fixed;left: 200px">
    <el-col :span="12">
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">个人资料</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-document"></i>
          <span slot="title">团队管理</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">项目管理</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
  <div>
    <div style="margin-left: 450px;margin-bottom: 100px;text-align: left">
      <div>
        <el-page-header @back="goBack" content="项目管理">
        </el-page-header>
      </div>
      <div>
        <h1>
          标题
        </h1>
        <h5>
          文档简介
        </h5>
      </div>
    </div>
    <div style="margin-left: 400px">
      <div style="text-align: left" id="vditor" name="description" ></div>
    </div>
  </div>
  </body>
</template>
<script>
import Vditor from "vditor"
import "vditor/dist/index.css"
export default {
  data(){
    return{
      contentEditor:"",
      textCon:""
    }
  },
  mounted(){
    this.contentEditor = new Vditor('vditor', {
      height: 360,
      toolbarConfig: {
        pin: true,
      },
      cache: {
        enable: false,
      },
      after: () => {
        this.contentEditor.setValue('## hello, Vditor + Vue!')
      },
    })
  },
  methods:{
    goBack() {
      window.alert(this.contentEditor.getValue());
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>