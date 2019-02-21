describe('App', function() {

  beforeEach(module('zonky-intro-task'))

  var $controller
  var $mpAux

  beforeEach(inject(function(_$controller_, _marketplaceAux_) {
    $controller = _$controller_
    $mpAux = _marketplaceAux_
  }))

  describe('App gets loaded', function() {

    it('App gets loaded', function() {
      const ctrl = $controller('MarketplaceController', {$scope: {}})
      expect(ctrl.ratings[0]).toEqual('AAAAA')
    })

    it('Average calculates ok', function() {
      const avg = $mpAux.calculateAverage([10, 20, 30])
      expect(avg).toEqual(20)
    })

  })

})