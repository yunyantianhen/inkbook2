<template>
<html>
<body style="width: 800px; margin: auto">
<br/>
<div style="width: 600px; font-size: 30px; font-weight: bold; text-align: left; margin-left: 50px; float: left">{{this.$store.state.teamname}}</div>
<div style="width: 100px; float: left"><el-button type="danger" @click="back">返回</el-button></div>
<br/><br/>
<el-divider></el-divider>
<div style="width: 800px; margin: auto">
  <div style="width: 800px; text-align: left">
    人员组成
    <br/>
    <br/>
  </div>
  <div style="width: 400px; float: left">
    <div style="height: 40px" v-for="(member) in memberlist" :key="member.id">{{member.name}}</div>
  </div>
  <div style="width: 400px; float: left">
    <div style="height: 40px" v-for="(member) in memberlist" :key="member.id">{{member.identity}}</div>
  </div>
  <div style="width: 800px; text-align: left">
    负责项目
    <br/>
    <br/>
  </div>
  <div style="margin: auto; width: 800px" v-for="(project) in projectlist" :key="project.id">
    <br/>
    <div style="width: 800px; text-align: left">
      {{project.name}}
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
    return{
      teamname: "",
      memberlist: [],
      projectlist: []
    }
  },
  created() {
    var i = 0;
    this.$axios.post('/team/showMember/',{teamid:this.$store.state.teamid}).then(
        res =>{
          for( i = 0; i < res.data.num; i++ )
          {
            this.memberlist.push({
              id:res.data.list[i].id,
              name:res.data.list[i].name,
              identity:res.data.list[i].identity
            })
          }
        }
    )
    this.$axios.post('/project/list_project/',{team_id:this.$store.state.teamid}).then(
        res =>{
          for( i = 0 ; i < res.data.data.number ; i++)
          {
            this.projectlist.push({
              id:res.data.data.project[i].id,
              name:res.data.data.project[i].name,
              team:res.data.data.project[i].team
            })
          }
        }
    )
  },
  methods: {
    toitem() {
      this.$router.push('/itempage');
    },
    back() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>

</style>