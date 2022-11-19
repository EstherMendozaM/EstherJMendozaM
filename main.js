function myNav(){
    let bar = document.querySelector(".bar");
    let nav = document.querySelector(".navigation");
    bar.onclick = ()=>{
        if(nav.style.left == "0%"){
            nav.style.left = "-100%";
            bar.src = "pic/menu.png"
        }else{
            nav.style.left = "0%";
            bar.src = "pic/x.png"
        }
    }
}
myNav();

window.onload = ()=>{
    let homeContent = document.querySelector(".home-content");
    homeContent.style.left = "50px"
}



//función que valida el ingreso de solo letras
function sololetras(evt){
    // code is the decimal ASCII representation of the pressed key.
    var code = (evt.which) ? evt.which : evt.keyCode;
    if(code==8) { //barra espaciadora
        return true;
    }else if(code>=65 && code<=90 || code>=97 && code<=122) { // son letras de a-z, A-Z
        return true;
    } else{ //otra tecla
        return false;
    }
}

//función que valida el ingreso de solo números
function solonumeros(evt,control,cantidad){
    xlongitud=document.getElementById(control).value.length; 
    // code is the decimal ASCII representation of the pressed key.
    var code = (evt.which) ? evt.which : evt.keyCode;
    //const x=5;
    //(x=1) ? alert("corecto"):alert("Incorecto");
    if((code>=48 && code<=57) && xlongitud<cantidad) { // es un número
        return true;
    } else{ // otra tecla
        return false;
	}
}  

//Validación Contacto

function validanombre(){
    if(document.getElementById("nombre").value==0){
        alert("Por favor, falta ingresar el nombre");
    }
}
function validacorreo(){
    if(document.getElementById("correo").value==0){
        alert("Por favor, falta ingresar el correo");
    }
}
function validacelu(){
    if(document.getElementById("celu").value==0){
        alert("Por favor, falta ingresar el teléfono");
    }
}
function valida(){
    validanombre();
    validacorreo();
    validacelu();
}


//Validación Pago

function procesax1(){
    if(document.getElementById("x1").value==0){
        alert("Por favor, falta ingresar el nombre");
    }
}
function procesax2(){
    if(document.getElementById("x2").value==0){
        alert("Por favor, falta ingresar el email");
    }
}
function procesax3(){
    if(document.getElementById("x3").value==0){
        alert("Por favor, falta ingresar la dirección");
    }
}
function procesax4(){
    if(document.getElementById("x4").value==0){
        alert("Por favor, falta ingresar el departamento");
    }
}
function procesax5(){
    if(document.getElementById("x5").value==0){
        alert("Por favor, falta ingresar el país");
    }
}
function procesax6(){
    if(document.getElementById("x6").value==0){
        alert("Por favor, falta ingresar el código postal");
    }
}
function procesax7(){
    if(document.getElementById("x7").value==0){
        alert("Por favor, falta ingresar tarjeta");
    }
}
function procesax8(){
    if(document.getElementById("x8").value==0){
        alert("Por favor, falta ingresar el número de tarjeta");
    }
}
function procesax9(){
    if(document.getElementById("x9").value==0){
        alert("Por favor, falta ingresar la fecha");
    }
}
function procesax10(){
    if(document.getElementById("x10").value==0){
        alert("Por favor, falta ingresar el CVV");
    }
}
function procesax11(){
    if(document.getElementById("x11").value==0){
        alert("Por favor, falta ingresar el correo");
    }
}

function procesa(){
    procesax1();
    procesax2();
    procesax3();
    procesax4();
    procesax5();
    procesax6();
    procesax7();
    procesax8();
    procesax9();
    procesax10();
    procesax11();
}