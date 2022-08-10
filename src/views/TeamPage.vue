<template>
<html>
<body>
<div id="background" style="height: 120px; "></div>
<div style="height: 40px; box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
  <div style="position: relative; bottom: 40px; left: 50px; width: 300px;">
    <img class="head" src="../img/3.png">
  </div>
  <div style="position: relative; bottom: 97px; left: 250px; font-size: 20px; font-weight: bold; width: 100px">
    云烟
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
          default-active="5"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="height: 703px; width: 155px">
        <router-link to="/teampage" style="text-decoration-line: none;">
          <el-menu-item index="5">
            <i class="el-icon-menu"></i>
            <span style="color: white;">团队详情</span>
          </el-menu-item>
        </router-link>
        <router-link to="/teampage" style="text-decoration-line: none;">
          <el-menu-item index="6">
            <i class="el-icon-menu"></i>
            <span style="color: white;">文档中心</span>
          </el-menu-item>
        </router-link>
      </el-menu>
    </el-col>
  </el-row>
  <div style="width: 1100px; float: left">
    <div style="width: 1100px; float: left; margin: auto">
      <br/>
      <div style="width: 600px; font-size: 30px; font-weight: bold; text-align: left; margin-left: 50px; float: left">
        {{this.teamname}}
      </div>
      <div style="width: 100px; float: left; position: relative; left: 300px"><el-button type="danger" @click="back">返回</el-button></div>
      <br/><br/>
      <el-divider></el-divider>
      <div style="width: 1035px; margin: auto">
        <el-tabs type="border-card">
          <el-tab-pane label="人员组成">
            <el-button style="position: relative; left: 400px" type="info" @click="invite_user = true" plain>邀请</el-button>
            <el-dialog title="邀请成员" :visible.sync="invite_user" width="500px" @close="inviting">
              <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="110px">
                <el-form-item label="被邀请人邮箱" prop="name">
                  <el-input v-model="addForm.email"></el-input>
                </el-form-item>
              </el-form>
              <!--底部区域-->
              <span slot="footer" class="dialog-footer">
              <el-button @click="invite_user = false">取 消</el-button>
              <el-button type="primary" @click="addUser">确 定</el-button>
            </span>
            </el-dialog>
            <el-table
                :data="memberlist"
                stripe
                style="width: 1000px;">
              <el-table-column
                  prop="username"
                  label="昵称"
                  width="200">
              </el-table-column>
              <el-table-column
                  prop="name"
                  label="真实姓名"
                  width="200">
              </el-table-column>
              <el-table-column
                  prop="mail"
                  label="邮箱"
                  width="200">
              </el-table-column>
              <el-table-column
                  prop="identity"
                  label="身份"
                  width="200">
              </el-table-column>
              <el-table-column
                  width="200">
                <template slot-scope="scope">
                  <!--<el-button type="text" style="color: #409EFF; text-decoration-line: none" @click="123">设置为管理员</el-button>-->
                  <el-button type="text" icon="el-icon-user" @click="BecomeAdministrator(scope.row.mail)">设置管理员</el-button>
                  <el-button type="text" icon="el-icon-delete" @click="leave(scope.$index)">移出</el-button>
                  <!--<el-button type="text" style="color: #409EFF; text-decoration-line: none" @click="123">移出队伍</el-button>-->
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="负责项目">
            <el-input
                placeholder="请输入搜索信息"
                v-model="input_search"
                clearable
            style="width: 400px; position: relative; right: 200px">
            </el-input>
            <el-button style="position: relative; right: 200px" type="primary" @click="search" plain>搜索</el-button>
            <el-button style="position: relative; left: 100px" type="info" @click="addDialogVisible = true" plain>创建项目</el-button>
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
            <div style="width: 600px; float: left; height: 50px; text-align: left">
              <br/>
              <template>
                <el-radio-group v-model="sorting_factor">
                  <el-radio :label="1">按创建时间排序</el-radio>
                  <el-radio :label="2">按最近修改时间排序</el-radio>
                  <el-radio :label="3">按项目名称排序</el-radio>
                </el-radio-group>
              </template>
            </div>
            <div style="width: 300px; float: left; height: 50px; text-align: right">
              <br/>
              <template>
                <el-radio-group v-model="sorting_order">
                  <el-radio :label="0">正序</el-radio>
                  <el-radio :label="1">倒序</el-radio>
                </el-radio-group>
              </template>
            </div>
            <el-table
                :data="projectlist"
                stripe
                style="width: 1000px;">
              <el-table-column
                  prop="name"
                  label="项目名称"
                  width="220">
              </el-table-column>
              <el-table-column
                  prop="Creation_time"
                  label="创建时间"
                  width="220">
              </el-table-column>
              <el-table-column
                  prop="Time_last_modified"
                  label="最近一次修改"
                  width="220">
              </el-table-column>
              <el-table-column
                  width="">
                <template slot-scope="scope">
                  <!--<el-button type="text" style="color: #409EFF; text-decoration-line: none" @click="123">设置为管理员</el-button>-->
                  <el-button type="text" icon="el-icon-more-outline" @click="toitem(scope.$index,scope.row.name)">项目详情</el-button>
                  <el-button type="text" icon="el-icon-edit" @click="reName(scope.$index)">重命名</el-button>
                  <el-dialog title="重命名" :visible.sync="rename_item" width="550px">
                    <el-form :model="addForm2" :rules="addFormRules2" ref="addFormRef" label-width="100px">
                      <el-form-item label="新项目名" prop="name">
                        <el-input v-model="addForm2.name"></el-input>
                      </el-form-item>
                    </el-form>
                    <span slot="footer" class="dialog-footer">
                      <el-button @click="rename_item = false">取 消</el-button>
                      <el-button type="primary" @click="renameitem">确 定</el-button>
                    </span>
                  </el-dialog>
                  &nbsp;
                  <el-button type="text" icon="el-icon-delete" @click="deleteitem(scope.$index)">删除</el-button>
                  <el-button type="text" icon="el-icon-copy-document" @click="copy(scope.$index)">复制</el-button>
                  <!--<el-button type="text" style="color: #409EFF; text-decoration-line: none" @click="123">移出队伍</el-button>-->
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="回收站">
            <el-table
                :data="RecycleList"
                stripe
                style="width: 1000px;">
              <el-table-column
                  prop="name"
                  label="项目名称"
                  width="250">
              </el-table-column>
              <el-table-column
                  prop="Creation_time"
                  label="创建时间"
                  width="250">
              </el-table-column>
              <el-table-column
                  prop="Time_last_modified"
                  label="删除时间"
                  width="250">
              </el-table-column>
              <el-table-column
                  width="">
                <template slot-scope="scope">
                  <!--<el-button type="text" style="color: #409EFF; text-decoration-line: none" @click="123">设置为管理员</el-button>-->
                  <el-button type="text" icon="el-icon-more-outline" @click="toitem(scope.$index,scope.row.name)">项目详情</el-button>
                  <el-button type="text" icon="el-icon-upload2" @click="recover(scope.$index)">恢复</el-button>
                  <el-button type="text" icon="el-icon-delete" @click="1234">删除</el-button>
                  <!--<el-button type="text" style="color: #409EFF; text-decoration-line: none" @click="123">移出队伍</el-button>-->
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
        <!--<div style="width: 800px; text-align: left">人员组成
          <el-button style="position: relative; left: 630px" type="primary" @click="invite_user = true" round plain>邀请</el-button>
          <el-dialog title="邀请成员" :visible.sync="invite_user" width="500px" @close="inviting">
            <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="110px">
              <el-form-item label="被邀请人邮箱" prop="name">
                <el-input v-model="addForm.email"></el-input>
              </el-form-item>
            </el-form>-->
            <!--底部区域-->
            <!--<span slot="footer" class="dialog-footer">
              <el-button @click="invite_user = false">取 消</el-button>
              <el-button type="primary" @click="addUser">确 定</el-button>
            </span>
          </el-dialog>
          <br/><br/>
        </div>-->
        <!--<div style="width: 400px; float: left">
          <div style="height: 40px" v-for="(member) in memberlist" :key="member.id">{{member.name}}</div>
        </div>
        <div style="width: 400px; float: left">
          <div style="height: 40px" v-for="(member) in memberlist" :key="member.id">
            <div style="height: 40px; width: 300px; font-weight: bold; float: left">{{member.identity}}</div>
            <div style="width: 100px; float: left">
              <i class="el-icon-upload2" @click="BecomeAdministrator(member.mail)"></i>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="el-icon-delete" @click="leave"></i>
            </div>
          </div>
        </div>-->
  <!--<div style="width: 800px; text-align: left">
    负责项目
    <el-button style="position: relative; left: 630px" type="primary" @click="addDialogVisible = true" round plain>创建项目</el-button>
    <el-dialog title="创建项目" :visible.sync="addDialogVisible" width="50%" @close="addDialogClosed">
      <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="150px">
        <el-form-item label="项目名" prop="name">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
            <el-button @click="addDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="addProject">确 定</el-button>
          </span>
    </el-dialog>
    <br/>
    <br/>
  </div>-->


  <!--<div style="margin: auto; width: 800px" v-for="(project) in projectlist" :key="project.id">
    <br/>
    <div style="width: 800px; text-align: left">
      <div style="width: 200px; float: left">{{project.name}}</div>
      <div style="width: 600px"><el-button style="position: relative; left: 500px" type="primary" @click="toitem(project.id,project.name)" round plain>项目详情</el-button></div>
      <el-divider></el-divider>
    </div>
  </div>-->
</div>
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
      itemid:0,
      rename_item: false,
      addForm2:{
        name: '',
        mail: '',
      },
      addFormRules2:{
        name:[{   required : true, message:'请输入修改后的项目名' ,trigger:'blur'},
          { min :1 ,max:15, message: '项目名的长度在1~15个字符之间', trigger: 'blur'}
        ]
      },
      input_search: '',//搜索团队输入框中的内容
      sorting_factor: '',//排序的因素
      sorting_order: '',//是正序还是倒序
      teamname: "",
      memberlist: [
        /*{
          username: '某科学的昵称1',
          name: 'JGG',
          mail: '1234@qq.com',
          identity: '神秘人',
        }, {
          username: '某科学的昵称2',
          name: 'JGG',
          mail: '1234@qq.com',
          identity: '神秘人',
        }, {
          username: '某科学的昵称3',
          name: 'JGG',
          mail: '1234@qq.com',
          identity: '神秘人',
        }, {
          username: '某科学的昵称4',
          name: 'JGG',
          mail: '1234@qq.com',
          identity: '神秘人',
        }*/
      ],
      projectlist: [
        /*{
          name: '某不科学的项目1',
          Creation_time: '2022-05-05',
          Time_last_modified: '2022-08-08',
        }, {
          name: '某不科学的项目2',
          Creation_time: '2022-05-05',
          Time_last_modified: '2022-08-08',
        }, {
          name: '某不科学的项目3',
          Creation_time: '2022-05-05',
          Time_last_modified: '2022-08-08',
        }, {
          name: '某不科学的项目4',
          Creation_time: '2022-05-05',
          Time_last_modified: '2022-08-08',
        }*/
      ],
      invite_user: false,
      addDialogVisible:false,
      addForm:{
        name: '',
        email: '',
      },
      addFormRules:{
      name:[
      {   required : true, message:'请输入被邀请人的邮箱' ,trigger:'blur'},
      { min :1 ,max:15, message: '项目名的长度在1~15个字符之间', trigger: 'blur'}
      ]
      },
      addForm1:{
        name:''
      },
      addFormRules1:{
        name:[
          { required : true, message:'请输入用户名' ,trigger:'blur'},
          { min :1 ,max:15, message: '项目名的长度在1~15个字符之间', trigger: 'blur'}
        ]
      },
      /*GroupList: [{
        nickname: '某科学的昵称1',
        name: 'JGG',
        mail: '1234@qq.com',
        identity: '神秘人',
      }, {
        nickname: '某科学的昵称2',
        name: 'JGG',
        mail: '1234@qq.com',
        identity: '神秘人',
      }, {
        nickname: '某科学的昵称3',
        name: 'JGG',
        mail: '1234@qq.com',
        identity: '神秘人',
      }, {
        nickname: '某科学的昵称4',
        name: 'JGG',
        mail: '1234@qq.com',
        identity: '神秘人',
      }],*/
      //团队成员列表

      /*ItemList: [{
        name: '某不科学的项目1',
        Creation_time: '2022-05-05',
        Time_last_modified: '2022-08-08',
      }, {
        name: '某不科学的项目2',
        Creation_time: '2022-05-05',
        Time_last_modified: '2022-08-08',
      }, {
        name: '某不科学的项目3',
        Creation_time: '2022-05-05',
        Time_last_modified: '2022-08-08',
      }, {
        name: '某不科学的项目4',
        Creation_time: '2022-05-05',
        Time_last_modified: '2022-08-08',
      }],*/
      //团队项目列表

      RecycleList: [
          /*{
        name: '某不科学的项目1',
        Creation_time: '2022-05-05',
        Time_last_modified: '2022-08-08',
      }, {
        name: '某不科学的项目2',
        Creation_time: '2022-05-05',
        Time_last_modified: '2022-08-08',
      }, {
        name: '某不科学的项目3',
        Creation_time: '2022-05-05',
        Time_last_modified: '2022-08-08',
      }, {
        name: '某不科学的项目4',
        Creation_time: '2022-05-05',
        Time_last_modified: '2022-08-08',
      }*/
      ],
      //回收站中项目列表

    }
  },
  created() {
    this.teamname = sessionStorage.getItem('teamname');
    var i = 0;
    this.$axios.post('/team/showMember/',{teamid:sessionStorage.getItem('teamid')}).then(
        res =>{
          for( i = 0; i < res.data.num; i++ )
          {
            this.memberlist.push({
              username:res.data.list[i].username,
              id:res.data.list[i].id,
              name:res.data.list[i].name,
              identity:res.data.list[i].identity,
              mail:res.data.list[i].mail
            })
          }
        }
    )
    this.$axios.post('/project/list_project/',{team_id:sessionStorage.getItem('teamid'),user_id:-1}).then(
        res =>{
          for( i = 0 ; i < res.data.data.number ; i++)
          {
            this.projectlist.push({
              id:res.data.data.project[i].id,
              name:res.data.data.project[i].name,
              team:res.data.data.project[i].team,
              Creation_time:res.data.data.project[i].create_time,
              Time_last_modified:res.data.data.project[i].update_time,
            })
          }
        }
    )
    this.$axios.post('/project/recycle_bin/',{'team_id':sessionStorage.getItem('teamid')}).then(
        res =>{
          for( i = 0 ; i < res.data.data.number ; i++)
          {
            this.RecycleList.push({
              id:res.data.data.project[i].id,
              name:res.data.data.project[i].name,
              team:res.data.data.project[i].team,
              Creation_time:res.data.data.project[i].create_time,
              Time_last_modified:res.data.data.project[i].update_time,
            })
          }
        }
    )
  },
  methods: {
    reName(id)
    {
      this.rename_item = true;
      this.itemid = id;
    },
    toregister() {
      this.$router.push('/register');
    },
    toitem(projectid,projectname) {
      sessionStorage.setItem('projectid',this.projectlist[projectid].id);
      sessionStorage.setItem('projectname',projectname);
      this.$router.push('/itempage');
    },
    back() {
      this.$router.push('/teamwork');
    },
    inviting() {

    },
    addUser(){
      this.$axios.post('/team/addMember/',{
        userid1:sessionStorage.getItem('userid'),
        email:this.addForm.email,
        teamid:sessionStorage.getItem('teamid'),
        identity:"成员",
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
    },//邀请成员
    renameitem(){
      this.$axios.post('/project/rename/',{'id':this.projectlist[this.itemid].id,'name':this.addForm2.name}).then(
          res =>{
            switch(res.data.result){
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
    order(){
      var m = "name";
      var i = 0;
      if(this.sorting_factor === 1)
          m = "create_time";
      else if(this.sorting_factor === 2)
          m = "update_time";
      this.projectlist.length = 0;
      this.$axios.post('/project/sort/',{'team_id':sessionStorage.getItem('teamid'),'order_by':m,'reverse':this.sorting_order}).then(
          res =>{
            for( i = 0 ; i < res.data.data.number ; i++)
            {
              this.projectlist.push({
                id:res.data.data.project[i].id,
                name:res.data.data.project[i].name,
                team:res.data.data.project[i].team,
              })
            }
          }
      )
    },
    search(){
      var i = 0;
      this.projectlist.length = 0;
      this.$axios.post('/project/search/',{'team_id':sessionStorage.getItem('teamid'),'keyword':this.input_search}).then(
          res =>{
            for( i = 0 ; i < res.data.data.number ; i++)
            {
              this.projectlist.push({
                id:res.data.data.project[i].id,
                name:res.data.data.project[i].name,
                team:res.data.data.project[i].team,
              })
            }
          }
      )
    },
    shuaxin(){
      var i = 0;
      this.$axios.post('/team/showMember/',{teamid:window.sessionStorage.getItem('teamid')}).then(
          res =>{
            for( i = 0; i < res.data.num; i++ )
            {
              this.memberlist.push({
                id:res.data.list[i].id,
                name:res.data.list[i].name,
                identity:res.data.list[i].identity,
                mail:res.data.list[i].mail
              })
            }
          }
      )
    },
    BecomeAdministrator(temail){
      this.$axios.post('/team/setManager/',{
        userid1:sessionStorage.getItem('userid'),
        email:temail,
        teamid:sessionStorage.getItem('teamid')
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
    },//将成员设置为管理员
    leave(id) {
      this.$axios.post('/team/deleteMember/',{
        userid1:sessionStorage.getItem('userid'),
        userid2:this.memberlist[id].id,
        teamid:sessionStorage.getItem('teamid')
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
    },//删除成员
    addDialogClosed(){
      this.$refs.addFormRef.resetFields()
    },
    deleteitem(id){
      this.$axios.post('/project/delete/',{'id':this.projectlist[id].id}).then(
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
    copy(id){
      this.$axios.post('/project/copy/',{'id':this.projectlist[id].id,'user_id':sessionStorage.getItem('userid')}).then(
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
    recover(id){
      this.$axios.post('/project/recover/',{'id':this.RecycleList[id].id}).then(
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
    addProject(){
      this.$refs.addFormRef.validate(async valid =>{
        if(!valid) return
        //可以发起注册的网络请求
        const {data:res}= await this.$axios.post("/project/create/",
            {"name":this.addForm.name,"team_id":sessionStorage.getItem('teamid'),"user_id":sessionStorage.getItem('userid')});
        if(res.result === 0) return this.$message.error(res.msg)
        this.$message.success("创建成功");
        this.addDialogVisible=false;
      })
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