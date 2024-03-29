//var authenKey = require('../lib/authenKey');

module.exports = {
	
	// Name of the application (used as default <title>)
	appName: "testProject1",

	// Port this Sails application will live on
	port: process.env.PORT || 1338,

	// The environment the app is deployed in 
	// (`development` or `production`)
	//
	// In `production` mode, all css and js are bundled up and minified
	// And your views and templates are cached in-memory.  Gzip is also used.
	// The downside?  Harder to debug, and the server takes longer to start.
	environment: 'development',

	

	// Logger
	// Valid `level` configs:
	// 
	// - error
	// - warn
	// - debug
	// - info
	// - verbose
	//
	log: {
		level: 'verbose'
	}

};