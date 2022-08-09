<template>
<html>
<body>
<el-row class="tac" style="float: left">
  <el-col :span="12">
    <el-menu
        default-active="3"
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

      active-text-color="#ffd04b"
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
          default-active="6"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="height: 703px; width: 155px">
        <router-link to="/itempage" style="text-decoration-line: none;">
          <el-menu-item index="6">
            <i class="el-icon-menu"></i>
            <span style="color: white;">项目详情</span>
          </el-menu-item>
        </router-link>
      </el-menu>
    </el-col>
  </el-row>
  <div style="width: 1100px; float: left">
  <div style="width: 715px; font-weight: bold; font-size: 30px; margin: auto; float: left; margin-left: 100px">
    {{this.projectname}}
  </div>
  <div style="width: 100px; float: left"><el-button type="danger" @click="backteam">返回</el-button></div>
  <br/><br/>
  <el-divider></el-divider>
  <div style="margin-right: 700px; height: 50px">
    <el-button type="info" plain @click="todesign()">设计原型</el-button>&nbsp;&nbsp;
  <a href="https://app.diagrams.net/"><el-button type="info" plain>绘制图</el-button></a>&nbsp;&nbsp;
  <el-button type="info" @click="found_text=true" plain>创建文档</el-button>
    <el-dialog title="创建文档" :visible.sync="found_text" width="500px" @close="founding_text">
      <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="110px">
        <el-form-item label="文档名" prop="name">
          <el-input v-model="addForm.mail"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
            <el-button @click="found_text = false">取 消</el-button>
            <el-button type="primary" @click="addText">确 定</el-button>
          </span>
    </el-dialog>
  </div>
    <div style="width: 1000px; margin: auto">
    <el-table
        :data="documentlist"
        stripe
        style="width: 1000px;">
      <el-table-column
          prop="name"
          label="文档名"
          width="240">
      </el-table-column>
      <el-table-column
          prop="Creation_time"
          label="创建时间"
          width="240">
      </el-table-column>
      <el-table-column
          prop="Time_last_modified"
          label="最近一次修改时间"
          width="240">
      </el-table-column>
      <el-table-column
          width="">
        <template slot-scope="scope">
          <!--<el-button type="text" style="color: #409EFF; text-decoration-line: none" @click="123">设置为管理员</el-button>-->
          <el-button type="text" icon="el-icon-more-outline" @click="totext(scope.$index,scope.row.name)">文档详情</el-button>
          <el-button type="text" icon="el-icon-edit" @click="12345">重命名</el-button>
          <el-button type="text" icon="el-icon-delete" @click="deletedocument(scope.$index)">删除</el-button>
          <!--<el-button type="text" style="color: #409EFF; text-decoration-line: none" @click="123">移出队伍</el-button>-->
        </template>
      </el-table-column>
    </el-table>
  <!--<br/>
  <br/>
  <div style="margin: auto; width: 800px">
    <br/>
    <div style="width: 800px; text-align: left" v-for="(document) in documentlist" :key="document.id">
      <div style="width: 200px; float: left">{{document.name}}</div>
      <div style="width: 600px">
        <el-button style="position: relative; left: 450px" type="primary" @click="totext(document.id,document.name)" plain>文档详情</el-button>
        <el-button style="position: relative; left: 440px" type="primary" icon="el-icon-delete" plain @click="deletedocument(document.id)"></el-button>
      </div>
      <el-divider></el-divider>
    </div>
  </div>-->
    </div>
</div>
</div>
</body>
</html>
</template>

<script>
export default {
  name: "ItemPage",
  data(){
    return{
      projectname:"",
      documentlist:[
        /*{
          name: '某不科学的文档1',
          Creation_time: '2022-05-05',
          Time_last_modified: '2022-08-08',
        }, {
          name: '某不科学的文档2',
          Creation_time: '2022-05-05',
          Time_last_modified: '2022-08-08',
        }, {
          name: '某不科学的文档3',
          Creation_time: '2022-05-05',
          Time_last_modified: '2022-08-08',
        }, {
          name: '某不科学的文档4',
          Creation_time: '2022-05-05',
          Time_last_modified: '2022-08-08',
        }*/
      ],
      found_text: false,
      addForm:{
        name: '',
        mail: '',
      },
      addFormRules:{
        name:[{   required : true, message:'请输入要创建的文档名字' ,trigger:'blur'},
          { min :1 ,max:15, message: '项目名的长度在1~15个字符之间', trigger: 'blur'}
          ]
        },
      /*FileList: [{
        name: '某不科学的文档1',
        Creation_time: '2022-05-05',
        Time_last_modified: '2022-08-08',
      }, {
        name: '某不科学的文档2',
        Creation_time: '2022-05-05',
        Time_last_modified: '2022-08-08',
      }, {
        name: '某不科学的文档3',
        Creation_time: '2022-05-05',
        Time_last_modified: '2022-08-08',
      }, {
        name: '某不科学的文档4',
        Creation_time: '2022-05-05',
        Time_last_modified: '2022-08-08',
      }],*///文档列表
    }
  },
  created() {
    this.projectname = sessionStorage.getItem('projectname');
    var i = 0;
    this.$axios.post('/document/list_document/',{project_id:sessionStorage.getItem('projectid')}).then(
        res => {
          for( i = 0 ; i < res.data.data.number; i++)
          {
            this.documentlist.push({
              id:res.data.data.document[i].id,
              name:res.data.data.document[i].name,
            })
          }
        }
    )
  },
  methods: {
    backteam(){
      this.$router.push('/teampage');
    },
    totext(documentid,documentname) {
      sessionStorage.setItem('documentid',this.documentlist[documentid].id);
      sessionStorage.setItem('documentname',documentname);
      this.$router.push('/TextEditor');
    },
    todesign(){
      this.$router.push('/design');
    },
    founding_text(){
    },
    addText(){
      this.$axios.post('/document/create/',{
      user_id:window.sessionStorage.getItem('userid'),
      project_id:sessionStorage.getItem('projectid'),
      name:this.addForm.mail,
      text:""
    }).then(
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
    deletedocument(documentid){
      this.$axios.post('/document/delete/',{id:documentid}).then(
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
    }
  }
}
</script>

<style scoped>

</style>