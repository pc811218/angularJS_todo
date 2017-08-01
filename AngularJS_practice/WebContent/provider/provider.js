angular.module('TodoApp')
	.service('myService',function(){
		var self = this;
		self.getName = function(){
			return 'Peer';
		};
		self.version = 2;
	})
	.factory("myFactory", function() {
		return {
			name:'Peer(F)',
			version:5
		}
	})
