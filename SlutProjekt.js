let cart = []
let totalPrice = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const classList = document.getElementById("cart-items");
    const totalEl = document.getElementById("total-price");
    const cartCount = document.getElementById("cart-count");

    classList.innerHTML = "";
    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price} kr`;
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "❌";
        removeBtn.onclick = () => removeItem(index);
        li.appendChild(removeBtn);
        classList.appendChild(li);

    })

    totalEl.textContent = totalPrice;
    cartCount.textContent = cart.length;
}

function removeItem(index) {
    totalPrice -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function toggleCart() {
    document.getElementById("cart").classList.toggle("open");
}

function checkout() {
    alert("Tack för ditt köp!");
    cart = [];
    totalPrice = 0;
    updateCart();
}

const TillbakaButton = document.getElementById("tillbaka")

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;

    if (scrollPercent > 0.12) {
        TillbakaButton.style.display = "block";
    } else {
        TillbakaButton.style.display = "none";
    }
});

TillbakaButton.addEventListener("click", () => {
    window.scrollTo( {
        top: 0,
        behavior: "smooth"
    });
});