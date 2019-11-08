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

