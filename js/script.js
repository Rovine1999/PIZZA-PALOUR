function myfunction
var checkOut = document.addEventListener("click", function() {
 var Flavour = parseInt(document.getElementById("#flavour").value);
 var Size = parseInt(document.getElementById("#size").value);
 var Crust = parseInt(document.getElementById("#crust").value);
 var toppings = parseInt(document.getElementById("#toppings").value);
 var quant = parseInt(document.getElementById("#quantity").value);
 var totalCost = (Flavour + Size + Crust + toppings) * quant;
 alert(`Your order has been received amounting to ${totalCost}`);
 prompt(`please enter your location.`);
 alert(`Your order will be delivered in a few, please have some ksh.250 together with total amount for delivery.`)
});

$(document).ready(function() {

$("#order").submit(function(event) {
    
    function flavour() {
        var Flavour = document.getElementById("#flavour").value;
        return parseInt(Flavour);
    }
    function size() {
        var Size = document.getElementById("#size").value;
        return parseInt(Size);
    }
    function crust() {
        var Crust = document.getElementById("#crust").value;
        return parseInt(Crust);
    }
    function toppings() {
        var toppings = document.getElementById("#toppings").value;
        return parseInt(toppings);
    }
    function quantity() {
        var quantity = document.getElementById("#quantity").value;
        return parseInt(quant);
    }
    
    
    function Order(flavor, size, crust, toppings, quantity) {
    function Order(fzlavor, size, crust, toppings, quantity) {
        this.newFlavour = flavour;
        this.newSize = size;
        this.newCrust = crust;
        this.newTopping = toppings;
        this.newQuantity = quantity;
    }
    
    var userInput = new Order(Flavour(), size(), crust(), topping(), number());
    
    var totalCost =
        (userInput.newSize +
            userInput.newCrust +
            userInput.newToppings +
            userInput.newFlavour) *
        userInput.newQuantity;
    
    alert("Your charges for Pizza" + totalCost);
    prompt("enter your email address");
    prompt("enter your phone number");
    prompt("enter your location");
    alert("Your pizza will be delivered");
    
    $("#text-center").reset();
    event.preventDefault();
  });
});