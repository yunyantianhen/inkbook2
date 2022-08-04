<template>
<html>
<body style="width: 800px; margin: auto">
<br/>
<div style="width: 600px; font-size: 30px; font-weight: bold; text-align: left; margin-left: 50px; float: left">企业1</div>
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
    <div style="height: 40px">成员1</div>
    <div style="height: 40px">成员2</div>
    <div style="height: 40px">成员3</div>
    <div style="height: 40px">成员4</div>
  </div>
  <div style="width: 400px; float: left">
    <div style="height: 40px; width: 300px; font-weight: bold; float: left">创建者</div>
    <div style="width: 100px; float: left">
      <i class="el-icon-upload2" @click="BecomeAdministrator"></i>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <i class="el-icon-delete" @click="leave"></i>
    </div>
    <div style="height: 40px; width: 300px; font-weight: bold; float: left">管理员</div>
    <div style="width: 100px; float: left">
      <i class="el-icon-upload2" @click="BecomeAdministrator"></i>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <i class="el-icon-delete" @click="leave"></i>
    </div>
    <div style="height: 40px; width: 300px; font-weight: bold; float: left">成员</div>
    <div style="width: 100px; float: left">
      <i class="el-icon-upload2" @click="BecomeAdministrator"></i>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <i class="el-icon-delete" @click="leave"></i>
    </div>
    <div style="height: 40px; width: 300px; font-weight: bold; float: left">成员</div>
    <div style="width: 100px; float: left">
      <i class="el-icon-upload2" @click="BecomeAdministrator"></i>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <i class="el-icon-delete" @click="leave"></i>
    </div>
  </div>
  <div style="width: 800px; text-align: left">
    负责项目
    <br/>
    <br/>
  </div>
  <div style="margin: auto; width: 800px">
    <br/>
    <div style="width: 800px; text-align: left">
      项目1
      <el-button style="position: relative; left: 650px" type="primary" @click="toitem" round plain>项目详情</el-button>
      <el-divider></el-divider>

    </div>
    <div style="width: 800px; text-align: left">
      项目2
      <el-button style="position: relative; left: 650px" type="primary" @click="toitem" round plain>项目详情</el-button>
      <el-divider></el-divider>
    </div>
    <div style="width: 800px; text-align: left">
      项目3
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
    return {
      invite_user: false,
      addForm:{
        name: '',
        mail: '',
      },
      addFormRules:{
        name:[
          { required : true, message:'请输入被邀请人的邮箱' ,trigger:'blur'},
          { min :1 ,max:15, message: '项目名的长度在1~15个字符之间', trigger: 'blur'}
        ]
      },
      teamList:[],
      projectList:[]
    }
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