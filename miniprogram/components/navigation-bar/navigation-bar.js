// components/navigation-bar/navigation-bar.js

var app = getApp();
Component({
  options: {
    multipleSlots: true,
  },
  /**
   * Component properties
   */
  properties: {
    bgColor: {
      type:String,
      value:'#9c90c2'
    }
  },

  /**
   * Component initial data
   */
  data: {

  },

  lifetimes: {
    ready() {
      this.setData(wx.getStorageSync("systemInfo"))
    },
  },

  /**
   * Component methods
   */
  methods: {

  }
})