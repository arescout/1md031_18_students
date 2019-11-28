let showVue = true;
let orderSent = false;

let vmm;
vmm = new Vue({
    el: "#burgerWrapper",
    data() {
        return {
            burgers: burgers,
            showVue: true }

    }
});
if(showVue) {
    new Vue({
        el: "#vueButton",
        methods: {
            markDone: buttonClicked
        }
    });
}

function buttonClicked() {
    let order = getBoxValues();
    let orderDiv = document.getElementById('orderDiv');
    let orderText = order.name + ", your order is a: " + order.selected_burger;
    orderDiv.innerHTML = orderText;
}