let cart = [];
const cartPanel = document.getElementById("cartPanel");
const cartList = document.getElementById("cartList");
const cartTotal = document.getElementById("cartTotal");
const btnCart = document.getElementById("btnCart");

btnCart.onclick = () => {
  cartPanel.classList.toggle("open");
};

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - €${item.price.toFixed(2)}`;
    cartList.appendChild(li);
  });

  cartTotal.textContent = total.toFixed(2) + "€";
}
