<template>
<html>
<body style="width: 1000px; margin: auto">
<div style="margin-bottom: 100px;text-align: left; width: 1000px">
  <br/>
  <div style="width: 715px; font-weight: bold; font-size: 30px; margin: auto; float: left; margin-left: 100px">
    {{this.$store.state.projectname}}
  </div>
  <div style="width: 100px; float: left"><el-button type="danger" @click="backteam">返回</el-button></div>
  <br/><br/>
  <el-divider></el-divider>
  <div style="margin-left: 100px">
  <a href="https://project-design-seven.vercel.app/"><el-button type="info" plain>设计原型</el-button></a>&nbsp;&nbsp;
  <a href="https://app.diagrams.net/"><el-button type="info" plain>绘制图</el-button></a>&nbsp;&nbsp;
  <el-button type="info" plain>文档编辑</el-button>
  </div>
  <br/>
  <br/>
  <div style="margin: auto; width: 800px">
    <br/>
    <div style="width: 800px; text-align: left" v-for="(document) in documentlist" :key="document.id">
      <div style="width: 200px; float: left">{{document.name}}</div>
      <div style="width: 600px"><el-button style="position: relative; left: 500px" type="primary" @click="totext(document.id)" round plain>文档详情</el-button></div>
      <el-divider></el-divider>
    </div>
  </div>
  <div style="margin: auto; width: 800px">
    <br/>
    <div style="width: 800px; text-align: left">
      <div style="width: 200px; float: left">1234</div>
      <div style="width: 600px"><el-button style="position: relative; left: 500px" type="primary" @click="totext" round plain>文档详情</el-button></div>
      <el-divider></el-divider>
    </div>
  </div>
  <div style="margin: auto; width: 800px">
    <br/>
    <div style="width: 800px; text-align: left">
      <div style="width: 200px; float: left">1234</div>
      <div style="width: 600px"><el-button style="position: relative; left: 500px" type="primary" @click="totext" round plain>文档详情</el-button></div>
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
    backteam(){
      this.$router.push('/teampage');
    },
    totext() {
      this.$router.push('/TextEditor');
    }
  }
}
</script>

<style scoped>

</style>