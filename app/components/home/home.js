angular
    .module('app.home', [])
    .controller('HomeCtrl', HomeCtrl);

function HomeCtrl($scope, $state) {

    var home = this;
    home.open = open;
    home.today = today();
    home.search = search;
    home.searchErrors = false;
    home.category = '';
    home.searchLocation = '';

    function today() {
        home.dt = new Date();
    };

    function removeErrors() {
      home.searchErrors = false;
    }


  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable dates that have already been picked - this example disables weekends for now
  $scope.disabled = function(date, mode) {
    // return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();
  $scope.maxDate = new Date(2020, 5, 22);

  $scope.openCheckIn = function($event) {
    $scope.status.openedCheckIn = true;
  };

  $scope.openCheckOut = function($event) {
    $scope.status.openedCheckOut = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];

  $scope.showCheckIn = function(date) {
    console.log('check in: ', date)
  }

  $scope.showCheckOut = function(date) {
    console.log('check out: ', date)
  }

  $scope.status = {
    openedCheckIn: false,
    openedCheckOut: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 2);
  $scope.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<$scope.events.length;i++){
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };

  function search() {
    console.log('location: ', home.searchLocation)
    console.log('equip category: ', home.category)
    if (home.searchLocation === '' || home.category === '') {
      home.searchErrors = true;
      return;
    }
    $state.go('homeSearchResults');
  }

  $scope.categories = [
    { id: 1, value: 1, name: 'Aerial Equipment' },
    { id: 2, value: 2, name: 'Air Tools' },
    { id: 3, value: 3, name: 'Compaction and Paving' },
    { id: 4, value: 4, name: 'Concrete and Masonry' },
    { id: 5, value: 5, name: 'Earthmoving' }
  ];

  home.pieces = [
    { id: 1, value: 1, name: '1 Piece' },
    { id: 2, value: 2, name: '2 Pieces' },
    { id: 3, value: 3, name: '3 Pieces' },
    { id: 4, value: 4, name: '4 Pieces' },
    { id: 5, value: 5, name: '5 Pieces' },
    { id: 6, value: 6, name: '6 Pieces' },
    { id: 7, value: 7, name: '7 Pieces' },
    { id: 8, value: 8, name: '8 Pieces' },
    { id: 9, value: 9, name: '9 Pieces' },
    { id: 10, value: 10, name: '10+ Pieces' }
  ];

  home.piece = home.pieces[0];

  home.results = [
    { id: 1, name: 'Aerial Equipment', image: 'http://www.birents.com/itemimages/6076.jpg' },
    { id: 2, name: 'Air Tools', image: 'http://www.birents.com/itemimages/6076.jpg' },
    { id: 3, name: 'Compaction and Paving', image: 'http://www.birents.com/itemimages/6076.jpg' },
    { id: 4, name: 'Concrete and Masonry', image: 'http://www.birents.com/itemimages/6076.jpg' },
    { id: 5, name: 'Earthmoving', image: 'http://www.birents.com/itemimages/6076.jpg' },
    { id: 6, name: 'Compaction and Paving', image: 'http://www.birents.com/itemimages/6076.jpg' },
    { id: 7, name: 'Concrete and Masonry', image: 'http://www.birents.com/itemimages/6076.jpg' },
    { id: 8, name: 'Concrete and Masonry', image: 'http://www.birents.com/itemimages/6076.jpg' },
    { id: 9, name: 'Compaction and Paving', image: 'http://www.birents.com/itemimages/6076.jpg' },
    { id: 10, name: 'Earthmoving', image: 'http://www.birents.com/itemimages/6076.jpg' }
  ];

  // $scope.category = $scope.categories[0];

}
