<template>
  <div id="sidebar" :class="{ active: isActive }">
      <ul class="nav_wrap">
      <li class="nav_item"><router-link to="/">首页</router-link></li>
      <li class="nav_item"><router-link to="/recommend">安利</router-link></li>
      <li class="nav_item"><router-link to="/">相册</router-link></li>
      <li class="nav_item"><router-link to="/">留言板</router-link></li>
      <li class="nav_item"><router-link to="/">记录</router-link></li>
      <li class="nav_item"><router-link to="/">维护</router-link></li>
      <li class="nav_item"><router-link to="/">联系</router-link></li>
    </ul>
    <i class="iconfont icongengduo" @click="showNav"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    showNav() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="less" scoped>
#sidebar {
  width: 140px;
  height: 100vh;
  position: absolute;
  top: 0;
  left: -140px;
  z-index: 999;
  opacity: 50%;
  transition: all 0.6s;
  display: none;
  background-color: #f2f8ff;
  &.active {
    left: 0;
    opacity: 1;
  }
}
.icongengduo {
  position: absolute;
  top: 0;
  right: -32px;
  font-size: 20px;
  color: #000;
  display: inline-block;
  padding: 8px;
  border-radius: 5px;
  background-color: #f2f8ff;
  transition: all 0.6s;
}
.nav_wrap{
    padding: 20px 0;
    .nav_item{
        text-align: center;
        a{
        display: inline-block;
        line-height: 40px;
        padding:0 30px;
        color: #333;
        text-shadow: 0px 0px 6px #5e5d5d2c;
        &:hover{
          color: #7daee6;
        }
      }
    }
}
@media screen and (max-width: 539px) {
  #sidebar {
    display: block;
  }
}
</style>