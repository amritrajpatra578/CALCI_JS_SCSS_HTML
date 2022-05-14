function clearall(){
    window.parent.location = window.parent.location.href;
}
function clear1(){
    document.getElementById("first").value = ""    
}
function clear2(){
    document.getElementById("second").value =""
}


function addd(){
    var a = parseInt(document.getElementById("first").value)
var b = parseInt(document.getElementById("second").value)
    document.getElementById("output").innerHTML = a + b
}
function subb(){
    var a = parseInt(document.getElementById("first").value)
var b = parseInt(document.getElementById("second").value)
    document.getElementById("output").innerHTML = a - b
}
function multt(){
    var a = parseInt(document.getElementById("first").value)
var b = parseInt(document.getElementById("second").value)
    document.getElementById("output").innerHTML = a * b
}
function divv(){
    var a = parseInt(document.getElementById("first").value)
var b = parseInt(document.getElementById("second").value)
    document.getElementById("output").innerHTML = a / b
}