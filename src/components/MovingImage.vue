<template>
  <div class="moving-image" :style="containerStyle">
    <vue-anime tag="img" :src="url" ref="image" :style="initStyle" @load="imageLoaded"
               :playing="playing" :duration="duration" :easing="easing" :loop="loop" :direction="direction"
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
    },
    direction: {
      type: String,
      default: 'alternate'
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      scaleDirection: '', //
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
      let isSet = false
      if (this.isWidthSet()) {
        isSet = true
        this.scaleDirection = 'height'
        this.initStyle.width = Mexp.eval(this.sizing.width.replace(/width/g, this.container.width).replace(/height/g, this.container.height)) + 'px'
      }
      if (this.isHeightSet()) {
        isSet = true
        this.scaleDirection = 'width'
        this.initStyle.height = Mexp.eval(this.sizing.height.replace(/width/g, this.container.width).replace(/height/g, this.container.height)) + 'px'
      }
      if (!isSet) {
        const imageWidth = this.$refs.image.$el.offsetWidth
        const imageHeight = this.$refs.image.$el.offsetHeight
        let testHeight = this.container.width * imageHeight / imageWidth
        if (testHeight < this.container.height) { // scale by height
          this.scaleDirection = 'width'
          this.initStyle.height = this.container.height + 'px'
        } else {
          this.scaleDirection = 'height'
          this.initStyle.width = this.container.width + 'px'
        }
      }
      this.$nextTick(() => {
        this.play()
      })
    },

    isWidthSet () {
      return this.sizing.width && this.sizing.width !== 'auto'
    },

    isHeightSet () {
      return this.sizing.height && this.sizing.height !== 'auto'
    },

    play () {
      this.actualImage.width = this.$refs.image.$el.offsetWidth
      this.actualImage.height = this.$refs.image.$el.offsetHeight

      // set the moving-from
      const buildIn = this.getAnimation()
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
        // begin to play
        this.$refs.image.reset()
      })
    },

    getAnimation () {
      let buildIn = null
      if (typeof this.moving === 'string') {
        buildIn = movings[this.moving]
      } else if (typeof this.moving === 'function') {
        buildIn = this.moving()
      } else {
        if (this.scaleDirection === 'width') {
          buildIn = movings['landscape']
        } else {
          buildIn = movings['portrait']
        }
      }
      return buildIn
    },

    eval (expr) {
      if (typeof expr === 'string') {
        return expr
      } else if (typeof expr === 'function') {
        return expr(this.$data)
      }
    }
  }
}
</script>

<style>

</style>
