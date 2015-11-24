angular.module('app.routes', [])

.config(AppRoutes);

function AppRoutes($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/components/home/home.html',
    controller: 'HomeCtrl as home'
  })

  .state('room', {
    url: '/room',
    templateUrl: 'app/components/room/room.html',
    controller: 'RoomCtrl as room'
  })

  .state('booking', {
    url: '/booking',
    templateUrl: 'app/components/booking/booking.html',
    controller: 'BookingCtrl as booking'
  })

  .state('authenticate', {
    url: '/authenticate',
    templateUrl: 'app/components/authenticate/authenticate.html',
    controller: 'AuthenticateCtrl as authenticate'
  })

  .state('profile', {
    url: '/profile',
    templateUrl: 'app/components/profile/profile.html',
    controller: 'ProfileCtrl as profile'
  })

  .state('admin', {
    url: '/admin',
    templateUrl: 'app/components/admin/admin.html',
    controller: 'AdminCtrl as admin'
  });
}
