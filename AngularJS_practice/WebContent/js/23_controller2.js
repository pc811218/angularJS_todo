var myApp = angular.module('MyApp', []);
 
myApp.controller('Ctrl', function($scope){
	$scope.text = 'Hello Kitty';
});

myApp.filter('myFilter',function(){
	return function(str){
		return str.toLowerCase().replace(/\s+/g,'-');
	};
});

myApp.filter('clean',function(){
	return function(str,sparator){
		return str.toLowerCase().replace(/\s+/g, sparator || '-');
	};
});

myApp.filter('camel',function(){
	return function(str){
			var charAry = str.split('');
			for(var i=0;i<charAry.length;i++) {
				if(i%2==0) 
					charAry[i] = charAry[i].toLowerCase();
				else
					charAry[i] = charAry[i].toUpperCase();
			}
		return charAry.join('');
	};
});
