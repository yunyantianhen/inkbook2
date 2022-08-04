<template>
<html>
<body style="width: 1000px; margin: auto">
<div style="margin-bottom: 100px;text-align: left; width: 1000px">
  <br/>
  <div style="width: 715px; font-weight: bold; font-size: 30px; margin: auto; float: left; margin-left: 100px">
    项目1
  </div>
  <div style="width: 100px; float: left"><el-button type="danger" @click="backteam">返回</el-button></div>
  <br/><br/>
  <el-divider></el-divider>
  <div style="margin-left: 100px">
  <a href="https://project-design-seven.vercel.app/"><el-button type="info" plain>设计原型</el-button></a>&nbsp;&nbsp;
  <a href="https://app.diagrams.net/"><el-button type="info" plain>绘制图</el-button></a>&nbsp;&nbsp;
  <el-button type="info" @click="found_text=true" plain>创建文档</el-button>
    <el-dialog title="创建文档" :visible.sync="found_text" width="500px" @close="founding_text">
      <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="110px">
        <el-form-item label="文档名" prop="name">
          <el-input v-model="addForm.mail"></el-input>
        </el-form-item>
      </el-form>
      <!--底部区域-->
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
    <div style="width: 800px; text-align: left">
      <div style="width: 200px; float: left">1234</div>
      <div style="width: 600px">
        <el-button style="position: relative; left: 450px" type="primary" @click="totext" plain>文档详情</el-button>
        <el-button style="position: relative; left: 440px" type="primary" icon="el-icon-delete" plain></el-button>
      </div>
      <el-divider></el-divider>
    </div>
  </div>
  <div style="margin: auto; width: 800px">
    <br/>
    <div style="width: 800px; text-align: left">
      <div style="width: 200px; float: left">1234</div>
      <div style="width: 600px">
        <el-button style="position: relative; left: 450px" type="primary" @click="totext" plain>文档详情</el-button>
        <el-button style="position: relative; left: 440px" type="primary" icon="el-icon-delete" plain></el-button>
      </div>
      <el-divider></el-divider>
    </div>
  </div>
  <div style="margin: auto; width: 800px">
    <br/>
    <div style="width: 800px; text-align: left">
      <div style="width: 200px; float: left">1234</div>
      <div style="width: 600px">
        <el-button style="position: relative; left: 450px" type="primary" @click="totext" plain>文档详情</el-button>
        <el-button style="position: relative; left: 440px" type="primary" icon="el-icon-delete" plain></el-button>
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
      found_text: false,
      addForm:{
        name: '',
        mail: '',
      },
      addFormRules:{
        name:[
          {   required : true, message:'请输入要创建的文档名字' ,trigger:'blur'},
          { min :1 ,max:15, message: '项目名的长度在1~15个字符之间', trigger: 'blur'}
        ]
      },
    }
  },
  methods: {
    backteam(){
      this.$router.push('/teampage');
    },
    totext() {
      this.$router.push('/TextEditor');
    },
    founding_text(){

    },
    addText(){

    },
  }
}
</script>

<style scoped>

</style>