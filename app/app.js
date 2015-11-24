angular.module('airbnb',
  [
    'ngStamplay',
    'ui-router',
    'app.routes',
    'ui.bootstrap',
    'app.authenticate',
    'app.admin',
    'app.booking',
    'app.home',
    'app.profile',
    'app.room',
    'UserService',
    'BookService',
    'RoomService'
  ])

  .controller('MainCtrl', MainCtrl);

  function MainCtrl() {
    var main = this;
  }
