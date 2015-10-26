Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
  
  angular.module('simple-todos', ['angular-meteor'])
    .controller('TodosListCtrl', ['$scope', '$meteor',
      function TodosListCtrl($scope, $meteor) {
        $scope.tasks = $meteor.collection(function () {
          return Tasks.find({}, { sort: { createdAt: -1 } });
        });

        $scope.addTask = function (newTask) {
          $scope.tasks.push({
            text: newTask,
            createdAt: new Date()
          });
        };
      }
    ]);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
