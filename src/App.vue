<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
L2Dwidget.init({ 
    　　"model": {jsonPath:"https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json","scale": 1 }, 
    　　"display": { "position": "right", "width": 100, "height": 140,"hOffset": 0, "vOffset": -20 }, 
    　　"mobile": { "show": true, "scale": 0.5 }, 
    　　"react": { "opacityDefault": 0.7, "opacityOnHover": 0.2 } });
</script>
<style lang="less">
  @import url('./assets/css/common.css');
</style>
