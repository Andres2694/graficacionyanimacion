var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
drawFlag();
drawStar(100,70,5,30,15,'blue');
drawStar(300,217,5,30,15,'red');
function drawFlag() {
  ctx.fillStyle = "rgb(255,0,0)";
  ctx.fillRect(200, 0, 200, 150);
  ctx.fillStyle = "rgb(0,0,255)";
  ctx.fillRect(0, 150, 200, 150);

}
 function drawStar(posicionx,posiciony,puntas,radioexterno,radiointerno,color){
      var rot=Math.PI/2*3;
      var x=posicionx;
      var y=posiciony;
      var step=Math.PI/puntas;
      var colorstar=color;

      ctx.beginPath();
      ctx.moveTo(posicionx,posiciony-radioexterno)
      for(i=0;i<puntas;i++){
        x=posicionx+Math.cos(rot)*radioexterno;
        y=posiciony+Math.sin(rot)*radioexterno;
        ctx.lineTo(x,y)
        rot+=step

        x=posicionx+Math.cos(rot)*radiointerno;
        y=posiciony+Math.sin(rot)*radiointerno;
        ctx.lineTo(x,y)
        rot+=step
      }
      ctx.lineTo(posicionx,posiciony-radioexterno);
      ctx.closePath();
      ctx.lineWidth=5;
      ctx.strokeStyle=colorstar;
      ctx.stroke();
      ctx.fillStyle=colorstar;
      ctx.fill();
    }