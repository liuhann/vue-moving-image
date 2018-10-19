# vue-moving-image
An image show and moving component for vue . based on vue-anime and animejs

## Sample

```html
<div style="width: 200px; height: 200px;" class="box">
  <moving-image :url="image2"></moving-image>
</div>
```
moving-image must have a fixed-size container in order to determine how to cover and move

```html

<div style="width: 120px; height: 200px;" class="box">
      <moving-image :url="image1" :sizing="{height: 'height'}" moving="landscape"></moving-image>
    </div>
<div style="width: 360px; height: 200px;" class="box">
  <moving-image :url="image2" :sizing="{width: 'width*1.1'}" moving="portrait"></moving-image>
</div>
<div style="width: 200px; height: 200px;" class="box">
  <moving-image :url="image2" :sizing="{height: 'height*1.2'}" moving="bottomRight"></moving-image>
</div>
<div style="width: 140px; height: 140px; border-radius: 70px; border: 1px solid #ccc; overflow: hidden;" class="box">
  <moving-image :url="image4" :sizing="{height: 'height*1.1'}" moving="landscape"></moving-image>
</div>
```

## Props
```json
{
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
}
}
```
