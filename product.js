window.onload = (event) => {
    if(!sessionStorage.getItem('user')){
        window.location.href = "index.html";
    }else{
        document.getElementById("cartvalue").innerText = localStorage.getItem("cartvalue");
        var carts = JSON.parse(localStorage.getItem("products"));
    }
  };
  const products = [
    {
        name: "SONY ILCE-7SM3/BQ IN5 Mirrorless Digital Camera (Body Only)",
        price: "3,34,990",
        rating: 4.4,
        review: 74,
        src: "p1",
        quantity: 1
    },
    {
        name: "OLYMPUS OM-D E-M1X 20.4 MP Mirrorless Digital Camera (Body Only)",
        price: "4,75,000",
        src: "p2",
        quantity: 1
    },
    {
        name: "NIKON Z 50 Mirrorless Camera Body with 16-50mm & 50-250mm Lenses  (Black)",
        price: "88,999",
        rating: 4.4,
        review: 74,
        src: "p3",
        quantity: 1
    },
    {
        name: "SONY Alpha 7M3K Mirrorless Camera Body with 28 - 70 mm Zoom Lens  (Black)",
        price: "1,59,999",
        rating: 4.6,
        review: 74,
        src: "p1",
        quantity: 1
    }
]
var carts = [];
createProduct(products);

function createProduct(product) {
    var x = "", i;
    product.forEach((pro, i) => {
        x += `<div class="_4ddWXP _3BCh3_ _3oesPs">
      <a class="_2rpwqI" title="${pro.name ? pro.name : ''}" target="_blank"
          rel="noopener noreferrer"
          href="">
          <div class="_28_T72">
              <div>
                  <div class="CXW8mj" style="height: 200px; width: 200px;"><img
                          class="_396cs4  _3exPp9"
                          alt="${pro.name ? pro.name : ''}"
                          src="${pro.src}.jpeg">
                  </div>
              </div>
          </div>${pro.name ? pro.name : ''}
      </a>
      <div>
          <div><a title="${pro.name ? pro.name : ''}" class="s1Q9rs"
                  target="_blank" rel="noopener noreferrer"
                  href=></a></div>
          <div class="gUuXy- _2D5lwg"><span
                  id="productRating_LSTDLLFHY8YCXP7WM32VVPLQE_DLLFHY8YCXP7WM32_" class="_1lRcqv">
                  <div class="_3LWZlK">${pro.rating ? pro.rating : 'N/A'}<img
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
                          class="_1wB99o"></div>
              </span><span class="_2_R_DZ">(${pro.review ? pro.review : 0})</span></div>
          <div class="_32g5_j"><img height="21" src="./a.png">
          </div>
          <div class="_8VNy32">
              <div class="_25b18c">
                  <div class="_30jeq3">₹${pro.price ? pro.price : ''}</div>
              </div>
          </div>
      </div>
      <button onclick="addtoCart(${i})" class="_2KpZ6l _2U9uOA _3v1-ww"><svg class="_1KOMV2" width="16" height="16" viewBox="0 0 16 15"
      xmlns="http://www.w3.org/2000/svg">
      <path class=""
          d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
          fill="#fff"></path>
  </svg>ADD TO CART</button>
    </div>`;
    })
    document.getElementById("product").innerHTML = x;
}

function addtoCart(index) {
    carts.push(products[index]);
    localStorage.setItem("cartvalue",JSON.stringify(carts.length));
    document.getElementById("cartvalue").innerText = carts.length;
    localStorage.setItem("products",JSON.stringify(carts));
}
