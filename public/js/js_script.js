
let showJS = !true;


function MenuItem (name, kCal, cG, cL, iV, src, box, imgAlt) {
    this.name = name + " burger";
    this.kCal = kCal;
    this.contGluten = cG;
    this.contLactose = cL;
    this.isVegan = iV;
    this.image = src;
    this.box = "box " + box;
    this.imgAlt = imgAlt;

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

    this.condMenu = function() {
        var txt = this.name;
        if(this.contGluten) {
            txt = txt + ", contains Gluten";
        }
        if(this.contLactose){
            txt = txt + ", contains Lactose";
        }
        if(this.isVegan){
            txt = txt + ", is Vegan";
        }
        txt = txt + '.';
        return txt;
    };

}

/* Create main div for burger selection */
let burgerSelection = document.getElementsByClassName("burger_selection");

/* Create array of burgers */
/**let burgers = [new MenuItem("the Hipster-Halloumi", 2500, true,false,false,"http://www.healthyfood.co.uk/wp-content/uploads/2016/06/Sprout-burger.jpg", "a"),
                new MenuItem("the Eggplant", 2000, true, false, false, "http://misplacedbrit.com/wp-content/uploads/2014/06/IMG_8236.jpg", "b"),
                new MenuItem("the Falafel-Halloumi", 5000, true, true, false,"https://fiitstyle.com/wp-content/uploads/2017/05/18361591_523757921346866_328414952_n.jpg", "c"),
                new MenuItem("the Meat-is-not-murder", 5000, false, true, true,"http://wallpapersdsc.net/wp-content/uploads/2016/09/Burger-Images.jpg", "d"),
                new MenuItem("the Ordinary", 3000, true, true, true, "https://static.beburger.be/img/home/intro-bg.jpg", "e")
                ];
**/

if(showJS) {
// Create and add wrapper div
    let wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');
    burgerSelection[0].appendChild(wrapper);

// Add burgers
    let i = 0;
    for (let item in burgers) {

        // Create box div
        let box = document.createElement('div');
        box.setAttribute('class', 'box ' + String.fromCharCode((97 + i)));

        // Add burger seletctor buttons
        let burgerSelector = document.createElement('input');
        burgerSelector.setAttribute('type','radio');
        burgerSelector.setAttribute("id", burgers[item].name + "_radio_button");
        burgerSelector.setAttribute('name','burgerSelector');
        burgerSelector.setAttribute('value', burgers[item].name);


        // Add burger name
        let burgerNameNode = document.createElement('p');
        let burgerName = document.createTextNode(burgers[item].name);
        burgerNameNode.appendChild(burgerSelector);
        burgerNameNode.appendChild(burgerName);
        box.appendChild(burgerNameNode);

        // Add image
        let burgerImgNode = document.createElement('img');
        burgerImgNode.setAttribute('src', burgers[item].image);
        burgerImgNode.setAttribute('alt', "Picture of " + burgers[item].name);
        box.appendChild(burgerImgNode);

        // Add protein
        let brgrPrtnTtleNode = document.createElement('p');
        brgrPrtnTtleNode.setAttribute('class', 'protein_title');
        brgrPrtnTtleNode.innerHTML = "Protein";
        box.appendChild(brgrPrtnTtleNode);

        let brgrPrtnNode = document.createElement('span');
        brgrPrtnNode.setAttribute('class', 'protein');
        brgrPrtnNode.innerHTML = "Halloumi";
        box.appendChild(brgrPrtnNode);

        // Add allergies and preferences
        let brgrAllrgsTitleNode = document.createElement('p');
        brgrAllrgsTitleNode.setAttribute('class', 'allergies_header');
        brgrAllrgsTitleNode.innerHTML = "Allergies and preferences";
        box.appendChild(brgrAllrgsTitleNode);

        let brgrAllrgsNode = document.createElement('span');
        brgrAllrgsNode.setAttribute('class', 'allergies');
        if (burgers[item].contGluten) {
            let glutenNode = document.createElement('p');
            glutenNode.innerHTML = "Contains Gluten";
            brgrAllrgsNode.appendChild(glutenNode);
        }
        if (burgers[item].contLactose) {
            let lactoseNode = document.createElement('p');
            lactoseNode.innerHTML = "Contains Lactose";
            brgrAllrgsNode.appendChild(lactoseNode)
        }
        if (burgers[item].isVegan) {
            let veganNode = document.createElement('p');
            veganNode.innerHTML = "Is Vegan";
            brgrAllrgsNode.appendChild(veganNode);
        }
        box.appendChild(brgrAllrgsNode);

        // Finish by adding the box to wrapper
        wrapper.appendChild(box);
        i++;
    }

    let orderButton = document.getElementById("orderButton");
    //orderButton.onclick = buttonClicked;
    orderButton.onclick = getBoxValues;
}



function getBoxValues(){
    // Check which burger is selected
    let selBurger;
    let burgerRadios = document.getElementsByName("burgerSelector");
    for (let burger in burgerRadios){
        if(burgerRadios[burger].checked){
            selBurger = burgerRadios[burger].value;
            break;
        }
    } if(selBurger===undefined){
        selBurger = "Ingen burgare vald"
    }

    // Check textboxes
    let custName = document.getElementById("customer name").value;
    let custEmail = document.getElementById("customer email").value;
    let custAdress = document.getElementById("customer address").value;
    let custPhone = document.getElementById("customer phone").value;
    let payMethod = document.getElementById("payment method").value;
    let addInfo = document.getElementById("additional information").value;

    // Check radio buttons
    let custSex;
    let radios = document.getElementsByName("cg");
    for (let i = 0; i < radios.length; i++){
        if(radios[i].checked){
            custSex = radios[i].value;
            break;
        }

    }

    return [{name: custName,
        email: custEmail,
        address: custAdress,
        phone: custPhone,
        payment: payMethod,
        addition_ino: addInfo,
        customer_sex: custSex,
        selected_burger: selBurger}];
}

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

