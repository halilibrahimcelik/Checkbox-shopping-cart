const shoppingCart = document.querySelector(".shopping-cart");
const product1 = document.getElementById("product-1");
const product2 = document.getElementById("product-2");
const product3 = document.getElementById("product-3");
const allProducts = document.getElementsByClassName("product");
const removeBtn = document.querySelectorAll(".remove");
const total = document.querySelector(".total-container");
const info = document.querySelector(".info");
console.log(info);

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

//*** */
