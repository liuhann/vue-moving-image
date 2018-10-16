export default {
  landscape: {
    from: {
    },
    to: {
      translateX: function (size) {
        debugger
        return -(size.actualImage.width - size.container.width)
      }
    }
  }
}
