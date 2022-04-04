// De la lista 11, 33, 2, -1, 110, 99, 8 obtener el segundo mayor impar
{
    const lista1 = [11, 33, 2, -1, 110, 99, 8];
    lista1.sort();
lista1.reverse();
var a=0;
    for (var i=0; i<lista1.length; i++) 
    { 
       
        if(lista1[i]%2!=0 && a<2 ){
            if(a==1){
        console.log(lista1[i]);
            }
        a++;
        }
    }




}