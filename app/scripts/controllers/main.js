'use strict';

angular.module('guardkidsApp')
.controller('MainCtrl', function () {
  $('#profile-tab').click(function (e) {
    e.preventDefault()
    console.log('asd');
    $(this).tab('show');
  });
  $('#friends-tab').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  });
  $('#filter-tab').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  });
});
