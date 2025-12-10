let cart = [];

const cartPanel = document.getElementById("cartPanel");
const cartList = document.getElementById("cartList");
const cartTotal = document.getElementById("cartTotal");
const btnCart = document.getElementById("btnCart");
const checkoutBtn = document.getElementById("checkoutBtn");

// Apri/chiudi pannello carrello
if (btnCart) {
  btnCart.onclick = () => {
    cartPanel.classList.toggle("open");
  };
}

// Aggiunge un prodotto al carrello
function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

// Aggiorna grafica carrello
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

// Invio ordine via WhatsApp
if (checkoutBtn) {
  checkoutBtn.onclick = (event) => {
    // evita qualsiasi submit di form, anche se in futuro ci finisse dentro
    event.preventDefault();

    if (cart.length === 0) {
      alert("Il carrello è vuoto!");
      return;
    }

    // >>> METTI QUI IL TUO NUMERO DI TELEFONO WHATSAPP <<<
    const phoneNumber = "393920283741"; // es: 393471234567

    let message = "Nuovo ordine da Moby Dick Pizzeria:%0A%0A";

    cart.forEach((item, index) => {
      message += `${index + 1}) ${item.name} - €${item.price.toFixed(2)}%0A`;
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    message += `%0ATotale: €${total.toFixed(2)}%0A`;
    message += `%0AGrazie!`;

    const waUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(waUrl, "_blank");
  };
}


