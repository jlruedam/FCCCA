function muestraMenu() {
    const nabvar = document.querySelector('.navbar');

    if(nabvar.style.display == "flex"){
        nabvar.style.display = "none";
    }else{
        nabvar.style.display = "flex"; 
    }

}