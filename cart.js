window.onload = (event) => {
    if(!sessionStorage.getItem('user')){
        window.location.href = "index.html";
    }
  };

 var carts = JSON.parse(localStorage.getItem("products"));
createCart();
calculateTotal();
function calculateTotal() {
    var total = 0;
    carts.forEach(data => {
        total += parseInt(data.price.replaceAll(",", ""));
    })
    document.getElementById("totalprice").innerText = "₹" + total.toLocaleString('en-IN');
    document.getElementById("grandtotal").innerText = "₹" + total.toLocaleString('en-IN');
    document.getElementById("itemcount").innerText = `Price (${carts.length} item)`
    document.getElementById("productcount").innerText = `My Cart (${carts.length})`;
}

function createCart() {
    var x = '';
    carts.forEach((cart,i) => {
        x += `<div class="_1AtVbE col-12-12">
        <div class="zab8Yh _10k93p">
            <div class="_2nQDXZ"><a
                    href="">
                    <div class="CXW8mj" style="height: 112px; width: 112px;"><img
                            class="_396cs4  _3exPp9" alt=""
                            src="${cart.src}.jpeg">
                    </div>
                </a>
                <div class="_3fSRat">
                    <div class="_2-uG6-"><a class="_2Kn22P gBNbID"
                            href="">${cart.name}</a></div>
                    <div class="_20RCA6"> ${cart.rating ? cart.rating : ''} </div>
                    <span class="_2-ut7f _1WpvJ7">₹${cart.price}</span>
                    <div class="_3zPVJV">

                    </div>
                    <div class="_3tcB5a">
                    </div>
                </div>

            </div>
            <div class="nZz3kj _1hNI6F">
                <div class="_1uc2IE">
                    <div class="_3dY_ZR"><button onclick="removequantity(${i})" class="_23FHuj"> – </button>
                        <div class="_26HdzL"><input type="text" value="${cart.quantity}" class="_253qQJ"></div>
                        <button onclick="addquantity(${i})" class="_23FHuj"> + </button>
                    </div>
                </div>
                <div class="_10vWcL td-FUv WDiNrH">
                    <div onclick="removeproduct(${i})" class="_3dsJAO">Remove</div>
                </div>
            </div>
        </div>
    </div>`
        document.getElementById("cart").innerHTML = x;
    })
}
function addquantity(i){
    carts[i].quantity += 1;
    carts[i].price =  (parseInt(carts[i].price.replaceAll(",", "")) * carts[i].quantity).toLocaleString('en-IN')
    createCart();
    calculateTotal()
}
function removequantity(i){
    if(carts[i].quantity > 1){
        carts[i].quantity -= 1;
        carts[i].price =  (parseInt(carts[i].price.replaceAll(",", "")) * carts[i].quantity).toLocaleString('en-IN')
        createCart();
        calculateTotal();
    }
}
function removeproduct(i){
    if(carts.length == 1){
        carts.pop();
        createCart();
        calculateTotal();
        localStorage.removeItem("products")
    }else{
        carts.splice(i,1);
        createCart();
        calculateTotal();
    }

}