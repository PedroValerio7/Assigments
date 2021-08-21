function login(element) {

    if(element.innerText == "Login"){
        element.innerText = "Logout";
    }else{
        element.innerText = "Login";
    }

    
}

function deleteD() {
    var place = document.getElementById("definition");
    place.remove();
}