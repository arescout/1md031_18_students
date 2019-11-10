function MenuItem (name, kCal, cG, cL, iV) {
    this.name = name + " burger";
    this.kCal = kCal;
    this.contGluten = cG;
    this.contLactose = cL;
    this.isVegan = iV;

    this.kCalCheck = function () {
        return [this.name + " is " + this.kCal + " kCal."].toString();
    };

    this.onTheMenu = function() {
        return [
           this.name + "\n " +
           this.kCal + " kCal \n " +
           "Contains: " + "Gluten -" + this.contGluten+ " Lactose -" + this.contLactose + " \n " +
           "Is Vegan: " + this.isVegan
        ].toString();
    };
}

let hipsterHalloumi = new MenuItem("the Hipster-Halloumi", 3000, true, true, false );
console.log(hipsterHalloumi.kCalCheck());

/* JSFiddle code for task 4-6
const halloumiBurger = new MenuItem("the Hipster-Halloumi", 3000, true, true, false);
const burger2 = new MenuItem("the Eggplant", 2000, false, false, true);
const burger3 = new MenuItem("the Falafel-Halloumi", 2400, true, false, true);

var firstItem = document.createElement('p');
firstItem.setAttribute('class', 'menuItem');
firstItem.innerHTML = halloumiBurger.onTheMenu();

var secondItem = document.createElement('p');
secondItem.setAttribute('class', 'menuItem');
secondItem.innerHTML = burger2.onTheMenu();

var thirdItem = document.createElement('p');
thirdItem.setAttribute('class', 'menuItem');
thirdItem.innerHTML = burger3.onTheMenu();

var mainDiv = document.getElementsByClassName('mainDiv');

mainDiv[0].appendChild(firstItem).appendChild(secondItem).appendChild(thirdItem);

Vue section starts here
var vueDiv = document.getElementById('vueDiv');

var vueP1 = document.createElement('p');
vueP1.setAttribute('id','vueItem1','v-bind:title', 'vueItem1');
vueP1.innerHTML = '{{menuItem1}}'

var vueP2 = document.createElement('p');
vueP2.setAttribute('id','vueItem2','v-bind:title', 'vueItem2');
vueP2.innerHTML = '{{menuItem2}}'

var vueP3 = document.createElement('p');
vueP3.setAttribute('id','vueItem3','v-bind:title', 'vueItem3');
vueP3.innerHTML = '{{menuItem3}}'

vueDiv.appendChild(vueP1);
vueDiv.appendChild(vueP2);
vueDiv.appendChild(vueP3);

var vm = new Vue({
    el: "#vueItem1",
    data: {
        menuItem1: halloumiBurger.onTheMenu()
    }
})

vm = new Vue({
    el: "#vueItem2",
    data: {
        menuItem2: burger2.onTheMenu()
    }
})

vm = new Vue({
    el: "#vueItem3",
    data: {
        menuItem3: burger3.onTheMenu()
    }
})

function MenuItem (name, kCal, cG, cL, iV) {
    this.name = name + " burger";
    this.kCal = kCal;
    this.contGluten = cG;
    this.contLactose = cL;
    this.isVegan = iV;

    this.kCalCheck = function () {
        return [this.name + " is " + this.kCal + " kCal."].toString();
    };

    this.onTheMenu = function() {
        return [
            this.name + "\n " +
            this.kCal + " kCal \n " +
            "Contains: " + "Gluten -" + this.contGluten+ " Lactose -" + this.contLactose + " \n " +
            "Is Vegan: " + this.isVegan
        ].toString();
    };
} **/