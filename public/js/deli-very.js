/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
  el: '#form',
  data: {
    orders: {},
    dotCoord: {},
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
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },

    addOrder: function () {
      console.log("addOrder");

      socket.emit("addOrder", { orderId: this.getNext(),
                                details: this.dotCoord,
                                orderItems: ["Beans", "Curry"]
                              });

    },

    displayOrder: function (event) {
      let offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      this.orders = { orderId: this.getNext(),
                      x: event.clientX - 10 - offset.x,
                      y: event.clientY - 10 - offset.y,
                      orderItems: ["Beans", "Curry"]
                    };
      this.dotCoord = { x: event.clientX - 10 - offset.x,
                        y: event.clientY - 10 - offset.y };
      }
  }
});
