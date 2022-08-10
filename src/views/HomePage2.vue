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
    <!--<img style="height: 200px" src="../img/tubiao2.png">-->
    <div style="width: 1500px; height: 200px;">
      <div style="width: 50px; float: left">&nbsp;</div>
      <div style="width: 400px; float: left; box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
        <br/>
        我的团队
        <el-table
            :data="teamlist"
            stripe
            style="width: 1000px; margin: auto">
          <el-table-column
              prop="name"
              label="团队名称"
              width="150">
          </el-table-column>
          <el-table-column
              prop="creator"
              label="创建者"
              width="150">
          </el-table-column>
          <el-table-column
              label="详情"
              width="100">
            <template slot-scope="scope">
              <a href="TeamPage" style="color: #409EFF; text-decoration-line: none" @click="toteam(scope.$index,scope.row.name)">团队详情</a>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div style="width: 50px; float: left">&nbsp;</div>
      <div style="width: 400px; float: left; box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
        <br/>
        我的项目
        <el-table
            :data="projectlist"
            stripe
            style="width: 1000px; margin: auto">
          <el-table-column
              prop="name"
              label="项目名称"
              width="150">
          </el-table-column>
          <el-table-column
              prop="creator"
              label="所属团队"
              width="150">
          </el-table-column>
          <el-table-column
              width="100">
            <template slot-scope="scope">
              <a href="ItemPage" style="color: #409EFF; text-decoration-line: none" @click="toitem(scope.$index,scope.row.name)">项目详情</a>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div>
        <img style="height: 600px" src="../img/erciyuan.jpg">
      </div>
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
      username: "",
      date: new Date(),
      teamlist: [],
      projectlist: [],
    };
  },
  created() {
    var i = 0;
    this.username = sessionStorage.getItem('username');
    this.$axios.post('/team/showTeam/',{userid: sessionStorage.getItem('userid')}).then(
        res => {
          for( i = 0; i < res.data.num ; i++)
            this.teamlist.push({
              id: res.data.list[i].id,
              name: res.data.list[i].name,
              date:res.data.list[i].createTime,
              creator:res.data.list[i].creator
            })
        }
    )
    this.$axios.post('/project/list_project/',{team_id:-1,user_id:sessionStorage.getItem('userid')}).then(
        res =>{
          for( i = 0 ; i < res.data.data.number ; i++)
          {
            this.projectlist.push({
              id:res.data.data.project[i].id,
              name:res.data.data.project[i].name,
              team:res.data.data.project[i].team,
              creator:res.data.data.project[i].team,
              date:res.data.data.project[i].create_time,
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
    toregister() {
      this.$router.push('/register');
    },
    toitem(projectid,projectname) {
      sessionStorage.setItem('projectid',this.projectlist[projectid].id);
      sessionStorage.setItem('projectname',projectname);
      this.$router.push('/itempage');
    },
  }
}
</script>

<style scoped>
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