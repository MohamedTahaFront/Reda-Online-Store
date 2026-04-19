async function showProducts() {
  try {
    let response = await fetch("products.json");
    if (!response.ok) {
      throw new Error("هناك خطا في جلب البيانات");
    }
    let data = await response.json();
// =============sale============
    const swiper_items_sale = document.getElementById("swiper_items_sale");
    let productsHTMLSale = "";
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    data.forEach((product) => {
      let sale =
        (product.old_price - product.price) / (product.old_price / 100);
      if (product.old_price) {
        let isIn = cart.some(cart=>cart.id == product.id)
        productsHTMLSale += `
            <div class="product swiper-slide">
              <span class="sale_present" style = "${product.old_price ? "display : inline" : "display : none"} ">${Math.round(sale)}%</span>
              <div class="img_product">
                <a href="#">
                  <img src="${product.img}" alt="" />
                </a>
              </div>
              <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <p class="name_product">
                <a href="#"
                  >${product.name}
                </a>
              </p>
              <div class="price">
                <span>$${product.price}</span>
                <p class="old_price">${product.old_price ? "$" + product.old_price : ""}</p>
              </div>
              <div class="icons">
                <span class="btn_add_cart ${isIn ? "active":""}" data-id="${product.id}">
                  <i class="fa-solid fa-cart-shopping"></i>
                  ${isIn ? "Item In Cart":"Add To Cart"}
                </span>
                <span class="icon_product"
                  ><i class="fa-regular fa-heart"></i
                ></span>
              </div>
            </div>
        `;
      }
    });
    swiper_items_sale.innerHTML = productsHTMLSale;
    // ============sale================
    // ============Electronics================

    const swiper_items_Electronics = document.getElementById(
      "swiper_items_Electronics",
    );
    let productsHTMLElectronics = "";
    data.forEach((product) => {
      let sale = ((product.old_price - product.price) / product.old_price) * 100
      if (product.category == "electronics") {
        let isIn = cart.some(cart=>cart.id == product.id)
        productsHTMLElectronics += `
            <div class="product swiper-slide">
              <span class="sale_present" style = "${product.old_price ? "display : inline" : "display : none"} ">${Math.round(sale)}%</span>
              <div class="img_product">
                <a href="#">
                  <img src="${product.img}" alt="" />
                </a>
              </div>
              <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <p class="name_product">
                <a href="#"
                  >${product.name}
                </a>
              </p>
              <div class="price">
                <span>$${product.price}</span>
                <p class="old_price">${product.old_price ? "$" + product.old_price : ""}</p>
              </div>
              <div class="icons">
                <span class="btn_add_cart ${isIn ? "active":""}" data-id="${product.id}">
                  <i class="fa-solid fa-cart-shopping"></i>
                  ${isIn ? "Item In Cart":"Add To Cart"}
                </span>
                <span class="icon_product"
                  ><i class="fa-regular fa-heart"></i
                ></span>
              </div>
            </div>
        `;
      }
    });
    swiper_items_Electronics.innerHTML = productsHTMLElectronics
    // ============Electronics================
    // ============Appliances================

    const swiper_items_Appliances = document.getElementById(
      "swiper_items_Appliances",
    );
    let productsHTMLAppliances = "";
    data.forEach((product) => {
      let sale = ((product.old_price - product.price) / product.old_price) * 100
      if (product.category == "appliances") {
        let isIn = cart.some(cart=>cart.id == product.id)
        productsHTMLAppliances += `
            <div class="product swiper-slide">
              <span class="sale_present" style = "${product.old_price ? "display : inline" : "display : none"} ">${Math.round(sale)}%</span>
              <div class="img_product">
                <a href="#">
                  <img src="${product.img}" alt="" />
                </a>
              </div>
              <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <p class="name_product">
                <a href="#"
                  >${product.name}
                </a>
              </p>
              <div class="price">
                <span>$${product.price}</span>
                <p class="old_price">${product.old_price ? "$" + product.old_price : ""}</p>
              </div>
              <div class="icons">
                <span class="btn_add_cart ${isIn ? "active":""}" data-id="${product.id}">
                  <i class="fa-solid fa-cart-shopping"></i>
                  ${isIn ? "Item In Cart":"Add To Cart"}
                </span>
                <span class="icon_product"
                  ><i class="fa-regular fa-heart"></i
                ></span>
              </div>
            </div>
        `;
      }
    });
    swiper_items_Appliances.innerHTML = productsHTMLAppliances
    // ============Appliances================
    // ============Mobiles================

    const swiper_items_Mobiles = document.getElementById(
      "swiper_items_Mobiles",
    );
    let productsHTMLMobiles = "";
    data.forEach((product) => {
      let sale = ((product.old_price - product.price) / product.old_price) * 100
      if (product.category == "mobiles") {
        let isIn = cart.some(cart=>cart.id == product.id)
        productsHTMLMobiles += `
            <div class="product swiper-slide">
              <span class="sale_present" style = "${product.old_price ? "display : inline" : "display : none"} ">${Math.round(sale)}%</span>
              <div class="img_product">
                <a href="#">
                  <img src="${product.img}" alt="" />
                </a>
              </div>
              <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <p class="name_product">
                <a href="#"
                  >${product.name}
                </a>
              </p>
              <div class="price">
                <span>$${product.price}</span>
                <p class="old_price">${product.old_price ? "$" + product.old_price : ""}</p>
              </div>
              <div class="icons">
                <span class="btn_add_cart ${isIn ? "active":""}" data-id="${product.id}">
                  <i class="fa-solid fa-cart-shopping"></i>
                  ${isIn ? "Item In Cart":"Add To Cart"}
                </span>
                <span class="icon_product"
                  ><i class="fa-regular fa-heart"></i
                ></span>
              </div>
            </div>
        `;
      }
    });
    swiper_items_Mobiles.innerHTML = productsHTMLMobiles
    // ============Mobiles================
    swiper_products();
  } catch (error) {
    console.log(error);
  }
}
showProducts();
