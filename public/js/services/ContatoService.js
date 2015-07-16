angular.module('contatooh').factory('ContatoService', function($resource){
	return $resource('/contatos/:id');
});