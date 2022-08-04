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
  <el-button type="info" plain>文档编辑</el-button>
  </div>
  <br/>
  <br/>
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