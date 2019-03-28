<template>
  <div class="header">
    <div class="left">
      logo
      <span class="web-title">吉利TSP平台</span>
    </div>
    <div class="right">
      <el-dropdown @command="handleCommand">
        <div class="dropdown-link">
          <img :src="imgUrl" class="role-img" />
          <span class="role">管理员</span>
          <span class="username">{{userName}}</span>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="resetPwd">修改密码</el-dropdown-item>
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  name: 'headerComp',
  data () {
    return {
      resetVisible: false,
      imgUrl: require('@/assets/images/head.png')
    }
  },
  methods: {
    handleCommand (command) {
      if (command === 'resetPwd') {
        this.resetVisible = true
      } else if (command === 'logout') {
        this.logout()
      }
    },
    logout () {
      this.$confirm('确认退出吗?', '提示', {
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('handleLogOut').then(() => {
          this.$router.push('/login')
        })
      })
    }
  },
  computed: {
    userName () { return this.$store.getters.operatorBean.name }
  }
}
</script>
<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    height: 62px;
    line-height: 62px;
    padding: 0 24px;
    background-color: aquamarine;
    // .left {}
    .right {
      .dropdown-link {
        display: flex;
        align-items: center;
        .role-img {
          width: 40px;
          max-width: 100%;
        }
        .role {
          padding: 0 20px;
        }
      }
    }
  }
</style>
