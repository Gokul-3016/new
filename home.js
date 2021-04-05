window.onload = (event) => {
    if(sessionStorage.getItem('user')){
        window.location.href = "productlist.html";
    }
  };
function onClick() {
    let uname = document.getElementById("exampleInputEmail1").value;
    let pass = document.getElementById("exampleInputPassword1").value;
    if (uname == 'ajereez@gmail.com' && pass == 'jereez') {
        sessionStorage.setItem('user',uname);
        document.forms[0].action = './productlist.html';
    } else {
        alert("Invalid Credentials")
    }
  
}

