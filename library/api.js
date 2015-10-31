//var secrets = require('../secrets.json');

var api = {
	vars: {
		baseUrl: 'http://localhost:8000/'
	},
	testing: function() {
		return this.vars.baseUrl;
	}
}

module.exports = api;