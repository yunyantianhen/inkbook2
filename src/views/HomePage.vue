<template>
<html>
  <body style="width: 1400px; margin: auto">
    <el-tabs :tab-position="tabPosition" style="height: 1000px;">
      <el-tab-pane label="个人资料">
        <div class="information" >
          <br/><br/>
          <div style="height: 100px">
            <img class="head" src="../img/img.png">
          </div>
          <br>
          <div style="height: 200px">
            <div class="small"><span style="font-weight: bold">昵称:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{{this.old_nickname}}</div>
            <div class="small"><span style="font-weight: bold">姓名:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{{this.old_name}}</div>
            <div class="small"><span style="font-weight: bold">邮箱:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{{this.old_mail}}</div>
            <div class="small"><span style="font-weight: bold">身份:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{{this.old_identity}}</div>
          </div>
        </div>
        <div class="submit_information">
          <br/><br/><br/>
          <div style="text-align: left; margin-left: 150px; font-size: 20px; font-weight: bold">
            请在以下区域修改个人信息：
            <br/><br/>
          </div>
          <el-form ref="form" :model="form">
            <el-form-item label="昵称" style="margin-bottom: 20px; display: inline-block">
              <el-input  v-model="form.nickname" style="width: 500px;"></el-input>
            </el-form-item>
            <el-form-item label="真实姓名" style="margin-bottom: 20px; display: inline-block">
              <el-input  v-model="form.name" style="width: 500px;"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" style="margin-bottom: 20px; display: inline-block">
              <el-input  v-model="form.mail" style="width: 500px;"></el-input>
            </el-form-item>
            <el-form-item label="身份" style="margin-bottom: 20px; display: inline-block">
              <el-input  v-model="form.identity" style="width: 500px;"></el-input>
            </el-form-item>
          </el-form>
          <el-button @click="submit_all" type="primary" style="height: 40px; width: 70px; margin-left: 10px">提交</el-button>
        </div>
        <div style="position: absolute; right: 100px; top: 50px">
          <router-link to="/"><el-button type="danger" @click="open">注&nbsp;销</el-button></router-link>
          <router-link to="/homepage2"><el-button type="danger" @click="open">实&nbsp;验</el-button></router-link>
        </div>
      </el-tab-pane>
      <el-tab-pane label="团队管理" >
        <div class="team_left">
        <el-tabs>
          <el-tab-pane label="我参与的" >
            <!--
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item :title="team.name" :name="team.id" v-for="(team) in teamList" :key="team.id">
                <div>成员1</div>
                <div>成员2</div>
              </el-collapse-item>
            </el-collapse>-->
            <div style="margin: auto; width: 800px" v-for="(team) in teamList" :key="team.id">
              <br/>
              <div style="width: 800px; text-align: left">
                <div style="width: 300px; float: left">{{team.name}}</div>
                <div style="width: 500px">
                  <el-button style="position: relative; left: 400px" type="primary" @click="toteam(team.id,team.name)" round plain>企业详情</el-button>
                </div>
                <el-divider></el-divider>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="我创建的">
            <div style="margin: auto; width: 800px">
              <br/>
              <div style="width: 800px; text-align: left" v-for="(team) in myteamlist" :key="team.id">
                <div style="width: 300px; float: left">{{team.name}}</div>
                <div style="width: 500px">
                  <el-button style="position: relative; left: 400px" type="primary" @click="toteam(team.id,team.name)" round plain>企业详情</el-button>
                </div>
                <el-divider></el-divider>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="通讯录">
            <div class="address_list">
              <div style="height: 45px">
                <img src="../img/img.png" style="height: 30px; width: 30px; border-radius: 50%">
                <span style="position: relative; top: -10px; left: 20px">云烟</span>
              </div>
              <div style="height: 45px">
                <img src="../img/img.png" style="height: 30px; width: 30px; border-radius: 50%">
                <span style="position: relative; top: -10px; left: 20px">云烟</span>
              </div>
              <div style="height: 45px">
                <img src="../img/img.png" style="height: 30px; width: 30px; border-radius: 50%">
                <span style="position: relative; top: -10px; left: 20px">云烟</span>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
        </div>
        <div class="team_right">
          <el-row>
            <el-button type="primary" @click="found_team = true">创建团队</el-button>
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
      </el-tab-pane>
      <el-tab-pane label="项目管理">
        <div class="item_left">
          <el-tabs>
            <el-tab-pane label="我参与的">
              <div style="margin: auto; width: 800px">
                <br/>
                <div style="width: 800px; text-align: left" v-for="(project) in projectList" :key="project.id">
                  <div style="width: 200px; float: left">{{project.name}}</div>
                  <div style="width: 500px">
                  <!--<el-button style="position: relative; left: 345px" type="primary" icon="el-icon-edit" plain></el-button>
                  <el-button style="position: relative; left: 335px" type="primary" @click="toitem2" plain>项目详情</el-button>
                  <el-button style="position: relative; left: 325px" type="primary" icon="el-icon-delete" plain></el-button>
                  </div>
                  <el-divider></el-divider>
                </div>
                <div style="width: 800px; text-align: left">
                  <div style="width: 200px; float: left">项目9</div>
                  <div style="width: 500px">
                  <el-button style="position: relative; left: 345px" type="primary" icon="el-icon-edit" plain></el-button>
                  <el-button style="position: relative; left: 335px" type="primary" @click="toitem2" plain>项目详情</el-button>
                  <el-button style="position: relative; left: 325px" type="primary" icon="el-icon-delete" plain></el-button>
                  </div>
                  <el-divider></el-divider>
                </div>
                <div style="width: 800px; text-align: left">
                  项目3
                  <el-button style="position: relative; left: 545px" type="primary" icon="el-icon-edit" plain></el-button>
                  <el-button style="position: relative; left: 535px" type="primary" @click="toitem2" plain>项目详情</el-button>-->
                  <el-button style="position: relative; left: 345px" type="primary" icon="el-icon-edit" plain></el-button>
                  <el-button style="position: relative; left: 335px" type="primary" @click="toitem(project.id,project.name)" plain>项目详情</el-button>
                  <el-button style="position: relative; left: 325px" type="primary" icon="el-icon-delete" plain @click="deleteitem(project.id)"></el-button>
                </div>
                  <el-divider></el-divider>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="回收站">
              <div style="margin: auto; width: 800px">
                <br/>
                <div style="width: 800px; text-align: left">
                  项目1
                  <el-button style="position: relative; left: 595px" type="primary" @click="toitem" plain>项目详情</el-button>
                  <el-button style="position: relative; left: 585px" type="primary" plain><i class="el-icon-upload el-icon--right"></i></el-button>
                  <el-divider></el-divider>

                </div>
                <div style="width: 800px; text-align: left">
                  项目2
                  <el-button style="position: relative; left: 595px" type="primary" @click="toitem" plain>项目详情</el-button>
                  <el-button style="position: relative; left: 585px" type="primary" plain><i class="el-icon-upload el-icon--right"></i></el-button>
                  <el-divider></el-divider>
                </div>
                <div style="width: 800px; text-align: left">
                  项目3
                  <el-button style="position: relative; left: 595px" type="primary" @click="toitem" plain>项目详情</el-button>
                  <el-button style="position: relative; left: 585px" type="primary" plain><i class="el-icon-upload el-icon--right"></i></el-button>
                  <el-divider></el-divider>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="item_right">
          <!--
          <el-row>
            <el-button type="primary" @click="addDialogVisible = true">创建项目</el-button>
          </el-row>
          -->
          <el-dialog title="创建项目" :visible.sync="addDialogVisible" width="50%" @close="addDialogClosed">
            <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="150px">
              <el-form-item label="项目名" prop="name">
                <el-input v-model="addForm.name"></el-input>
              </el-form-item>
            </el-form>
            <!--底部区域-->
            <span slot="footer" class="dialog-footer">
            <el-button @click="addDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="addProject">确 定</el-button>
          </span>
          </el-dialog>
        </div>
      </el-tab-pane>
    </el-tabs>
  </body>
</html>
</template>

<script>
import qs from "qs";
export default {
  name: "HomePage",
  data() {
    return {
      activeNames: ['1'],
      tabPosition: 'left',
      imageUrl: '',
      form: {
        nickname: '',
        name: '',
        mail: '',
        identity: '',
      },
      old_nickname: '*****',
      old_name: '*****',
      old_mail: '*****',
      old_identity: '*****',
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
      teamList:[],
      myteamlist:[],
      projectList:[],
    };
  },
  created() {
    this.$axios.post('/user/show_info/',{id:window.sessionStorage.getItem('id')}).then(
        res =>{
          this.old_nickname = res.data.username;
          this.old_name = res.data.name;
          this.old_mail = res.data.email;
        }
    )
    var i = 0;
    this.$axios.post('/team/showMyCreate/',{userid:window.sessionStorage.getItem('id')}).then(
        res =>{
          for( i = 0; i < res.data.num ; i++)
          {
            this.myteamlist.push({
              id: res.data.list[i].id,
              name: res.data.list[i].name,
            })
          }
        }
    )
    this.getTeamlist();
    this.getProjectlist();
  },
  methods: {
    toitem(projectid,projectname) {
      this.$store.state.projectid = projectid;
      this.$store.state.projectname = projectname;
      this.$router.push('/itempage');
      this.$router.push('/itempage');
    },
    toitem2() {
      this.$router.push('/itempage2');
    },
    toteam(team_id,team_name) {
      window.sessionStorage.setItem('teamid',team_id)
      this.$store.state.teamid = team_id;
      this.$store.state.teamname = team_name;
      this.$router.push('/teampage');
    },
    open(){
      this.$router.push('/');
    },
    handleChange(val) {
      console.log(val);
    },
    handleChange2(val) {
      console.log(val);
    },
    submit_all() {
      this.$axios({
        method: 'post',
        url:'/user/modify_info/',
        data: qs.stringify({
          id:window.sessionStorage.getItem('id'),
          username: this.form.nickname,
          name: this.form.name,
          email: this.form.mail,
        })
      }).then(
          res =>{
            switch (res.data.result) {
              case 1:
                this.$message.success("修改成功");
                this.old_nickname = this.form.nickname;
                this.old_name = this.form.name;
                this.old_mail = this.form.mail;
                this.old_identity = this.form.identity;
                break;
              case 0:
                this.$message.error(res.data.msg);
                break;
            }
          }
      )
    },
    addDialogClosed(){
      this.$refs.addFormRef.resetFields()
    },
    addProject(){
      this.$refs.addFormRef.validate(async valid =>{
        if(!valid) return
        //可以发起注册的网络请求
        const {data:res}= await this.$axios.post("/project/create/",
            {"name":this.addForm.name});
        if(res.result === 0) return this.$message.error(res.msg)
        this.$message.success("创建成功");
        this.addDialogVisible=false;
      })
    },
    design(){

    },
    getTeamlist(){
      var i = 0;
      this.$axios.post('/team/showTeam/',{userid: window.sessionStorage.getItem('id')}).then(
          res => {
            for( i = 0; i < res.data.num ; i++)
            this.teamList.push({
              id: res.data.list[i].id,
              name: res.data.list[i].name,
            })
          }
      )
    },
    getProjectlist(){
      var i = 0;
      this.$axios.post('/project/list_project/',{team_id:-1,user_id:window.sessionStorage.getItem('id')}).then(
          res => {
            for(i = 0 ; i < res.data.data.number ; i++)
            {
              this.projectList.push({
                id: res.data.data.project[i].id,
                name:res.data.data.project[i].name
              })
            }
          }
      )
    },
    founding() {

    },
    addTeam() {
      this.$axios.post('/team/createTeam/',{userid:this.$store.state.userid,teamname:this.addForm2.name}).then(
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
    deleteitem(itemid){
      this.$axios.post('/project/delete/',{id:itemid}).then(
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
  },
}
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.information{
  width: 400px;
  font-size: 18px;
  float: left;
}
.small{
  width: 400px;
  height: 40px;
  text-align: left;
  margin-left: 100px;
}
.submit_information{
  width: 800px;
  height: 1200px;
  font-size: 15px;
  float: left;
}
.head{
  height: 80px;
  width: 80px;
  border-radius: 50%;
}
.team_left{
  height: 500px;
  width: 900px;
  float: left;
}
.team_right{
  width: 300px;
  float: left;
}
.address_list{
  width: 900px;
  font-size: 16px;
  text-align: left;
}
.item_left{
  height: 500px;
  width: 900px;
  float: left;
}
.item_right{
  width: 300px;
  float: left;
}

.suffix2 {
  position: absolute;
  bottom: 0px;
  right: 10px;
  font-size:14px;
  line-height:10px;
  color:#999;
  cursor: pointer;
  float:right;
}

.wrap{
  width: 300px;
  height: 350px;
  padding: 0 25px 0 25px;
  line-height: 50px;
  position: relative;
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.85);;
  border-radius: 15px;
  color: #303133;
  top: 160px;
  border: 2px solid #ebeef5;
  box-shadow: 2px 2px 12px 2px rgb(0 0 0 / 10%);
  transition: .3s;
}
</style>