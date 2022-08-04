<template>
<html>
<body style="width: 800px; margin: auto">
<br/>
<div style="width: 600px; font-size: 30px; font-weight: bold; text-align: left; margin-left: 50px; float: left">{{this.$store.state.teamname}}</div>
<div style="width: 100px; float: left"><el-button type="danger" @click="back">返回</el-button></div>
<br/><br/>
<el-divider></el-divider>
<div style="width: 800px; margin: auto">
  <div style="width: 800px; text-align: left">
    人员组成
    <el-button style="position: relative; left: 630px" type="primary" @click="invite_user = true" round plain>邀请</el-button>
    <el-dialog title="邀请成员" :visible.sync="invite_user" width="500px" @close="inviting">
      <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="110px">
        <el-form-item label="被邀请人邮箱" prop="name">
          <el-input v-model="addForm.mail"></el-input>
        </el-form-item>
      </el-form>
      <!--底部区域-->
      <span slot="footer" class="dialog-footer">
            <el-button @click="invite_user = false">取 消</el-button>
            <el-button type="primary" @click="addUser">确 定</el-button>
          </span>
    </el-dialog>>
    <br/>
    <br/>
  </div>
  <div style="width: 400px; float: left">
    <div style="height: 40px" v-for="(member) in memberlist" :key="member.id">{{member.name}}</div>
  </div>
  <div style="width: 400px; float: left">
    <div style="height: 40px" v-for="(member) in memberlist" :key="member.id">
      <div style="height: 40px; width: 300px; font-weight: bold; float: left">{{member.identity}}</div>
      <div style="width: 100px; float: left">
        <i class="el-icon-upload2" @click="BecomeAdministrator"></i>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i class="el-icon-delete" @click="leave"></i>
      </div>
    </div>
  </div>
  <div style="width: 800px; text-align: left">
    负责项目
    <br/>
    <br/>
  </div>
  <div style="margin: auto; width: 800px" v-for="(project) in projectlist" :key="project.id">
    <br/>
    <div style="width: 800px; text-align: left">
      {{project.name}}
      <el-button style="position: relative; left: 650px" type="primary" @click="toitem" round plain>项目详情</el-button>
      <el-divider></el-divider>
    </div>

  </div>
</div>
</body>
</html>
</template>

<script>
export default {
  name: "TeamPage",
  data() {
    return{
      teamname: "",
      memberlist: [],
      projectlist: [],
      invite_user: false,
      addForm:{
        name: '',
        mail: '',
      },
      addFormRules:{
      name:[
      {   required : true, message:'请输入被邀请人的邮箱' ,trigger:'blur'},
      { min :1 ,max:15, message: '项目名的长度在1~15个字符之间', trigger: 'blur'}
      ]
      },
    }
  },
  created() {
    var i = 0;
    this.$axios.post('/team/showMember/',{teamid:this.$store.state.teamid}).then(
        res =>{
          for( i = 0; i < res.data.num; i++ )
          {
            this.memberlist.push({
              id:res.data.list[i].id,
              name:res.data.list[i].name,
              identity:res.data.list[i].identity
            })
          }
        }
    )
    this.$axios.post('/project/list_project/',{team_id:this.$store.state.teamid}).then(
        res =>{
          for( i = 0 ; i < res.data.data.number ; i++)
          {
            this.projectlist.push({
              id:res.data.data.project[i].id,
              name:res.data.data.project[i].name,
              team:res.data.data.project[i].team
            })
          }
        }
    )
  },
  methods: {
    toitem() {
      this.$router.push('/itempage');
    },
    back() {
      this.$router.push('/');
    },
    inviting() {

    },
    addUser(){

    },//邀请成员
    BecomeAdministrator(){

    },//将成员设置为管理员
    leave() {

    },//删除成员
  }
}
</script>

<style scoped>

</style>