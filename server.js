var express = require('express');

var app = express();

app.use(express.static('public'));

app.get("/",(req, res)=>{
	res.send("welcome");
});

app.listen(8080);

console.log("server is running");