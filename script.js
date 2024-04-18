var i = 0;
var txt = "greetings";
var speed = 40;

function typeWriter(id){
    if (i < txt.length) {
        document.getElementById("intro").innerHTML += txt.charAt(i);
            i++;
                setTimeout(typeWriter,speed);
    }
}
window.onload = typeWriter("intro")