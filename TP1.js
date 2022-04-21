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
    let aux = Math.floor(Math.random() * req.body.Valor)+1;
    res.send([aux]);
}); 

const crear_carton = () => {

    let carton = [];
        for(let i=0;i<10;i++){
        carton[i]=numero_aleatorio(99);
        
        }
    return {
        resultado: carton
    };
};



app.post ("/iniciar_juego", function (req, res){

    for(let i=0;i<10;i++){

    
    }

});

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});

