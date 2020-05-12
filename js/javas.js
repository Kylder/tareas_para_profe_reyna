var n;

n=prompt("Ingrese la cantidad de numeros: ");

var resultado=0;
for(var i=1;i<=n;i++)
{
 resultado=resultado+Math.pow(i,2);
}

    document.write(resultado);
    console.log(resultado);
    alert(resultado);

