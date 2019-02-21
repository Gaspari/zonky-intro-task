angular.module('zonky-intro-task').factory('marketplaceAux', ['utils', function(utils) {

  const factory = {
    calculateAverage: calculateAverage,
  }

  return factory

  //////////////

  function calculateAverage(data) {
    if (!utils.isArray(data)) throw new TypeError('data_is_not_an_array')
    return data.reduce(function(acc, num) {return acc + num}, 0) / data.length
  }

}])