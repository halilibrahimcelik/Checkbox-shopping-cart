const shoppingCart = document.querySelector(".shopping-cart");
const product1 = document.getElementById("product-1");
const product2 = document.getElementById("product-2");
const product3 = document.getElementById("product-3");
const allProducts = document.getElementsByClassName("product");
const total = document.querySelector(".total-container");
const totalAmountOfProduct1 = document.getElementById("total-product1");
const bagTotal = document.getElementById("bag-price");
const subTotal = document.querySelector(".subTotal");
const subTaxes = document.querySelector(".subTaxes");
const totalValue = document.querySelector(".totalValue");

const removeBtn = document.querySelectorAll(".remove");
const minusBtn1 = document.getElementById("minus-product1");
const plusBtn1 = document.getElementById("plus-product1");

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

let totalAmount = 1;
let bagPrice = 54.99;
let shipping = 15;
let subTotalAmount = 155.97;
let totalValueAmount = 199;
let subTaxesAmount = 28.03;
let newPrice;
let newSubTotal;
let newTotalAmount;
let newTaxes;

plusBtn1.addEventListener("click", () => {
  totalAmount++;
  totalAmountOfProduct1.innerText = totalAmount;

  bagPriceUpdate();

  console.log(totalAmount);
});
minusBtn1.addEventListener("click", () => {
  if (totalAmount < 2) {
    return;
  }
  totalAmount--;
  totalAmountOfProduct1.innerText = totalAmount;
  bagPriceUpdate();
});

function bagPriceUpdate() {
  newPrice = totalAmount * bagPrice;

  bagTotal.innerText = newPrice;
  taxes();
  subTotalProduct();
  totalValueProduct();
}

function taxes() {
  newTaxes = parseInt((newPrice * 18) / 100);

  return (subTaxes.innerText = newTaxes);
}
function subTotalProduct() {
  newSubTotal = newPrice;
  return (subTotal.innerText = newSubTotal);
}

function totalValueProduct() {
  newTotalAmount = newPrice + newTaxes + shipping + newSubTotal;
  return (totalValue.innerText = newTotalAmount);
}
