var c = document.getElementById('mon_canvas');
var ctx = c.getContext("2d");

// Base de la maison
ctx.fillStyle = "lightblue";
ctx.fillRect(100,120,225,250);

//fenêtres
ctx.fillStyle = "#c9c9c9";
ctx.fillRect(125,145,45,45);
ctx.fillRect(255,145,45,45);

//La porte
ctx.fillStyle = "#c9c9c9";
ctx.fillRect(188,290,50,80);

//Le toit
ctx.fillStyle = "#d38535"
ctx.globalCompositeOperation = "destination-over";
ctx.rotate(45 * Math.PI / 180);
ctx.fillRect(155.5,-145.5,158.5,158.5);
