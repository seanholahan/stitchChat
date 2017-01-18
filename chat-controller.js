
var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {



    //expand & collapse
    $('#live-chat header').on('click', function () {
        $('.chat').slideToggle(100, 'swing');
    });

    var messages = [];
    $scope.messages = messages;









    $(function () {
        $("input").submit(function () {
            return false;
        });
    });

    function updateScroll(){
        var element = document.getElementById('chat-history');
        var height = element.scrollHeight - 30;
        element.scrollTop = height;

        console.log(new Date);



    }

    $scope.createMessage = function() {
        if ($scope.message) {
            $scope.message.timeHours = (new Date).getHours();
            $scope.message.timeMinutes = (new Date).getMinutes();
            $scope.messages.push(this.message);
            $scope.message = '';
            updateScroll();
            updateScroll();
        }
    };

    });



