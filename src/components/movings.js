export default {
  landscape: {
    from: {
    },
    to: {
      translateX: function (size) {
        return -(size.actualImage.width - size.container.width)
      }
    }
  },
  portrait: {
    from: {
    },
    to: {
      translateY: function (size) {
        return -(size.actualImage.height - size.container.height)
      }
    }
  },
  bottomRight: {
    from: {
    },
    to: {
      translateY: function (size) {
        return -(size.actualImage.height - size.container.height)
      },
      translateX: function (size) {
        return -(size.actualImage.width - size.container.width)
      }
    }
  },
  zoom: {
    from: {
    },
    to: {
      scale: '1.2'
    }
  }
}
