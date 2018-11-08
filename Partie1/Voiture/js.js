var c = document.getElementById('mon_canvas');
var ctx = c.getContext("2d");
ctx.lineWidth = 2;

// Base de la voiture
ctx.fillStyle = "#00b453";
ctx.fillRect(111,120,225,70);
ctx.fillRect(50,190,348,70);

//Les roues de la voituress
ctx.beginPath();
ctx.arc(90,303,44,0,Math.PI*2,true);
ctx.strokeStyle = "grey";
ctx.fillStyle = "#cdcdcd";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(355,303,44,0,Math.PI*2,true);
ctx.strokeStyle = "grey";
ctx.fillStyle = "#cdcdcd";
ctx.fill();
ctx.stroke();
