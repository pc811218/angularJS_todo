var onePiece = angular.module('OnePiece', ['ngRoute'],function($routeProvider){
	$routeProvider.when('/',{
		templateUrl : 'view.html'
	}).when('/edit/:idx',{
		templateUrl : 'edit.html',
		controller:'EditCtrl'
	}).when('/hello/:message/:index/:word',{
		templateUrl : 'hello.html',
		controller: 'GreetingCtrl'
	}).when('/add',{
		templateUrl : 'add.html',
		controller: 'AddCtrl'
	}).otherwise({
		redirectTo : '/'
	});
	
});

//打招呼 /hello/:message/:index/:word
onePiece.controller('GreetingCtrl', function($scope, $routeParams){
	$scope.greeting = $routeParams.message;
	$scope.index = $routeParams.index;
	$scope.word = $routeParams.word;
})

//編輯角色 /edit/:index
onePiece.controller('EditCtrl',function($scope, $routeParams){
	$scope.idx = $routeParams.idx;
})

//新增角色 /add
onePiece.controller('AddCtrl',function($scope){
	$scope.add = function () {
		$scope.friends.push({
			name: $scope.newName,
			reward: $scope.newReward
		});
		
		$scope.newName='';
		$scope.newReward='';
		alert('新增成功!');
	}
})

onePiece.controller('OnePieceCtrl', function($scope){
	$scope.friends = [{
		name: '蒙其·D·魯夫', 
		reward: 400000000
	}, {
		name: '羅羅亞·索隆', 
		reward: 120000000
	}, {
		name: '娜美', 
		reward: 16000000
	}, {
		name: '騙人布', 
		reward: 30000000
	}, {
		name: '香吉士', 
		reward: 77000000
	}, {
		name: '多尼多尼·喬巴', 
		reward: 50
	}, {
		name: '妮可·羅賓', 
		reward: 80000000
	}, {
		name: '佛朗基', 
		reward: 44000000
	}, {
		name: '布魯克', 
		reward: 33000000
	}];
});