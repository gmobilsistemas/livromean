angular.module('contatooh').controller('ContatoController', 
	function($scope, $routeParams, ContatoService) {

	if($routeParams.contatoId){
		ContatoService.get({id : $routeParams.contatoId},
			function(contato){
				$scope.contato = contato;
			},
			function(erro){
				$scope.mensagem = {
					texto : 'Não foi possível obter o contato'
				};
				console.log(erro);
			}
		);
	}else{
		$scope.contato = new ContatoService();
	}

	$scope.salva = function(){
		$scope.contato.$save()
			.then(function(){
				$scope.mensagem = {texto : 'Salvo com sucesso'};
				//Limpar o formulario
				$scope.contato = new ContatoService();
			})
			.catch(function(erro){
				$scope.mensagem = {texto : 'Não foi possível salvar'};
			}
		);
		//Para voltar a pagina da lista de contatos	
		//$scope.changeRoute("#/");
	};

	/*
	$scope.changeRoute = function(url, forceReload){
		$scope = $scope || angular.element(document).scope();
		if(forceReload || $scope.$$phase){
			window.location = url;
		}else{
			$location.path(url);
			$scope.$apply();
		}
	};
	*/
	ContatoService.query(function(contatos){
		$scope.contatos = contatos;
	});

});