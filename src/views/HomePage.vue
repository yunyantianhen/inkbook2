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
          <router-link to="/register"><el-button type="danger" @click="open">登&nbsp;录</el-button></router-link>
        </div>
      </el-tab-pane>
      <el-tab-pane label="团队管理">
        <div class="team_left">
        <el-tabs>
          <el-tab-pane label="我参与的">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="企业1" name="1">
                <div>成员1</div>
                <div>成员2</div>
              </el-collapse-item>
              <el-collapse-item title="企业2" name="2">
                <div>成员1</div>
                <div>成员2</div>
              </el-collapse-item>
              <el-collapse-item title="企业3" name="3">
                <div>成员1</div>
                <div>成员2</div>
              </el-collapse-item>
              <el-collapse-item title="企业4" name="4">
                <div>成员1</div>
                <div>成员2</div>
              </el-collapse-item>
            </el-collapse>
          </el-tab-pane>
          <el-tab-pane label="我创建的">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="企业1" name="1">
                <div>成员1</div>
                <div>成员2</div>
              </el-collapse-item>
              <el-collapse-item title="企业2" name="2">
                <div>成员1</div>
                <div>成员2</div>
              </el-collapse-item>
              <el-collapse-item title="企业3" name="3">
                <div>成员1</div>
                <div>成员2</div>
              </el-collapse-item>
              <el-collapse-item title="企业4" name="4">
                <div>成员1</div>
                <div>成员22345</div>
              </el-collapse-item>
            </el-collapse>
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
            <el-button type="primary">创建团队</el-button>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane label="项目管理">
        <div class="item_left">
          <el-tabs>
            <el-tab-pane label="我参与的">
            </el-tab-pane>
            <el-tab-pane label="回收站">
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="item_right">
          <el-row>
            <el-button type="primary" @click="addDialogVisible = true">创建项目</el-button>
          </el-row>
          <el-dialog title="创建项目" :visible.sync="addDialogVisible" width="50%" @close="addDialogClosed">
            <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="150px">
              <el-form-item label="项目名" prop="name">
                <el-input v-model="addForm.name"></el-input>
              </el-form-item>
            </el-form>
            <!--底部区域-->
            <span slot="footer" class="dialog-footer">
            <el-button @click="addDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="addUser">确 定</el-button>
          </span>
          </el-dialog>>
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
      old_nickname: '云烟',
      old_name: '高进',
      old_mail: '809816252@qq.com',
      old_identity: '管理员',
      addDialogVisible:false,
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
    this.$axios.get().then(
        res =>{
          this.old_nickname=res.data.nickname;
          this.old_name=res.data.name;
          this.old_mail=res.data.mail;
          this.old_identity=res.data.identity;
        }
    );
  },
  methods: {
    open(){

    },
    handleChange(val) {
      console.log(val);
    },
    submit_all() {
      this.$axios({
        method: 'post',
        url:'',
        data: qs.stringify({
          nickname: this.form.nickname,
          name: this.form.name,
          mail: this.form.mail,
          identity: this.form.identity,
        })
      })
    },
    addDialogClosed(){
      this.$refs.addFormRef.resetFields()
    },
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