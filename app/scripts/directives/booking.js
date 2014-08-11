app.directive('booking', function($compile, $timeout, $http) {
    return {
        restrict: 'AE',
        templateUrl: 'views/partials/bookings.html',
        link: {
            pre: function(scope, element, attrs) {



            },

            post: function(scope, element, attrs) {
               


                function jsonp_callback(data) {

                    console.log(data)
                }

                scope.doRequest = function(){
                    var url = "http://api.planyo.com/rest/?detail_level=1&page=0&list_published_only=true&admin_id=&res_filter_name=&res_filter_value=&api_key=b4eed72800f397e847b05b6367b66227&method=list_resources";


                        $http.jsonp(url)               
                         .success(function (data) {
                             alert(data.found);

                        }).error(function (data, status, headers, config) {
                            console.log(data);
                             //alert('error');         
                        });
                }

                scope.doRequest();

            }


        }
    }
});
