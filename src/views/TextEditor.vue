<template>
  <body style="width: 1500px;margin: auto;">
  <!--<div style="width: 300px;position: fixed;height: 100%">
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
 </div>-->
  <div>
    <br/>
    <div style="margin: auto; margin-bottom: 100px;text-align: left; width: 1200px">
      <div style="width: 1000px; font-weight: bold; font-size: 30px; margin: auto">
        文档名
        <div style="width: 100px; float: right; margin-left: 500px"><el-button type="danger" @click="backitem">返回</el-button></div>
        <el-divider></el-divider>
      </div>
    </div>
    <div style="margin: auto; width: 1200px; height: 400px">
      <div style="text-align: left; height: 1500px" id="vditor" name="description"></div>
    </div>
    <el-button @click="submit_text" type="primary" style="height: 40px; width: 70px; margin-left: 880px">提交</el-button>
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
    submit_text(){

    },
    backitem(){
      this.$router.push('itempage');
    },
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