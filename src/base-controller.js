app.controller('base', ['$scope', 'serverRequests', function($scope, serverRequests){
  var vm = this;
  vm.veme = 'final'
  $scope.init = 'inicial';
  $scope.descricao = 'Envio de e-mail';
  $scope.props = {}

  var singleton = function(){
    return {
      from: '',
      to: '',
      text: '',
      color: {
        red: 'red',
        white: 'white',
        cyan: 'cyan'
      }
    }
  };
  vm.emailContent = $scope.props;
  $scope.mails = [];
  $scope.colorStyle = '';



  $scope.$watch(function(scope){
    return scope.init
  }, function(){
    console.log('mudou')
    $scope.$broadcast('colorHasChanged')
  })

  $scope.$on('changeColor', function(colorData){
    $scope.colorStyle = colorData.color
  })

  $scope.$on('from', function(event, value){
    if(value.value.indexOf('@') !== -1){
      var semArroba = value.value.split('@')
      value.value = semArroba[0]
    }
    $scope.init = value.value
  })

  $scope.$on('to', function(event, value){
    if(value.value.indexOf('@') !== -1){
      var semArroba = value.value.split('@')
      value.value = semArroba[0]
    }
    vm.veme = value.value
  })

  $scope.$on('submitRequest', function(formData){
    console.log(formData)
    serverRequests.postMail(formData).then(function(answer){
      console.log(answer)
    }).catch(function(error){
        console.log(error)
    })
  });

  vm.send = function(formData) {
    serverRequests.postMail(formData).then(function(answer){
    console.log(answer)
  }).catch(function(error){
      console.log(error)
  })
  }
}])
