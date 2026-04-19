// header
let category_btn = document.querySelector(".category_btn");
let category_nav_list = document.querySelector(".category_nav_list");
let close_nav = document.querySelector(".close_nav");
let open_nav = document.querySelector(".open_nav");
let nav = document.querySelector(".nav_links");

category_btn.addEventListener("click", () => {
  category_nav_list.classList.toggle("active");
});

open_nav.addEventListener("click", (e) => {
  nav.classList.add("active");
});
close_nav.addEventListener("click", (e) => {
  nav.classList.remove("active");
});
// header

//cart (active [remove,add])
let cart_box = document.querySelector(".cart");
let cart_icon = document.querySelector(".add_active");

cart_icon.addEventListener("click", (e) => {
  cart_box.classList.add("active");
});
function close_cart() {
  cart_box.classList.remove("active");
}
//cart
//addToCart
async function addToCart() {
  try {
    let response = await fetch("products.json");
    let data = await response.json();
    if (!response.ok) {
      throw new Error("هناك خطأ في جلب البيانات");
    }
    //Elements
    let btns = document.querySelectorAll(".btn_add_cart");
    let box_items = document.querySelector(".cart_items");
    let checkoutItems = document.getElementById("checkoutItems");
    //Elements
    // Array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    showItem(cart);
    // Array

    btns.forEach((btn) => {
      let btnId = btn.dataset.id;
      let isIn = cart.some((product) => product.id == btnId);
      if (isIn) {
        btn.classList.add("active");
        btn.innerHTML = `
          <i class="fa-solid fa-cart-shopping"></i>
                  Item In Cart
          `;
      }
    });

    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let productId = btn.dataset.id;
        let isIn = cart.some((product) => product.id == productId);
        if (!isIn) {
          let selectData = data.find((product) => product.id == productId);
          createProduct(selectData);
          let allBtns = document.querySelectorAll(
            `.btn_add_cart[data-id='${productId}']`,
          );
          allBtns.forEach((btn) => {
            btn.classList.add("active");
            btn.innerHTML = `
          <i class="fa-solid fa-cart-shopping"></i>
                  Item In Cart
          `;
          });
        }
      });
    });

    //create
    function createProduct(product) {
      cart.push({ ...product, quantity: 1 });
      showItem(cart);
    }
    //read
    function showItem(cart) {
      let item = "";
      let total = 0;
      let total20 = 0;
      let count = 0;
      let checkoutItem = "";
      cart.forEach((product, index) => {
        total += +product.price * +product.quantity;
        count += product.quantity;
        item += `
        <div class="item_cart">
          <img src="${product.img}" alt="" />
          <div class="content">
            <h4>
              ${product.name}
            </h4>
            <p class="price_cart">$${product.price}</p>
            <div class="quantity_control">
              <button class="decrease_quantity" data-index="${index}">-</button>
              <span class="quantity">${product.quantity}</span>
              <button class="increase_quantity" data-index="${index}">+</button>
            </div>
          </div>
          <button class="delete_item" data-index="${index}">
            <i class="fa-solid fa-trash-can" ></i>
          </button>
        </div>
        `;

        checkoutItem += `
            <div class="item_cart">
                <div class="details">
                  <img src="${product.img}" alt="" />

                  <div class="content">
                    <h4>${product.name}</h4>
                    <p class="price_cart">$${product.price}</p>
                    <div class="quantity_control">
                      <button class="decrease_quantity" data-index="${index}">-</button>
                      <span class="quantity">${product.quantity}</span>
                      <button class="increase_quantity" data-index="${index}">+</button>
                    </div>
                  </div>
                </div>

                <button class="delete_item" data-index="${index}">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
        `;
      });
      if (checkoutItems) {
        checkoutItems.innerHTML = checkoutItem;
        document.querySelector(".subtotal_checkout").innerHTML =
          `$${total.toFixed(2)}`;
        document.querySelector(".total_checkout").innerHTML =
          `$${(+total + 20).toFixed(2)}`;
      }
      box_items.innerHTML = item;
      document.querySelector(".count-item-header").innerHTML = cart.length;
      document.querySelector(".price_cart_total").innerHTML = `$${total}`;
      document.querySelector(".Count_item_cart").innerHTML = count;
      setStorage(cart);
    }

    //Storage
    function setStorage(cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    //delete , quantity
    function two(e) {
      if (e.target.closest(".delete_item")) {
        let cartIndex = e.target.closest(".delete_item").dataset.index;
        let deleteId = cart[cartIndex].id;
        btns.forEach((btn) => {
          if (btn.dataset.id == deleteId) {
            btn.classList.remove("active");
            btn.innerHTML = `
              <i class="fa-solid fa-cart-shopping"></i>
                    Add To Cart
              `;
          }
        });
        cart.splice(cartIndex, 1);
        showItem(cart);
      }
      if (e.target.classList.contains("increase_quantity")) {
        let cartIndex = e.target.dataset.index;
        if (cart[cartIndex].quantity >= 1) {
          cart[cartIndex].quantity++;
          showItem(cart);
        }
      }
      if (e.target.classList.contains("decrease_quantity")) {
        let cartIndex = e.target.dataset.index;
        if (cart[cartIndex].quantity > 1) {
          cart[cartIndex].quantity--;
          showItem(cart);
        }
      }
    }
    box_items.addEventListener("click", (e) => two(e));
    if (checkoutItems) {
      checkoutItems.addEventListener("click", (e) => two(e));
    }
  } catch (error) {
    console.log(error);
  }
}
addToCart();
//addToCart
