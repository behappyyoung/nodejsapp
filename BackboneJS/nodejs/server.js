var express = require('express');
var app = express();

var foods =  ['Cake', 'Bread', 'Spinach', 'Liver', 'Cucumber'].map(function (food) {
    return { name: food };
});

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded());

app.get('/api/foods', function (request, response, next) {
    console.log('Sending foods array:');
    console.log(foods);
    return response.json(foods);
});

app.get('/api/foods/:id', function (request, response, next) {
    var id = request.params.id;
    if (isNaN(id)) return response.send(400, 'ID must be a number.');
    if (id < 0) return response.send(400, 'ID must be positive.');
    if (id >= foods.length) return response.send(400, 'ID must be less than ' + foods.length);
    console.log('Sending food instance with id %s:', id);
    console.log(foods[id]);
    response.json(foods[id]);
});

app.listen(80);