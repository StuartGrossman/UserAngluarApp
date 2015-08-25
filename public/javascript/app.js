angular.module('app', [])
	.controller('controllerOne', [function($scope){
		var vm = this; 
		vm.stateofInput = false;
		vm.userArray = [];
		vm.user = {}; //instantiates User Object
		vm.placeholder = "this is text"
		vm.inputshow = true;
		vm.register = function(){
			vm.userArray.push(vm.user);
			console.log(vm.userArray)
			vm.user = {};
		}
		vm.startEdit = function(index){
			// console.log('im here')
			vm.inputshow = false;
			vm.stateofInput = true; 


			vm.user.first = vm.userArray[index].first;
			vm.user.last = vm.userArray[index].last;
			vm.user.email = vm.userArray[index].email;
			vm.user.username = vm.userArray[index].username;
			vm.user.password = vm.userArray[index].password;
			vm.user.password_confirm = vm.userArray[index].password_confirm;
			
		}
		vm.updateEdit = function(index){
			console.log('now where here in updateEdit')
			console.log(index)
			vm.userArray[index] = vm.user; 
			vm.stateofInput = false; 
			vm.inputshow = true;
			vm.user = {};
		}
	}
])