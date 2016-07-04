/**/
/*
 * index_page.js
 * 1. handle base template
 * 2. handle whole front-end templates routing
 * 
 * */
(function($){
  'use strict';
  document.addEventListener("deviceready", onDeviceReady, false);
  function onDeviceReady() {
      // alert(device.serial);
      window.my_device_info = {UUID: device.uuid, SERIAL: device.serial};
  }

  /* Angular.js */
  /* init angular */
  angular.element(document).ready(function(){
        angular.bootstrap(document.body, ['chainsApp']);
  });

  // declare app level module which depends on filters, and services, and modify $interpolateProvider to avoid the conflict with jinja2' symbol
  window.chains_app = window.chains_app || angular.module('chainsApp', [ 'ui.router', 'ngAnimate' ], function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  });

  // global values
  window.chains_app.value('APP_VALUES',{
    EMAIL : 'gogistics@gogistics-tw.com',
    TITLE : 'WINEver',
    CRYPTO_PWD: 'GOSI398fe42g7FKJRUS37HSE52GE760rb907veBT'
  });

  // configure app
  window.chains_app.config(function($stateProvider, $urlRouterProvider){
    // nested templates and routing
  });

  // run app
  window.chains_app.run(function(APP_VALUES){
  	// 
  });

  // services; http://45.79.106.150:9999/api/get-info?requested_info=addresses

  /* controllers */
  function serviceController($state, $scope, $http, $window, $timeout, APP_VALUES){
    // set variables
    var ctrl = this;
    alert('Hello Chains');
  }
  serviceController.$injector = ['$state', '$scope', '$http', '$window', '$timeout', 'APP_VALUES'];
  window.chains_app.controller('serviceCtrl', serviceController);
  /* end of controllers */
})(jQuery);
