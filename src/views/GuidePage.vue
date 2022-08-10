<template>
<html>
<div id="background">
  <div style="height: 700px">
    <div style="width: 700px; float: left">
      <div style="height: 30px"></div>
      <div style="height: 170px">
        <img style="height: 120px; margin-right: 200px" src="../img/baimoshu.png">
      </div>
      <div style="height: 100px; font-size: 30px; font-weight: bold; color: white">
        新一代软件工程与协作管理平台
      </div>
      <div style="height: 100px; font-size: 25px; color: white">
        <span style="margin-right: 200px">·开源、简约、舒适</span><br/>
        <span style="margin-right: 275px">·实用、高效</span><br/>
        <span style="margin-right: 150px">·为个人个企业免费服务</span><br/>
      </div>
      <div style="margin-right: 200px">
        <br/>
        <br/><br/>
        <el-button style="background-color: khaki; height: 60px; width: 180px; font-size: 20px" round>点击体验 >></el-button>
      </div>
    </div>
    <div style="width: 700px; float: left">
      <div style="height: 50px"></div>
      <div style="height: 100px; text-align: left; margin-left: 300px">
      <el-button style="background-color: khaki; color: black; width: 120px" @click="tologon" plain>注册</el-button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <el-button style="background-color: white; color: black; width: 120px" @click="toregister" plain>登录</el-button>
      </div>
      <div style="text-align: left; margin-left: 300px">
        <img style="height: 400px" src="../img/moshu.png">
      </div>
    </div>
  </div>
</div>
</html>
</template>

<script>
export default {
  name: "GuidePage",
  methods: {
    toregister() {
      this.$router.push('/register');
    },
    tologon() {
      this.$router.push('/logonpage');
    },
  }
}
</script>

<style scoped>
#background{
  width: 100%;
  height: 100%;
  border: 1px #1A4BAF;
  background-image: url("../img/beijing2.png");
  background-size: cover;
  background-attachment: fixed;
}
</style>