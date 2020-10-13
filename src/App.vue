<template>
  <div id="app">

    <router-view/>
    
<van-tabbar route>
  <van-tabbar-item replace to="/beauty" icon="like-o">
    呵呵
  </van-tabbar-item>
  <van-tabbar-item replace to="/" icon="home-o">
    主页
  </van-tabbar-item>
    <van-tabbar-item replace to="/list" icon="bars">
    列表
  </van-tabbar-item>
</van-tabbar>


  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
