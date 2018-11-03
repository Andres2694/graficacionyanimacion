resultado= document.getElementById('result');
nummer = document.getElementById('number');
nummer.onchange=function(){
      var asterisco="*";
      var i;
      var contador =1;
      var valor = parseInt(document.getElementById("number").value);
      var tipo=(valor%2)?"Impar":"Par";
      if(tipo=="Par"){
      resultado.innerHTML+="Error el valor es "+tipo+"<br>"; 
      }else{
        for(i=valor;i>=1;i--){
          for(var x=0;x<=valor;x++){
              resultado.innerHTML+=" "; 
          }
          for(var y=1; y<=contador; y++){
            resultado.innerHTML+=asterisco;
          }
          resultado.innerHTML+="<br/>";
          contador +=1;
        }
        for (var r = valor-1; r>=1; r--){
          for(var n = valor-1; n>=r; n--){
            resultado.innerHTML+=" ";
            resultado.innerHTML+="<span style=\"color:white;font-size: 1em; font-family:arial, helvetica, sans-serif;\">/<\/span>";
          }
          for (var m = 2; m<=contador-1;m++){
            resultado.innerHTML+="*";
          }
          resultado.innerHTML+="<br/>";
          contador-=1;
        }
      }
      return false;
    }