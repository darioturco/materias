const express = require('express');
const app = express();
const cors = require("cors");
const PORT = 8080;
const MONGO_URL = 'mongodb://localhost:27017/';
const BASE_NAME = 'UBA_MATERIAS_DATA';
const COLECTION_NAME = 'MATERIAS_DATA';
var mongo = null;

app.use(cors());

require('mongodb').MongoClient.connect(MONGO_URL, {useUnifiedTopology: true}, (err, db) => {
	if(err) throw err;
	console.log('\x1b[36m%s\x1b[0m', "Base de datos lista.");
	mongo = db;
});

function help(req, res){
	res.status(200).send({ok: true, mes: "The direcctions POST are: /alive, /materias, /cant, /print, /save"});
}
app.post('/', help);
app.get('/', help);
app.post('/help', help);
app.get('/help', help);

app.post('/alive', (req, res) => {
	console.log("Alive request");
	res.status(200).send({ok: true, mes: "Yes, it's alive"});
});

app.post('/materias', (req, res) => {
	mongo.db(BASE_NAME).collection(COLECTION_NAME).findOne({}, (err, resData) => {
		if(err) throw err;
		res.status(200).send({ok: true, data: resData.data});
	});
});

app.post('/cant', (req, res) => {
	mongo.db(BASE_NAME).collection(COLECTION_NAME).findOne({}, (err, resData) => {
		if(err) throw err;
		let cant = Object.keys(resData.data).length;
		res.status(200).send({ok: true, mes: "La cantidad de materias que hay son: " + cant, data: cant});
	});
});

app.post('/print', (req, res) => {
	mongo.db(BASE_NAME).collection(COLECTION_NAME).findOne({}, (err, resData) => {
		if(err) throw err;
		console.log(resData.data);
		res.status(200).send({ok: true, mes: "Data printed."});
	});
});

app.post('/save', (req, res) => {
	let newData = {}; // Escribir aca la nueva data a ingresar

	if(Object.keys(newData).length === 0){ // No agrega nada a la base de datos
		res.status(304).send({ok: false, mes: "Data not updated."});
	}else{ // Agrega la nueva data en la base de datos	
		mongo.db(BASE_NAME).collection(COLECTION_NAME).updateOne({}, {$set: newData});
		res.status(200).send({ok: true, mes: "Data updated.", data: newData});
	}
});

app.listen(PORT, () => {
	console.log("It's listening on port " + PORT);
});
