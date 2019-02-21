angular.module('zonky-intro-task').factory('utils', [function() {

  const factory = {
    isArray: isArray,
  }

  return factory

  //////////////

  function isArray(obj) {
		return Object.prototype.toString.call(obj) === '[object Array]'
	}

}])