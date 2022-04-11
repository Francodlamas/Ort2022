// Dado un array multiplicar todos sus valores por el que se encuentra en la posicion 
//anterior menos al siguiente, sin modificar el array original

const data =[
            2,3,5,12,54,5,
            -1,0,4,23,66,7
        ];
const data2=[];



        for (var i=0; i<data.length; i++) 
{
       
        data2[i]=data[i]*data[i-1]-data[i+1];
        if(i==0){
                console.log(-data[i+1]);
        }
        else if(i==data.length-1){
                console.log(data[i]*data[i-1]);
        }
        
        else{
        console.log(data2[i]);
        }
}
