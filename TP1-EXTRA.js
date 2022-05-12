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

app.post("/numero_aleatorio", function (req, res) {
    let aleatorio;
    aleatorio = crear_aleatorio(req.body.Valor, 1);
    res.send([aleatorio]);
});

const crear_aleatorio = (limiteMaximo) => {
    let aux = Math.floor(Math.random() * limiteMaximo) + 1;

    return aux;
}

const en_decena = (num) => num === 100 ? 10 : Math.floor(num / 10) + 1;

const decenas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const rnd = () => Math.round(Math.random() * 100);

const decena_completa = (num) => {
    const decena = en_decena(num);

    if (decenas[decena - 1] >= 2) {
        return true;
    } else {
        decenas[decena - 1] = decenas[decena - 1] + 1;
        return false;
    }
}

const crear_carton = () => {
    let Auxcarton = [];
    let aux;
    let i=0;
    
    while (i < 15) {
        aux = rnd();
        if (decena_completa(aux)) {
            Auxcarton.push(aux);
            i++;
        } else {
            console.log(`Decena completa`);
            
        }
    }
    return Auxcarton;
};

let vecCartones = [];
app.post("/iniciar_juego", function (req, res) {

  
    for (let i = 0; i < req.body.num; i++) {

        let carton = [];      
        carton = crear_carton();
        console.log(carton);
        let cartonObjeto = {
            nombre: null,
            numeros: carton,
            estado: "incompleto"
        };
        vecCartones.push(cartonObjeto);

    }
    res.send(vecCartones);
});

app.get("/obtener_carton", function (req, res) {

    for (i = 0; i < vecCartones.length; i++) {

        if (vecCartones[i].nombre == null) {
            vecCartones[i].nombre = req.body.nombre;
            break
        }
    }

    res.send(vecCartones);
});

app.get("/cartones", function (req, res) {

    if (req.body.nombre == null) {
        res.send(vecCartones);

    }
    else {
        for (i = 0; i < vecCartones.length; i++) {
            if (vecCartones[i].nombre == req.body.nombre) {
                res.send(vecCartones[i]);
            }
        }
    }
});
app.get("/sacar_numero", function (req, res) {
    let aux = 0;
    const esIgualMenos1 = (currentValue) => currentValue == -1;
    const incompleto = (currentValue) => currentValue.estado == "incompleto";

    while (vecCartones.every(incompleto)) {

        aux = crear_aleatorio(99);
        for (i = 0; i < vecCartones.length; i++) {
            if (vecCartones[i].numeros.every(esIgualMenos1)) {
                vecCartones[i].estado = "completo";
            }
            for (let a = 0; a < 15; a++) {
                if (vecCartones[i].numeros[a] == aux) {
                    vecCartones[i].numeros[a] = -1;
                }
            }
            if (vecCartones[i].estado == "completo") {
                break;
            }
        }
    }
    res.send(vecCartones[i].nombre);
});
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

