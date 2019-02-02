app.directive('containerBase', function(){
  return {
    scope: {
      descricao: '=',
      input: '='
    },
    restrict: 'E',
    link: function link(scope, element, attrs) {
      scope.fromProps = {ngModel: 'from', id: 'formFrom', name: 'from', type: 'text', style:'width: 200px;'};
      scope.toProps = {ngModel: 'to', id: 'formTo', name: 'to', type: 'text', style:'width: 200px;'};
      scope.titleProps = {ngModel: 'title', id: 'formTitle', name: 'title', type: 'text', style:'width: 400px;'};
      scope.textProps = {ngModel: 'text', id: 'formText', name: 'text', type: 'textarea', style:'width: 400px;'};


      scope.cliqueSubmit = function($event, formData){
        $event.preventDefault();
        scope.$emit('submitRequest', formData)
      }
    },
    templateUrl: './templates/container.html'
  }
})

app.directive('inputField', function($timeout){
  return {
    scope: {
      props: '='
    },
    restrict: 'E',
    templateUrl: './templates/input-field.html',
    link: function link(scope, element, attrs) {
      $timeout(function(){
        console.log(scope.props)
        scope.sobe = function(value, tipo){
          if(tipo === 'from'){
            scope.$emit('from', {value: value})
          }
          if(tipo === 'to'){
            scope.$emit('to', {value: value})
          }
        }



      }, 0)
    }
  }
})

app.directive('colorButton', function(){
  return {
    scope: {
      descricao: '@',
      input: '='
    },
    restrict: 'E',
    template: '<div style="display:inline-block; margin: 10px" class="form-group"><button class="btn btn-primary btn-sm">Cor</button></div>',
    link: function link(scope, element, attrs) {
      scope.clique = function(cor){
        scope.$emit('changeColor', {color: cor})
      }
    }
  }
})
