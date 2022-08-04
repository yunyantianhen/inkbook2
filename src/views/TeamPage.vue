<template>
<html>
<body style="width: 800px; margin: auto">
<br/>
<div style="width: 800px; font-size: 30px; font-weight: bold; text-align: left; margin-left: 50px">企业1</div>
<el-divider></el-divider>
<div style="width: 800px; margin: auto">
  <div style="width: 800px; text-align: left">
    人员组成
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
    <div style="height: 40px; font-weight: bold">创建者</div>
    <div style="height: 40px; font-weight: bold">管理员</div>
    <div style="height: 40px; font-weight: bold">成员</div>
    <div style="height: 40px; font-weight: bold">成员</div>
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
  methods: {
    toitem() {
      this.$router.push('/itempage');
    },
  }
}
</script>

<style scoped>

</style>