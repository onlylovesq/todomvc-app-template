/**
 * Created by sq on 2016/10/11.
 */
(function(angular){
	angular.module('TodoApp').controller('MainController',['$scope','$window',function(s,w){
		s.title = '任务列表';
		s.text = '';
		s.todoFilter = {};
		s.todos = [
			{ id: 1, text: '吃饭', completed: false },
			{ id: 2, text: '睡觉', completed: false },
			{ id: 3, text: '打豆豆', completed: true },
			{ id: 4, text: '写代码', completed: false },
			{ id: 5, text: '约会', completed: true },
			{ id: 6, text: 'hello world', completed: true }
		];

		s.remove = function(id){
			var index = -1;

			s.todos.some(function(todo,i){
				if(todo.id === id){
					index = i;
					return true;
				}
			});

			if(index === -1){
				return w.alert('该项不存在');
			}

			s.todos.splice(index,1);
		}

		s.clearAllCompleted = function(){
			var unCompleteds = [];
			s.todos.forEach(function(todo,index){
				if(!todo.completed){
					unCompleteds.push(todo);
				}
			});

			s.todos = unCompleteds;
		}

		s.save = function(){
			if(s.text.trim().length ===0 ){
				return;
			}

			var maxId = 0;
			s.todos.forEach(function(todo){
				if(todo.id > maxId){
					maxId = todo.id;
				}
			});

			var todo = {
				id:++maxId,
				text: s.text,
				completed:false
			}

			s.todos.push(todo);
			s.text = '';
		}
	}]);
}(angular));
