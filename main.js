function updatePhoto() {
  var updatedGlaze = document.getElementById("option-title--glaze").value;
  //   var image = document.getElementsByClassName("product-photo");
  var image = document.getElementById("large-photo");
  image.src = "images/menu_original_" + updatedGlaze + ".jpg";
  console.log(image.src);
}

function updatePrice(selectedQty) {
  //   var price = document.getElementsByClassName("option-content")[2];
  var price = document.getElementById("totalPrice");

  if (selectedQty == "1") {
    price.innerHTML = "$3.50";
  } else if (selectedQty == "3") {
    price.innerHTML = "$10.50";
  } else if (selectedQty == "6") {
    price.innerHTML = "$21.00";
  } else if (selectedQty == "12") {
    price.innerHTML = "$42.00";
  }
}

function foodItem(name, glazing, price) {
  this.name = name;
  this.glazing = glazing;
  this.price = price;
}

var cartArray = [];

function addToCart(name) {
  currentPrice = document.getElementById("totalPrice").innerHTML.replace(/(\r\n|\n|\r)/gm, "");
  //   currentPrice = document.getElementById("totalPrice").innerHTML;

  currentGlazing = document.getElementById("option-title--glaze").value;
  //   console.log("Current glazing: " + currentGlazing);
  currentName = name;

  newItem = new foodItem(name, currentGlazing, currentPrice);
  cartArray.push(newItem);
  console.log(cartArray);

  updateCartLabel();
}

// function addToCart() {
//     var
// }

function updateCartLabel() {
  var cartSize = cartArray.length;

  if (cartSize > 0) {
    var cartLabel = document.getElementById("navBarCart");
    cartLabel.innerHTML = "Cart (" + cartSize + ")";
  }
}
