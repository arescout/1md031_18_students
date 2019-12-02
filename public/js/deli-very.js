/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
  el: '#form',
  data: {
      orderSent: false,
      orderings: {},
      dotCoord: {},
  },

  methods: {
    getNext: function () {
      var lastOrder = Object.keys(this.orderings).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },

    addOrder: function () {
      this.orderings = getBoxValues();
      this.orderSent = true;
      socket.emit("addOrder", { orderId: this.orderings.name,
                                details: this.dotCoord,
                                orderItems: [this.orderings.selected_burger],
                                orderGender: this.orderings.customer_sex,
                                orderEmail: this.orderings.email,
                                orderPaymentMethod: this.orderings.payment,
                                orderStatus: "order sent"
                              });

    },

    displayOrder: function (event) {
      let offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      this.orderings = { orderId: this.getNext(),
                      x: event.clientX - 10 - offset.x,
                      y: event.clientY - 10 - offset.y,
                      orderItems: ["Beans", "Curry"]
                    };
      this.dotCoord = { x: event.clientX - 10 - offset.x,
                        y: event.clientY - 10 - offset.y };
      }


  }
});
