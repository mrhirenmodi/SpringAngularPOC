var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var errorJson = {  "error": "Could not decode request: JSON parsing failed" };

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Validate the Json Format, If invalid Json then response back to error json with status 400
app.use(function(err,req,res,next) {

res.status(400).send(errorJson);

});

//Process the request Json input to build the response Json
app.post('/', function (req, res) {
	var inputJson;	
	var outputJson = {};
	var response = [];
	var responseJson = {};

	try {
		inputJson = req.body;

		outputJson.response = response;

		//Interate input json object
		for(var i = 0; i < inputJson.payload.length; i++) {

			responseJson = {
				"concataddress" : inputJson.payload[i].address.buildingNumber + " " + inputJson.payload[i].address.street + " " +
						  inputJson.payload[i].address.suburb + " " + inputJson.payload[i].address.state + " " +
						  inputJson.payload[i].address.postcode,
				"type" : inputJson.payload[i].type,
				"workflow" : inputJson.payload[i].workflow
			}
			outputJson.response.push(responseJson);
		}
	}catch(error) {
		
		res.status(400).send(errorJson);
	}

	res.send(outputJson);
});

var port = 9000;
app.listen(port);
console.log('Listen on port',port);

