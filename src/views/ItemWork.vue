<template>
  <html>
  <body>
  <el-row class="tac" style="float: left">
    <el-col :span="12">
      <el-menu
          default-active="4"
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
        <el-menu-item index="1">
          <router-link to="/homepage2" style="text-decoration-line: none">
            <i class="el-icon-menu"></i>
            <span style="color: white;">主页</span>
          </router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/personpage" style="text-decoration-line: none">
            <i class="el-icon-menu"></i>
            <span style="color: white;">个人资料</span>
          </router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <router-link to="/teamwork" style="text-decoration-line: none">
            <i class="el-icon-menu"></i>
            <span style="color: white;">团队管理</span>
          </router-link>
        </el-menu-item>
        <el-menu-item index="4">
          <router-link to="/itemwork" style="text-decoration-line: none">
            <i class="el-icon-menu"></i>
            <span style="color: white;">项目管理</span>
          </router-link>
        </el-menu-item>
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
          <el-menu-item index="5">
            <router-link to="/teamwork" style="text-decoration-line: none;">
              <i class="el-icon-menu"></i>
              <span style="color: white;">我参与的</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="6">
            <router-link to="/created" style="text-decoration-line: none">
              <i class="el-icon-menu"></i>
              <span style="color: white;">回收站</span>
            </router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  <div style="width: 1100px; float: left">
    <el-table
        :data="tableData"
        stripe
        style="width: 1000px; margin: auto">
      <el-table-column
          prop="date"
          label="创建日期"
          width="250">
      </el-table-column>
      <el-table-column
          prop="name"
          label="项目名称"
          width="250">
      </el-table-column>
      <el-table-column
          prop="creator"
          label="所属团队"
          width="250">
      </el-table-column>
      <el-table-column
          width="250">
        <a href="ItemPage" style="color: #409EFF; text-decoration-line: none">项目详情</a>
      </el-table-column>
    </el-table>
  </div>
  </div>
  </body>
  </html>
</template>

<script>
export default {
  name: "NewPage",
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '项目1',
        creator: '创建者1',
        detail: '团队详情'
      }, {
        date: '2016-05-04',
        name: '项目2',
        creator: '创建者2号'
      }, {
        date: '2016-05-01',
        name: '项目3',
        creator: '3号'
      }, {
        date: '2016-05-03',
        name: '项目4',
        creator: '4号神秘人'
      }],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>