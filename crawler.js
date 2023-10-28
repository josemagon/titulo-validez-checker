const rp = require('request-promise');
var cheerio = require('cheerio');
const url = 'http://titulosvalidez.educacion.gob.ar/validez/detitulos';

const Discord = require('discord.js');
const client = new Discord.Client();

const tiempoEspera = 1000*60*10;

function sendMessage(){
    client.login('MTE2NzU3NDQ2OTI1MDkyODY0MA.Gh8p4v.c2-vLRpAWzzwbcotiSoI48aFtEEJh04_azMQ9o');
    client.on("ready", () => {
    
        client.channels.get("1167573692071546902").send('Podria haber una cita.');

        client.destroy();
    });
    client.on("disconnected", function () {
        console.log("Disconnected!");
        process.exit(1); 
    });
}

function sendTest(){
    client.login('MTE2NzU3NDQ2OTI1MDkyODY0MA.Gh8p4v.c2-vLRpAWzzwbcotiSoI48aFtEEJh04_azMQ9o');
    client.on("ready", () => {
    
        client.channels.get("1167573692071546902").send('Probando 1 2 3.');

    });
    client.on("disconnected", function () {
        console.log("Disconnected!");
        process.exit(1); 
    });

    client.destroy();
}

function dormir(){
    console.log("Durmiendo 900 segundos...");
}

function checkForCita(){
    rp(url)
    .then(htmlRes => {
        const $ = cheerio.load(htmlRes)
    
        let textoTriste = "Lamentablemente no hay turnos disponibles"
    
        let contenidoBody = $('#elmsj').text()
    
        if(!contenidoBody.includes(textoTriste))
            sendMessage()
    })
    .catch(err => {
        console.log(err)
    })

}

setInterval(() => {
    checkForCita()
}, tiempoEspera);

  