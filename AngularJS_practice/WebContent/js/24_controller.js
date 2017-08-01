var skillsApp = angular.module('SkillsApp',[]);

skillsApp.controller('SkillCtrl',function($scope){
	$scope.people = [];

	//送出的事件
	$scope.submit = function () {
		// !!為轉換Boolean值寫法，相當於Boolean( input )
		if(!!$scope.skill && !!$scope.name && !!$scope.age) {
			$scope.person = {}; //如果person物件沒宣告會錯，下一行變undefined.name
			$scope.person.name = $scope.name;
			$scope.person.age = $scope.age;
			$scope.person.skill = $scope.skill;
			
			$scope.people.push($scope.person);
			
			//送出後清空
			$scope.name = '';
			$scope.age = '';
			$scope.skill = '';
		}

	}
	
});