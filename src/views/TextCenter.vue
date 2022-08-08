<template>
  <body style="width: 1500px;margin: auto;">
    <div style="width: 300px;position: fixed;">
      <el-card class="box-card">
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </el-card>
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
      textCon:"",
      data: [{
        label: '团队1',
        id:1,
        children: [{
          label: '项目1',
          children: [{
            label: '文档1',
            id:2
          }]
        }]
      }, {
        label: '团队2',
        children: [{
          label: '项目2',
          children: [{
            label: '文档2'
          }]
        }, {
          label: '项目3',
          children: [{
            label: '文档3'
          }]
        }]
      }, {
        label: '团队3',
        children: [{
          label: '项目4',
          children: [{
            label: '文档4'
          }]
        }, {
          label: '项目5',
          children: [{
            label: '文档5'
          }]
        }]
      },{
        label: '团队3',
        children: [{
          label: '项目4',
          children: [{
            label: '文档4'
          }]
        }, {
          label: '项目5',
          children: [{
            label: '文档5'
          }]
        }]
      },{
        label: '团队3',
        children: [{
          label: '项目4',
          children: [{
            label: '文档4'
          }]
        }, {
          label: '项目5',
          children: [{
            label: '文档5'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
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
    },
    handleNodeClick(data) {
      window.alert(data.id);
      this.contentEditor.setValue(data.id);
      console.log(data);
    }
  }
}
</script>