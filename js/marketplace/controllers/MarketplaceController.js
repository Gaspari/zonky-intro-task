angular.module('zonky-intro-task').controller('MarketplaceController', ['$http', '$window', 'marketplaceAux', function($http, $window, marketplaceAux) {

  const ctrl = this
  ctrl.loading
  ctrl.error

  // RATINGS
  ctrl.ratings = ['AAAAA', 'AAAA', 'AAA', 'AA', 'A', 'B', 'C', 'D']
  ctrl.activeRatings = []
  ctrl.toggleRating = toggleRating
  ctrl.itemCount = 20
  ctrl.availableItemCount = null
  ctrl.countsInited = false

  ctrl.getData = getData

  //////////////

  function getData() {
    ctrl.loading = true
    $http({
      method: 'GET',
      url: 'https://api.zonky.cz/loans/marketplace',
      params: {
        'rating__in': '["' + (ctrl.activeRatings.length ? ctrl.activeRatings : ctrl.ratings).join('","') + '"]'
      },
      headers: {
        'x-page': 0,
        'x-size': ctrl.itemCount,
        'x-order': '-datePublished',
      }
    }).then(function(res) {
      ctrl.countsInited = true
      ctrl.availableItemCount = parseInt(res.headers()['x-total'], 10)
      try {
        ctrl.average = marketplaceAux.calculateAverage(res.data.map(function(item) {return item.amount}))
      } catch (e) {
        console.log(e);
        ctrl.error = e
      }
    }).catch(function(err) {
      console.warn('marketplace getData failed', err)
      ctrl.error = err
    }).finally(function() {
      ctrl.loading = false
    })
  }

  function toggleRating(rating) {
    const index = ctrl.activeRatings.indexOf(rating)
    if (index === -1) {
      ctrl.activeRatings.push(rating)
    } else {
      ctrl.activeRatings.splice(index, 1)
    }
  }

}])