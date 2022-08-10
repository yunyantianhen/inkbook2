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
          <router-link to="/teamwork" style="text-decoration-line: none;">
            <el-menu-item index="5">
              <i class="el-icon-menu"></i>
              <span style="color: white;">我参与的</span>
            </el-menu-item>
          </router-link>
          <router-link to="/created" style="text-decoration-line: none">
            <el-menu-item index="6">
              <i class="el-icon-menu"></i>
              <span style="color: white;">我创建的</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-col>
    </el-row>
    <div style="width: 1100px; float: left; height: 50px; text-align: left; margin-left: 50px">
      <el-row>
        <el-button type="info" @click="found_team = true">创建团队</el-button>
        <el-dialog title="创建团队" :visible.sync="found_team" width="500px" @close="founding">
          <el-form :model="addForm2" :rules="addFormRules2" ref="addFormRef" label-width="80px">
            <el-form-item label="团队名" prop="name">
              <el-input v-model="addForm2.name"></el-input>
            </el-form-item>
          </el-form>
          <!--底部区域-->
          <span slot="footer" class="dialog-footer">
            <el-button @click="found_team = false">取 消</el-button>
            <el-button type="primary" @click="addTeam">确 定</el-button>
          </span>
        </el-dialog>
      </el-row>
    </div>
    <div style="width: 1100px; float: left">
      <el-table
          :data="myteamlist"
          stripe
          style="width: 1000px; margin: auto">
        <el-table-column
            prop="date"
            label="创建日期"
            width="250">
        </el-table-column>
        <el-table-column
            prop="name"
            label="团队名称"
            width="250">
        </el-table-column>
        <el-table-column
            prop="creator"
            label="创建者"
            width="250">
        </el-table-column>
        <el-table-column
            width="250">
          <a href="TeamPage" style="color: #409EFF; text-decoration-line: none">团队详情</a>
        </el-table-column>
      </el-table>
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
      myteamlist: [
          /*{
        date: '2016-05-02',
        name: '团队1',
        creator: '创建者竟是我自己',
      }, {
        date: '2016-05-04',
        name: '团队2',
        creator: '创建者竟是我自己'
      }, {
        date: '2016-05-01',
        name: '团队3',
        creator: '创建者竟是我自己'
      }, {
        date: '2016-05-03',
        name: '团队4',
        creator: '创建者竟是我自己'
      }*/
      ],
      found_team: false,
      addDialogVisible:false,
      addForm2:{
        name:''
      },
      addFormRules2:{
        name:[
          { required : true, message:'请输入团队名' ,trigger:'blur'},
          { min :1 ,max:15, message: '项目名的长度在1~15个字符之间', trigger: 'blur'}
        ]
      },
      addForm:{
        name:''
      },
      addFormRules:{
        name:[
          { required : true, message:'请输入用户名' ,trigger:'blur'},
          { min :1 ,max:15, message: '项目名的长度在1~15个字符之间', trigger: 'blur'}
        ]
      },
    };
  },
  created() {
    var i = 0;
    this.$axios.post('/team/showMyCreate/',{userid:sessionStorage.getItem('userid')}).then(
        res =>{
          for( i = 0; i < res.data.num ; i++)
          {
            this.myteamlist.push({
              id: res.data.list[i].id,
              name: res.data.list[i].name,
              date:res.data.list[i].createTime,
              creator:res.data.list[i].creator
            })
          }
        }
    )
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    founding() {

    },
    addTeam() {
      this.$axios.post('/team/createTeam/',{userid:window.sessionStorage.getItem('id'),teamname:this.addForm2.name}).then(
          res =>{
            switch (res.data.result)
            {
              case 1:
                this.$message.success(res.data.msg);
                break;
              case 2:
                this.$message.error(res.data.msg);
                break;
            }
          }
      )
    },
    /*handleOpen2(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose2(key, keyPath) {
      console.log(key, keyPath);
    }*/
  }
}
</script>

<style scoped>

</style>