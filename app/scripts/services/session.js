'use strict';

angular.module('guardkidsApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
