//var secrets = require('../secrets.json');
var request = require('request');
var async = require('async');

var api = {
	vars: {
		baseUrl: 'http://localhost:8000/'
	},
	testing: function() {
		return this.vars.baseUrl;
	},
	baseRequest: function(url, params, callback) {
		var completeUrl = this.vars.baseUrl + url;
		request(completeUrl, function(error, response, body){
			if (!error && response.statusCode == 200){
			    callback(response, body);
            } else {
                callback(response, body);
            }
		});
	},
	getUsers: function() {
		response = this.baseRequest('users/', {}, function(response, body){
            console.log(body);
            return response;
        });
	}
}

module.exports = api;
