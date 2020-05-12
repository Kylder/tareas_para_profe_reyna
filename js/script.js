
// var texto, resultado;
// texto = prompt("Ingresar numero: ")
// resultado = Math.sqrt(texto)
// console.log(resultado);
// document.write(resultado);
// alert(resultado);

// var x,y, op;
// x = parseFloat(prompt("n1: "));
// y = parseFloat(prompt("n2: "));
// op = parseInt(prompt("Op: "));
// if(a>b)
// {
//     mostrar (a);
// } 
// else if (b>a){
// {
//     mostrar (b);
// }
// function mostrar(resultado)
// {
//     document.write(resultado);
//     console.log(resultado);
//     alert(resultado);
// }
// switch(op)
// {
//     case 1: mostrar(suma()); 
//     break;
//     case 2: mostrar(resta()); 
//     break;
//     case 3: mostrar(multi()); 
//     break;
//     case 4: mostrar(divi()); 
//     break;
//     default:break;
//  }
//  function suma ()
//  {
//      return (x+y);
//  }
//  function resta ()
//  {
//      return (x-y);
//  }
//  function multi() 
//  {
//      return (x*y);
//  }
//  function divi()
//  {
//      if(y==0)
//      return "Error Syntax";
//          return (x/y);
//  }

var x,y,op;
var rest = document.getElementById("result");
function calcular ()
 {
    x = parseInt(document.getElementById("n1").value);
    y = parseInt( document.getElementById("n2").value);
    op = parseInt(document.getElementById("oper").value);
    document.getElementById("result").value = "Result: ";
    switch(op)
    {
        case 1: rest.value = suma(); 
        break;
        case 2: rest.value = resta();  
        break;
        case 3: rest.value = multi();  
        break;
        case 4: rest.value = divi(); 
        break;
        default:break;
        
    }
    function suma ()
    {
        return (x+y);
    }
    function resta ()
    {
        return (x-y);
    }
    function multi() 
    {
        return (x*y);
    }
    function divi()
    {
        if(y==0)
        return "Error Syntax";
            return (x/y);
    }
 }
