<template>
<html>
  <body style="width: 1400px; margin: auto">
    <el-tabs :tab-position="tabPosition" style="height: 1000px;">
      <el-tab-pane label="个人资料">
        <div class="information">
          <div style="height: 100px">
            <img class="head" src="../img/img.png">
          </div>
          <div style="height: 200px">
            <div class="small">云烟</div>
            <div class="small">高进</div>
            <div class="small">809816252@qq.com</div>
            <div class="small">管理员</div>
          </div>
        </div>
        <div class="submit_information">
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
        <div>
          <el-button type="danger" @click="open">登!录!</el-button>
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
            <el-tab-pane label="我创建的">
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="item_right">
          <el-row>
            <el-button type="primary">创建项目</el-button>
          </el-row>
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
      old_nickname: '',
      old_name: '',
      old_mail: '',
      old_identity: '',
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
}
.submit_information{
  width: 800px;
  height: 1000px;
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