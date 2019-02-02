app.service('serverRequests', function($http){
  vm = this;
  vm.postMail = function(mailData) {
    return $http.post('localhost:8080/mail', mailData)
  }
  vm.get = function() {
    return $http.get('localhost:8080/mail')
  }
})
