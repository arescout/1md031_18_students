let showVue = true;
let orderSent = false;

let vm;
vm = new Vue({
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
    console.log("click");
    let order = (name, email,
                 address,
                 phone,
                 payment,
                 addition_ino,
                 customer_sex,
                 selected_burger) => (getBoxValues);
    let main = document.getElementById("main");
    let orderDiv = document.createElement('div');
    let orderText = order.name + ", your order is a: " + order.selected_burger;
    orderDiv.appendChild(document.createTextNode(orderText));
    main.appendChild(orderDiv);
}