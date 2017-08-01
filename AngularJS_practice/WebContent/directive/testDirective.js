angular.module("DirectiveApp", [])
	.directive("hello", function() {
		return {
			restrict: "E",
			template:'<div>Hello world!</div>'
		}
	})
	.directive("replace", function() {
		return {
			restrict: "E",
			template: "<div>replaced!</div>",
			replace: true
		}
	})