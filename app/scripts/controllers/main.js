'use strict';

angular.module('inventarioApp')
  .controller('MainCtrl', function ($scope, Product) {

        $scope.product = Product;

        $scope.add = function() {
            var save = Product.$add({
                item: $scope.item,
                qty: $scope.qty,
                diff: $scope.diff,
                ok: $scope.ok
            });

            $scope.item = '';
            $scope.qty = '';
            $scope.diff = '';
            $scope.ok = '';


            if (save) {
                alert('saved successfully');
            } else {
                alert('something went wrong');
            }
        };

        $scope.remove = function (id) {

                $scope.x;
                $scope.x = confirm("Are you sure?");
                   if($scope.x === true){
                       Product.$remove(id);
                } else {
                    return
                }





        }

  })

    .controller('EditCtrl', function ($scope, $location, $routeParams, $firebase, fbURL) {
        var productURL = new Firebase(fbURL + $routeParams.id);
        $scope.product = $firebase(productURL).$asObject();

        $scope.edit = function() {
            $scope.product.$save();
            $location.path('/');
        }
    });


