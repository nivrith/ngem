(function () {
  'use strict';


  var helloComponent = {
    bindings: {},
    controller: helloController,
    controllerAs: 'vm',
    templateUrl: '',
  };


  angular.module ('module')
  .component ('hello', helloComponent);


  /** @ngInject */
  function helloController(){
    var vm = this;

    return vm;

  }

} ());