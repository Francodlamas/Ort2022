const express = require("express");
const app = express();
const PORT = 3000;

const process_data = () => {

    let x = 100;

    return {
        resultado: x
    };
};

app.use(express.json());
	
app.post("/", function (req, res) {
	console.log(req.body)
	// res.end();

    let limite = req.body.limite;
    res.send(process_data(req.body));
});

app.get("/mi_endpoint", function (req, res) {
    res.send("respuesta");
});

app.post ("/numero_aleatorio", function (req, res){
    let aleatorio;
    aleatorio=crear_aleatorio(req.body.Valor);
    res.send([aux]);
}); 
const crear_aleatorio = (limite) => {
let aux = Math.floor(Math.random() * limite)+1;

return aux;
}

const crear_carton = () => {
    let carton=[];
        for(let i=0;i<10;i++){
        carton.push(crear_aleatorio(99));  
        }
    return carton;
};
let vecCartones=[];
app.post ("/iniciar_juego", function (req, res){

   
    for(let i=0;i<req.body.num;i++){
        let carton= crear_carton();

        let cartonObjeto = {
            nombre:null,
            numeros:carton,
            estado:false
        };
      vecCartones.push(cartonObjeto);
      
    }
    res.send(vecCartones);
});

app.get( "/obtener_carton",function(req,res){

    for(i=0;i<vecCartones.length;i++){
        
        if(vecCartones[i].nombre==null){
             vecCartones[i].nombre=req.body.nombre;
             break
            }
    }

    res.send(vecCartones);
});

app.get ("/cartones",function(req,res){

    if(req.body.nombre==null){
        res.send(vecCartones);

    }
    else{
        for(i=0;i<vecCartones.length;i++){
            if(vecCartones[i].nombre==req.body.nombre){
                res.send(vecCartones[i]);
            }
        }
    }
});

app.get( "/sacar_numero",function(req,res){


});

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});

