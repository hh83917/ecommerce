angular.module('eCommerceApp').controller('homeCtrl', function($scope, productService) {

  productService.getProducts().then(function(response) {
    // console.log(response);
    $scope.products = response.data;
  });

});
