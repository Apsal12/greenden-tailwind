var menu = document.getElementById("menu");
var sidenav = document.getElementById("sidenav")
var closenav = document.getElementById("closenav")

menu.addEventListener("click", function () {
    sidenav.style.right = 0;
})

closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})


//search
var search = document.getElementById("search");
var productcontainer = document.getElementById("product-container")

var productlist = productcontainer.querySelectorAll("div")

console.log(productlist)


search.addEventListener("keyup", function () {
    var enteredvalue = event.target.value.toUpperCase();

    for (count = 0; count < productlist.length; count++) {
        var productname = productlist[count].querySelector("p").textContent;

        if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"
        }


    }

})