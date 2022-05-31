const shoppingCart = document.querySelector(".shopping-cart");
const product1 = document.getElementById("product-1");
const product2 = document.getElementById("product-2");
const product3 = document.getElementById("product-3");
const allProducts = document.getElementsByClassName("product");
const total = document.querySelector(".total-container");

const subTotal = document.querySelector(".subTotal");
const subTaxes = document.querySelector(".subTaxes");
const totalValue = document.querySelector(".totalValue");

const subProdPrices = document.querySelectorAll(".prod-price");
const plusButtons = document.querySelectorAll(".plus-button");
const minusButtons = document.querySelectorAll(".minus-button");

const removeBtn = document.querySelectorAll(".remove");

removeBtn.forEach((button) => {
  button.addEventListener("click", removeProductHandler);
  function removeProductHandler(e) {
    if (confirm("Are You Sure")) {
      let product = e.target.parentElement;

      if (!shoppingCart.contains(product3 && product1 && product2)) {
        shoppingCart.style.display = "none";
      }

      product.parentElement.remove();
    }
  }
});
//***adding increasing pricelist */
let shipping = 15;
let newSubTotal = 0;
let newTotalAmount = 0;
let itemPrice;
let newPrice1 = 0;
let newPrice2 = 0;
let newPrice3 = 0;
let tax1 = 0;
let tax2 = 0;
let tax3 = 0;
let newTaxes = 0;
let taxRatio = 0.18;

plusButtons.forEach((plusBtn) => {
  plusBtn.addEventListener("click", plusOperHandler);

  function plusOperHandler(e) {
    let totalAmount = e.target.previousElementSibling.innerText;

    const productPrice =
      e.target.closest(".info").lastElementChild.firstElementChild;
    console.log(productPrice);

    if (productPrice.id === "bag-price") {
      totalAmount++;
      itemPrice = 54.99;

      newPrice1 = parseInt(totalAmount * itemPrice);
      productPrice.innerText = newPrice1;
      tax1 = taxRatio * newPrice1;
    } else if (productPrice.id === "shoes-price") {
      totalAmount++;
      itemPrice = 45.99;
      newPrice2 = parseInt(totalAmount * itemPrice);
      productPrice.innerText = newPrice2;
      tax2 = taxRatio * newPrice2;

      console.log(newPrice1);
    } else if (productPrice.id === "clock-price") {
      totalAmount++;
      itemPrice = 74.99;
      newPrice3 = parseInt(totalAmount * itemPrice);
      productPrice.innerText = newPrice3;
      tax3 = taxRatio * newPrice3;
    }
    newTaxes = tax1 + tax2 + tax3;
    newSubTotal = newPrice1 + newPrice2 + newPrice3;
    newTotalAmount = newTaxes + newSubTotal + shipping;

    console.log(newSubTotal, newPrice1, newPrice2, newPrice3);

    console.log(newTaxes);
    subTotal.innerText = newSubTotal;
    subTaxes.innerText = newTaxes;
    totalValue.innerText = newTotalAmount;
    e.target.previousElementSibling.innerText = totalAmount;
    if (!shoppingCart.contains(product1)) {
      tax1 = 0;
      console.log("hala");
      newPrice1 = 0;
    } else if (!shoppingCart.contains(product2)) {
      tax2 = 0;
      newPrice2 = 0;
    } else if (!shoppingCart.contains(product3)) {
      tax3 = 0;
      newPrice3 = 0;
    }
  }
});
minusButtons.forEach((minusBtn) => {
  minusBtn.addEventListener("click", minusOperHandler);

  function minusOperHandler(e) {
    let totalAmount = e.target.nextElementSibling.innerText;
    console.log(totalAmount);

    if (totalAmount < 1) {
      return;
    }
    const productPrice =
      e.target.closest(".info").lastElementChild.firstElementChild;
    console.log(productPrice);
    if (productPrice.id === "bag-price") {
      totalAmount--;
      itemPrice = 54.99;
      newPrice1 = parseInt(totalAmount * itemPrice);
      productPrice.innerText = newPrice1;
      tax1 = taxRatio * newPrice1;
    } else if (productPrice.id === "shoes-price") {
      totalAmount--;
      itemPrice = 45.99;
      newPrice2 = parseInt(totalAmount * itemPrice);
      productPrice.innerText = newPrice2;
      tax2 = taxRatio * newPrice2;
    } else if (productPrice.id === "clock-price") {
      totalAmount--;
      itemPrice = 74.99;
      newPrice3 = parseInt(totalAmount * itemPrice);
      productPrice.innerText = newPrice3;
      tax3 = taxRatio * newPrice3;
    }

    if (!shoppingCart.contains(product1)) {
      tax1 = 0;
      newPrice1 = 0;
    } else if (!shoppingCart.contains(product2)) {
      tax2 = 0;
      newPrice2 = 0;
    } else if (!shoppingCart.contains(product3)) {
      tax3 = 0;
      newPrice3 = 0;
    }
    newTaxes = tax1 + tax2 + tax3;
    newSubTotal = newPrice1 + newPrice2 + newPrice3;
    newTotalAmount = newTaxes + newSubTotal + shipping;

    subTaxes.innerText = newTaxes;
    subTotal.innerText = newSubTotal;
    totalValue.innerText = newTotalAmount;
    e.target.nextElementSibling.innerText = totalAmount;
  }
});
