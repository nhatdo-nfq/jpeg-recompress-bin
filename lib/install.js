'use strict';
const path = require('path');
const binBuild = require('bin-build');
const log = require('logalot');
const bin = require('.');

bin.run(['--version']).then(() => {
	log.success('jpeg-recompress pre-build test passed successfully');
}).catch(async error => {
	log.warn(error.message);
	log.warn('jpeg-recompress pre-build test failed');

	process.exit(1);
});
