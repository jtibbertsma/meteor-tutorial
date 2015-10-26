if (Meteor.isClient) {
  
  angular.module('simple-todos', ['angular-meteor'])
    .controller('TodosListCtrl', ['$scope',
      function TodosListCtrl($scope) {
        $scope.tasks = [
          { text: 'This is task 1' },
          { text: 'This is task 2' },
          { text: 'This is task 3' }
        ];
      }
    ]);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
