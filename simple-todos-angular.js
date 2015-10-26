Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
  
  angular.module('simple-todos', ['angular-meteor'])
    .controller('TodosListCtrl', ['$scope', '$meteor',
      function TodosListCtrl($scope, $meteor) {
        $scope.tasks = $meteor.collection(Tasks);
      }
    ]);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
