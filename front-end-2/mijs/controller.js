

  var app = angular.module("prueba", []) 

     app.controller("pruebaController", function($scope,$http){
       $scope.post=[];
       $scope.editar={};
       $scope.encontrado=null;
       $scope.eliminado=null;
       $scope.buscar={};
       $scope.editado=null;
       $scope.crear={};
       $scope.eliminar={};
       $scope.usuario = 'usuario';
       $http.get("http://localhost:8080/empleado/list")
      .success(function(data){
        $scope.post=data;
      });

  

      $scope.listarEmpleado = function(){
        $http.get("http://localhost:8080/empleado/list")
        .success(function(response){
          
          $scope.list={response}
        })
        .error(function(err,status,headers,config){
          console.log(err.errores);
        })
      
      }
      

      $scope.addEmpleado = function(){
        $http.post("http://localhost:8080/empleado/crear", $scope.crear)
        .success(function(response){
          $scope.crear={}
          location.reload();
        })
        .error(function(err,status,headers,config){
          console.log(err.errores);
        })
        
      
      }
      
      $scope.buscarEmpleado = function(){
        $http.get("http://localhost:8080/empleado/buscar/"+ $scope.buscar.id,$scope.empleadoId)
        .success(function(response){
          $scope.encontrado=response;
          $scope.buscar={};
        })
        .error(function(err,status,headers,config){
          console.log(err.errores);
        })
      
      }


      $scope.editarEmpleado = function(){
        console.log($scope.editar);
        $http.put("http://localhost:8080/empleado/editar/" + $scope.buscar.id,$scope.editar)
        .success(function(response){
          $scope.editado=response;
          $scope.editar={};
          location.reload();
        })
        .error(function(err,status,headers,config){
          console.log(err.errores);
        })
      
      }
      $scope.eliminarEmpleado = function(){
        $http.delete("http://localhost:8080/empleado/eliminar/" + $scope.buscar.id,$scope.eliminar)
        .success(function(response){
          $scope.eliminado=response;
          $scope.eliminar={};
          location.reload();
        })
        .error(function(err,status,headers,config){
          console.log(err.errores);
        })
      
      } 
      
      $scope.setId = function(id){
        console.log($scope.buscar);
        $scope.buscar.id = id;
      }

     
    
  });
 