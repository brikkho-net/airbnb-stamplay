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
    'app.home-show',
    'app.profile',
    'app.room',
    'UserService',
    'BookingService',
    'RoomService',
    'google.places'
  ])

  .controller('MainCtrl', MainCtrl);

  function MainCtrl() {
    var main = this;
    console.log('main')
  }
