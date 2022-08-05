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
        {{this.$store.state.documentname}}
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
      textCon:"",
      text:""
    }
  },
  created() {
    this.$axios.post('/document/find/',{id:this.$store.state.documentid}).then(
        res =>{
          this.text = res.data.text;
          this.contentEditor.setValue(this.text);
        }
    )
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
        this.contentEditor.setValue(this.text);
      },
    })
  },
  methods:{
    submit_text(){
      this.$axios.post('/document/update/',{id:this.$store.state.documentid,text:this.contentEditor.getValue()}).then(
          res =>{
            switch (res.data.result){
              case 1:
                this.$message.success(res.data.msg);
                break;
              case 0:
                this.$message.error(res.data.msg);
                break;
            }
          }
      )
    },
    backitem(){
      this.$router.push('/itempage');
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