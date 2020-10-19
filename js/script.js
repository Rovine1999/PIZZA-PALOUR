function myFunction() {
 var flavour = parseInt(document.getElementById("flavour").value);
 var size = (document.getElementById("size").value);
 var crust = parseInt(document.getElementById("crust").value);
 alert("Your crust is " + crust + "/=")
 var toppings = parseInt(document.getElementById("toppings").value);
 alert("Your topping is " + toppings + "/=")
 var location = parseInt(document.getElementById("location").value);
 alert("Your location is " + location + "/=")
 var quant = parseInt(document.getElementById("quantity").value);
 alert("Your quantity is " + quant + "pieces")
 var totalCost = (((crust + toppings) * quant) + location);
 alert(`Your order has been received amounting to ${totalCost}`);
 prompt("Enter your phone number");
 prompt("Please enter your location.");
 alert(`Your order will be delivered in a few, please have total amount for delivery.`)
};


$(document).ready(function() {
    $(".wanjala").click(function() {
        $("#buffalo").toggle();
        $(".buffalo").toggle();
    });
});
