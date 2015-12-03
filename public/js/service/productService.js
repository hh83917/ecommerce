angular.module('eCommerceApp').service('productService', function($http) {

  this.getProducts = function() {
    return $http({
      method: "GET",
      url: '/products',
    });
  };

  this.postProduct = function(newProduct) {
    console.log(newProduct);
    return $http({
      method: "POST",
      url: '/products',
      data: newProduct
    });
  };

  this.editProduct = function(id, editField) {
    return $http({
      method: "PUT",
      url: '/products/' + id,
      data: editField
    });
  };

  this.deleteProduct = function(id) {
    return $http({
      method: "DELETE",
      url: '/products/' + id
    });
  };

});
