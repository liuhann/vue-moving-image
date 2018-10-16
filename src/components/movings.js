export default {
  landscape: {
    from: {
    },
    to: {
      translateX: function (size) {
        return -(size.actualImage.width - size.container.width)
      }
    }
  }
}
