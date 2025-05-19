let cart = []
let totalPrice = 0;

function addToCart(name, price){
    cart.push({ name, price })
    totalPrice += price;
    updateCart();
}

function updateCart(){
    const cartList = document.getElementById("cart-items");
    const totalEl = document.getElementById("total-price")
    const cartcount = document.getElementById("cart-count")

    cartList.innerHTML = "";
    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price} kr`;
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "❌";
        removeBtn.onclick = () => removeItem(index);
        li.appendChild(removeBtn);
        cartList.appendChild(li);

    })
    totalEl.textContent = totalPrice;
    cartcount.textContent = cart.lenght;
}

function removeItem(index){
    totalPrice -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function toggleCart() {
    document.getElementById("cart").cartList.toggle("open");
}

function checkout() {
    alert("Tack för ditt köp!");
    cart = [];
    totalprice = 0;
    updateCart();

}