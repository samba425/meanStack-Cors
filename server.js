const express = require('express');
const request = require('request-promise').defaults({ strictSSL: false });
var cors = require('cors');

var app = express()
app.use(cors()); 
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 4000;

app.all('/*', async(req, res) => {
	console.log('url:',req.url.substring(1))
	if (req.url) {
		try {
			var reqObj = {
				uri: req.url.substring(1),
				method: req.method,
				json: true
			};
			let result = await request(reqObj);
			 return res.json(result)
		} catch(e) {
			return res.json(e)
		}
		
	}
})
	
app.listen(port, () => console.log(`Example app listening on port ${port}!`))