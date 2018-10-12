(function () {
  'use strict';


  var {{name}}Component = {
    bindings: {},
    controller: {{name}}Controller,
    controllerAs: 'vm',
    templateUrl: '',
  };


  angular.module ('{{name}}')
  .component ('{{name}}', {{name}}Component);


  /** @ngInject */
  function {{name}}Controller(){
    var vm = this;




    return vm;

  }

} ());