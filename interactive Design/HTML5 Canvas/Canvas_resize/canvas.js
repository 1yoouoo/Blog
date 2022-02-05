let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Rectangle
let ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(60, 60, 150 ,75)
ctx.fillRect(400, 70, 150 ,75)
ctx.fillRect(20, 300, 150 ,75)