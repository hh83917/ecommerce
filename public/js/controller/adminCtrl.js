angular.module('eCommerceApp').controller('adminCtrl', function($scope, productService) {

  $scope.editButton = true;
  $scope.displayProduct = true;

  productService.getProducts().then(function(response) {
    console.log(response);
    $scope.products = response.data;
  });

  $scope.addNewProduct = function(newProduct) {
    // console.log(newProduct);
    productService.postProduct(newProduct).then(function(response) {
      $scope.newProduct = "";
      console.log('hi');
      productService.getProducts().then(function(response) {
        console.log(response);
        $scope.products = response.data;
      });
    });
  };

  $scope.applyEdit = function(id, editField) {
    productService.editProduct(id, editField).then(function() {
      productService.getProducts().then(function(response) {
        console.log(response);
        $scope.products = response.data;
      });
    });
  };

  $scope.deleteProduct = function(id) {
    // console.log(id);
    var x = confirm("Are you sure you want to delete this product?");
    if (x === true) {
      productService.deleteProduct(id).then(function() {
        productService.getProducts().then(function(response) {
          console.log(response);
          $scope.products = response.data;
        });
      });
    }
  };


});
