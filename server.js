const express = require('express');
const request = require('request-promise').defaults({ strictSSL: false });
var cors = require('cors');

var app = express()
app.use(cors()); 
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 4000;


app.get('/test', (req,res) => {
	res.send('hello...')
})
app.all('/*', async(req, res) => {
	console.log('url:',req.url.substring(1))
	if (req.url) {
		try {
			var reqObj = {
				uri: req.url.substring(1),
				method: req.method,
				body:req.body,
				json: true
			};
			
			if(req['headers']) {
				reqObj['headers'] =  req.headers
			}
			console.log('--external payload',reqObj)
			let result = await request(reqObj);
			 return res.status(200).json(result)
		} catch(e) {
			return res.status(e['statusCode']).json(e['error'] ? e['error'] : e)
		}
		
	}
})
	
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
