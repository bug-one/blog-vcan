<template>
  <div class="nav">
    <ul class="nav_wrap">
      <li class="nav_item"><router-link to="/">首页</router-link></li>
      <li class="nav_item"><router-link to="/recommend">安利</router-link></li>
      <li class="nav_item"><router-link to="/">相册</router-link></li>
      <li class="nav_item"><router-link to="/">留言板</router-link></li>
      <li class="nav_item"><router-link to="/">记录</router-link></li>
      <li class="nav_item"><router-link to="/">维护</router-link></li>
      <li class="nav_item"><router-link to="/">联系</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.nav{
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0px -12px 20px 0px #000;
  .nav_wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .nav_item{
      box-shadow: auto;
      a{
        display: inline-block;
        line-height: 50px;
        padding: 0 20px;
        color: #333;
        text-shadow: 0px 0px 6px #5e5d5d2c;
        &:hover{
          color: #7daee6;
        }
      }
    }
  }
}
@media screen and (max-width: 539px) {
  .nav {
    display: none;
  }
}
</style>