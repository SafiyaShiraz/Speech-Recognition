x = 0;
y= 0;

draw_circle= "";
draw_rectangle= "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;

function start()
{
document.getElementById("status").innerHTML= "Listening . . Please speak";
recognition.start();
}
recognition.onresult= function(event)
{
    console.log(event);

var content =event.results[0][0].transcript;
document.getElementById("status").innerHTML = "The speech has recognized as "+content;

if(content == "Circle")
{
    x = Math.floor(Math.random()*900);
    y = Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML = "Drawing circle..";
    draw_circle = "set";
}

if(content == "rectangle")
{
x = Math.floor(Math.random()*900);
y = Math.floor(Math.random()*600);
document.getElementById("status").innerHTML = "Drawing rectangle..";
draw_rectangle= "set";
}
}


function setup()
{
canvas = createCanvas(900, 600);
}

function draw()
{
    if(draw_circle == "set")
    {
        radius = Math.floor(Math.random()*100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Circle is drawn!";
        draw_circle = "";
    }

    if(draw_rectangle == "set")
    {
rect(x, y, 116, 145);
document.getElementById("status").innerHTML = "Rectangle is drawn!";
draw_rectangle = "";
    }
}