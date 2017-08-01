var todoApp = angular.module('TodoApp', [ 'ngRoute' ],
		function($routeProvider) {
			$routeProvider.when('/', {
				templateUrl : 'list.html'
			})
			.when('/:type', {
				templateUrl : 'list.html',
				controller : 'FilterCtrl'
			})
		});

todoApp.controller('Ctrl', function($scope, $filter) {
//	@service
//	$scope.author = myService.getName();
//	$scope.version = myService.version;
	
//	@factory
//	$scope.author = myFactory.name;
//	$scope.version = myFactory.version;
	
//	$scope.version = myProvider;
	
	//開始時讀取localStorage看有沒有之前的存的，如果有的話就讀進來，沒有的話(null)就給空陣列
	var storedItems = JSON.parse(localStorage.getItem("todo-list"));
	$scope.items = !!storedItems? storedItems :[];
	
	//按下Enter觸發
	$scope.submit = function() {
		if (!!$scope.input) {
			$scope.item = {
				content : $scope.input,
				status : false
			};
			$scope.items.push($scope.item);
			
			$scope.input = '';
		}
	}

	//移除一個項目
	$scope.remove = function (index){
		$scope.items.splice(index,1);
	}
	
	//勾選所有項目
	$scope.checkAll = function(){
		//把現有的項目取出來，把每項的status值改成跟all一樣
		for(var i=0;i<$scope.items.length;i++)
			$scope.items[i].status = $scope.all;
	}
	
	//清除已完成項目
	$scope.clear = function(){
		var temp = [];
		for(var i=0;i<$scope.items.length;i++) {
			if(!$scope.items[i].status)
				temp.push($scope.items[i]);
		}
		$scope.items = temp;
	}
	
	//觀察items陣列變化
	$scope.$watch('items', function () { 
//		變化時更新參數
		$scope.remainingCount = $filter('filter')($scope.items, { status: false }).length;
		$scope.completedCount = $scope.items.length - $scope.remainingCount;
		$scope.all = !$scope.remainingCount;
		
		//陣列變化時存下來
		localStorage.setItem('todo-list',JSON.stringify($scope.items));
	}, true); //第三個參數 objectEquality:true
	
	$scope.isEmpty = function(index,item){
		if(item.content.trim() == '')
			$scope.remove(index);
	}
	
	
}); //Ctrl end

//選擇分類(代辦/已完成)時進入這個Ctrl  ， /:type
todoApp.controller('FilterCtrl', function($scope,$routeParams) {
	//由參數判斷是哪種類別: [已完成]顯示status為true的，[代辦]顯示status為false的
	$scope.isStatus = function(item){
		if($routeParams.type == 'completed')
			return item.status;
		else if($routeParams.type == 'active')
			return !item.status;
		else
			return true;
	};
	
});