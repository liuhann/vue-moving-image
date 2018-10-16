<template>
  <div class="moving-image" :style="containerStyle">
    <vue-anime tag="img" :src="url" ref="image" :style="initStyle" @load="imageLoaded"
               :playing="playing" :duration="duration" :easing="easing" :loop="true" direction="alternate"
      :animate="animate">
    </vue-anime>
  </div>
</template>

<script>
import { VueAnime } from 'vue-anime'
import Mexp from 'math-expression-evaluator'
import movings from './movings'

export default {
  name: 'MovingImage',
  components: {
    VueAnime
  },
  props: {
    url: {
      type: String
    },
    sizing: {
      type: [Object],
      default () {
        return {}
      }
    },
    moving: {
      type: String
    },
    delay: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 4000
    },
    easing: {
      type: String,
      default: 'linear'
    }
  },
  data () {
    return {
      playing: false,
      container: {
        width: 100,
        height: 100
      },
      initStyle: {
        width: 'auto',
        height: 'auto',
        transform: '',
        opacity: ''
      },
      animate: {},
      actualImage: {
        width: 0,
        height: 0
      }
    }
  },
  computed: {
    imageStyle () {
      let style = Object.assign({
      }, this.initStyle)
      console.log('style', style)
      return style
    },
    containerStyle () {
      return {
        overflow: 'hidden',
        width: this.container.width + 'px',
        height: this.container.height + 'px'
      }
    }
  },

  mounted () {

  },

  methods: {
    imageLoaded () {
      this.zoomImage()
    },

    zoomImage () {
      // set the image container
      this.container.width = this.$el.parentElement.offsetWidth
      this.container.height = this.$el.parentElement.offsetHeight

      // re-cal image size
      if (this.sizing.width && this.sizing.width !== 'auto') {
        this.initStyle.width = Mexp.eval(this.sizing.width.replace(/width/g, this.container.width).replace(/height/g, this.container.height)) + 'px'
      }
      if (this.sizing.height && this.sizing.height !== 'auto') {
        this.initStyle.height = Mexp.eval(this.sizing.height.replace(/width/g, this.container.width).replace(/height/g, this.container.height)) + 'px'
      }
      this.$nextTick(() => {
        this.play()
      })
    },

    play () {
      this.actualImage.width = this.$refs.image.$el.offsetWidth
      this.actualImage.height = this.$refs.image.$el.offsetHeight

      // set the moving-from
      const buildIn = movings[this.moving]
      if (buildIn && buildIn.from) {
        for (let key in buildIn.from) {
          if (buildIn.from[key]) {
            this.initStyle[key] = this.eval(buildIn.from[key])
          }
        }
      }
      // set the moving-to (use vue-anime to render)
      this.$nextTick(() => {
        if (buildIn && buildIn.to) {
          for (let key in buildIn.to) {
            if (buildIn.to[key]) {
              this.animate[key] = this.eval(buildIn.to[key])
            }
          }
        }
        this.playing = true
        this.$refs.image.reset()
      })
    },

    eval (expr) {
      if (typeof expr === 'string') {
        return expr
      } else if (typeof expr === 'function') {
        return expr({
          actualImage: this.actualImage,
          container: this.container
        })
      }
    }
  }
}
</script>

<style>

</style>
