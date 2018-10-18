<template>
  <div id="app">
    <div style="width: 160px; height: 200px;" class="box">
      <moving-image :url="image1" :sizing="{height: 'height'}" moving="landscape"></moving-image>
    </div>
    <div style="width: 200px; height: 200px;" class="box">
      <moving-image :url="image2"></moving-image>
    </div>
    <div style="width: 360px; height: 200px;" class="box">
      <moving-image :url="image2" :sizing="{width: 'width*1.1'}" moving="portrait"></moving-image>
    </div>
    <div style="width: 360px; height: 360px;" class="box">
      <moving-image :url="image2" :sizing="{height: 'height*1.1'}" moving="bottomRight"></moving-image>
    </div>
    <div style="width: 140px; height: 140px; border-radius: 70px; border: 1px solid #ccc; overflow: hidden;" class="box">
      <moving-image :url="image4" :sizing="{height: 'height*1.1'}" moving="landscape"></moving-image>
    </div>
  </div>
</template>

<script>
import MovingImage from './components/MovingImage.vue'

export default {
  name: 'app',
  components: {
    MovingImage
  },
  data () {
    return {
      image1: '/3x4.jpg',
      image2: '/4x3.jpg',
      image3: '/ho.png',
      image4: '/lan.png'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
