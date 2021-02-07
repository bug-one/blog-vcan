<template>
  <div class="home">
    <div class="mask">
    <CommonHeader/>
    <NavigationBar/>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
import CommonHeader from '../components/CommonHeader'
import NavigationBar from '../components/NavigationBar'
export default {
  components:{
    CommonHeader,
    NavigationBar
  }
}
</script>

<style lang="less">
.home{
  width: 100vw;
  min-height: 100vh;
  background:url('../assets/images/your name15.png') center center / cover no-repeat fixed;

  .mask{
    width: 100vw;
  min-height: 100vh;
    background-color: rgba(255, 255, 255, 0.85);
  }
}
</style>
