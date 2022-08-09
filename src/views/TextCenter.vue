<template>
  <body style="width: 1500px;margin: auto;">
    <div style="width: 300px;position: fixed;margin-top: 60px">
      <el-card class="box-card">
        <div style="margin-bottom: 10px;text-align: left">
          <el-button type="text" @click="open"><i class="el-icon-plus" @click="addText"></i></el-button>
        </div>
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </el-card>
    </div>
    <div>
      <div style="margin-top: 20px;margin-left:40px;text-align: left">
        <div>
        <el-page-header @back="goBack" content="文档中心">
        </el-page-header>
      </div>
      </div>
    </div>
    <div style="margin-left: 350px;">
      <div class="texte" style="text-align: left;" id="vditor" name="description" ></div>
    </div>
  </body>
</template>
<style scoped>
  .texte{
    height: 640px!important;
  }
</style>
<script>
import Vditor from "vditor"
import "vditor/dist/index.css"
export default {
  data(){
    return{
      contentEditor:"",
      textCon:"",
      data: [
      {
        name: '项目文档区',
        document: [
        {
          name: '项目1',
          document: [
          {
            name: '文档1',
            id:2
          }]
        }]
      },
        {
          name: '项目文档区',
          document: [
            {
              name: '项目1',
              document: [
                {
                  name: '文档1',
                  id:2
                }]
            }]
        },
        {
          name: '项目文档区',
          document: [
            {
              name: '项目1',
              document: [
                {
                  name: '文档1',
                  id:2
                }]
            }]
        },
      ],
      defaultProps: {
        children: 'document',
        label: 'name'
      }
    }
  },
  created() {
    this.$axios.post('/document/centre/',{team_id:1}).then(
        res =>{
          window.alert(res.data.msg);
          this.data = res.data.data;
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
        this.contentEditor.setValue('## hello, Vditor + Vue!')
      },
    })
  },
  methods:{
    goBack() {
      window.alert(this.$store.state.userid);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleNodeClick(data) {
      this.$axios.post('/document/find/',{id:data.id}).then(
          res =>{
            this.contentEditor.setValue(res.data.text);
          }
      )
      console.log(data);
    },
    addText(){

    },
    open() {
      this.$prompt('请输入新建文档标题', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(() => {
        this.$message({
          type: 'success',
          message: "新建文档成功"
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    }
  }
}
</script>