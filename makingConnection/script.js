console.log("page loaded...");

function edit(){
    document.querySelector(".card-body h1").innerHTML = "Pedro Valerio";
}
function denyT(){
    document.querySelector("#todd").remove();
    document.querySelector(".badge").innerHTML--;
}
function acceptT(){
    document.querySelector("#todd").remove();
    document.querySelector(".badge").innerHTML--;
    document.querySelector("#connection").innerHTML++;
}
function denyP(){
    document.querySelector("#phil").remove();
    document.querySelector(".badge").innerHTML--;
}
function acceptP(){
    document.querySelector("#phil").remove();
    document.querySelector(".badge").innerHTML--;
    document.querySelector("#connection").innerHTML++;
}
