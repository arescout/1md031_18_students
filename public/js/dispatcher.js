/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
  el: '#orders',
  data: {
    orders: {},
  },
  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
    }.bind(this));
  },

  methods: {
    progressOrder: function (currentOrder) {
      console.log(currentOrder);
      if(currentOrder.orderStatus === "order sent") {
        currentOrder.orderStatus = "in preparation";
      } else if(currentOrder.orderStatus === "in preparation"){
        currentOrder.orderStatus = "order done";
      } else {
        return;
      }
    }.bind(this)
  }
});
