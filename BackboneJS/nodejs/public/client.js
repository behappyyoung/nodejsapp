var model;
var collection;

var Food = Backbone.Model.extend({
    urlRoot: '/api/foods',
});

var Foods = Backbone.Collection.extend({
    url: '/api/foods'
});

var cake = new Food({ id: 0 });
var pantry = new Foods();

cake.on('sync', function () { $('.output').append('Dish loaded.  ') });
pantry.on('sync', function () { $('.output').append('Pantry loaded.  ') });

$(document).ready(function () {
    cake.fetch();
    pantry.fetch();
});

