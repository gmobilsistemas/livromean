var mongoose = require('mongoose');

module.exports = function(uri){

	process.on('SIGINT', function(){
		mongoose.connection.close(function(){
			console.log('Mongoose. Desconectado ao termino da aplicação');
			//0 indica que a finalização ocorreu sem erros
			process.exit(0);
		});
	});

	mongoose.set('debug', true);

	mongoose.connect(uri, { server : { poolSize : 15 }});

	mongoose.connection.on('connected', function(){
		console.log('Mongoose conectado em ' + uri);
	});

	mongoose.connection.on('disconnected', function(){
		console.log('Mongoose desconectado de ' + uri);
	});

	mongoose.connection.on('error', function(){
		console.log('Mongoose. Erro na conexão.' + erro);
	});

};