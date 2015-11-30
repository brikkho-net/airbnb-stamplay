angular.module('airbnb',
  [
    'ngStamplay',
    'ui.router',
    'ngAnimate',
    'app.routes',
    'ui.bootstrap',
    'app.authenticate',
    'app.admin',
    'app.booking',
    'app.home',
    'app.profile',
    'app.room',
    'UserService',
    'BookingService',
    'RoomService'
  ])

  .controller('MainCtrl', MainCtrl);

  function MainCtrl() {
    var main = this;
    console.log('main')
  }
