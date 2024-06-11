document.getElementById("button").onclick = function(){
    let email = document.getElememntById("email").value;
    let name = document.getElementById("name").value;
    let result = "<br/>Hellow, " + name.toUpperCase() + 
    "<br/>You are welcome to this website "+
    "<br/>You logged in this emain address "+ email;

    window.open("",_blank).document.write(result);
}