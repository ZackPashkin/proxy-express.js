


var express = require('express');
var request = require('request');
var app = express();




app.get('/api', function(req, res){
    request('https://api.coinmarketcap.com/v1/ticker/?limit=10' + '', function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body);
            res.send(body);
        }

        });
});




app.listen(6000);
console.log('Server running on port %d', 6000);


