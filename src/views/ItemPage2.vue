<template>
  <html>
  <body style="width: 1000px; margin: auto">
  <div style="margin-bottom: 100px;text-align: left; width: 1000px">
    <br/>
    <div style="width: 715px; font-weight: bold; font-size: 30px; margin: auto; float: left; margin-left: 100px">
      {{this.$store.state.projectname}}
    </div>
    <div style="width: 100px; float: left"><el-button type="danger" @click="backteam2">返回</el-button></div>
    <br/><br/>
    <el-divider></el-divider>
    <div style="margin-left: 100px">
      <el-button type="info" plain @click="todesign()">设计原型</el-button>
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
    <br/>
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
      documentlist:[],
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
    }
  },
  created() {
    var i = 0;
    this.$axios.post('/document/list_document/',{project_id:this.$store.state.projectid}).then(
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
    backteam2(){
      this.$router.push('/homepage');
    },
    totext(documentid,documentname) {
      this.$store.state.documentid = documentid;
      this.$store.state.documentname = documentname;
      this.$router.push('/TextEditor');
    },
    todesign(){
      this.$router.push('/design');
    },
    founding_text(){
    },
    addText(){
      this.$axios.post('/document/create/',{
        user_id:window.sessionStorage.getItem('id'),
        project_id:this.$store.state.projectid,
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