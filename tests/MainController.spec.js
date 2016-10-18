describe('MainController', function() {  // describe controllername
  beforeEach(module('app'));  //before each test, use module app
  var $controller;

  beforeEach(inject(function(_$controller_){  //inject the controller service given to use by ngMock
    $controller = _$controller_;  //create custom $scope
  }));
  
  it ('should have Steve Jobs name', function() {
    var $scope = {};

    var controller = $controller('MainController', { $scope: $scope });
    expect(controller.name).toEqual('Steve Jobs');
  })
});
