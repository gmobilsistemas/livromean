angular.module('contatooh').controller('ContatosController', function($scope, ContatoService) {
	$scope.filtro = '';
	$scope.contatos = [];
	$scope.mensagem = {texto : ''};

	function buscaContatos(){
		ContatoService.query(
			function(contatos){
				$scope.contatos = contatos;
				$scope.mensagem = {};
			},
			function(erro){
				console.log(erro);
				$scope.mensagem = {
					texto : 'Não foi possível obter a lista'
				};
			}
		);
	};

	buscaContatos();

	$scope.remove = function(contato){
		ContatoService.delete({id : contato._id},
			buscaContatos,
			function(erro){
				console.log(erro);
				$scope.mensagem = {
					texto : 'Não foi possível remover o contato'
				};
			}
		);
	};
});