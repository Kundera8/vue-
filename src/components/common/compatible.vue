/*
 * @file 兼容性
 * @Author Parker
 * @Create 2017-08-02 16:49:06
 * @Modified Parker 2017-08-02 16:49:06
 */
<template>
  <div class="login-home">
    <div class="login-wrap">
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple">{{ title }}</div></el-col>
      </el-row>
      <el-row
        v-for="item in browserContent"
        :key="item.title" >
        <el-col :span="6"><div class="grid-content bg-purple">{{ item.title}}</div></el-col>
        <el-col :span="18"><div class="grid-content bg-purple-light"><a :href="item.url" target='_blank'> {{ item.name}}</a></div></el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'downloadbrowser',
  data () {
    return {
      title: '当前浏览器所对应的版本不支持本系统，请您下载以下浏览器来使用系统',
      browserContent: [{
        title: '方案一',
        url: 'http://se.360.cn/',
        name: '360浏览器官方下载地址'
      }, {
        title: '方案二',
        url: 'http://www.firefox.com.cn/',
        name: '火狐浏览器官方下载地址'
      }, {
        title: '方案三',
        url: 'http://browser.qq.com/',
        name: 'QQ浏览器官方下载地址'
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
  .login-wrap {
    display: inline-block;
    width: 300px;
    margin-top: 30px;
    padding: 0 20px;
    border-radius: 5px;
    margin-bottom: 40px;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    text-align: center;
    padding: 6px 7px 6px 7px
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
