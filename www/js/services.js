angular.module('starter.services', [])

.factory('Devices', function($http) {
  // Might use a resource here that returns a JSON array

  var ipServer = 'http://192.168.1.106:4444';

  return {
    deviceCommand: function(data) {
      console.log(data.deviceNum);
      console.log(data.command);
      return $http.post(ipServer + '/device/control', data);
    }
  };
});
