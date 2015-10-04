'use strict';

/* Controllers */
phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', function ($scope, $http) {
	$http.get('phones/phones.json').success(function (data) {
		$scope.phones = data;
//		$scope.phones = data.splice(0, 5);
	});

	$scope.orderProp = 'age';
}]);
