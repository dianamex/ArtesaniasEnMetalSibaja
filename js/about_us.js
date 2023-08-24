//JQuery
$(document).ready(function () {

    $("#card-1").hover(
        function () {
            $("#card-1").css('background-color', '#FFB366');
            $("#card-2").css('opacity', '0.3');
            $("#card-3").css('opacity', '0.3');
           
        },
        function () {
            $("#card-1").css('background-color', 'white');
            $("#card-2").css('opacity', '1');
            $("#card-3").css('opacity', '1');
            
        }
    );
    $("#card-2").hover(
        function () {
            $("#card-2").css('background-color', '#FFB366');
            $("#card-1").css('opacity', '0.3');
            $("#card-3").css('opacity', '0.3');
            
        },
        function () {
            $("#card-2").css('background-color', 'white');
            $("#card-1").css('opacity', '1');
            $("#card-3").css('opacity', '1');
            
        }
    );
    $("#card-3").hover(
        function () {
            $("#card-3").css('background-color', '#FFB366');
            $("#card-2").css('opacity', '0.3');
            $("#card-1").css('opacity', '0.3');
            
        },
        function () {
            $("#card-3").css('background-color', 'white');
            $("#card-2").css('opacity', '1');
            $("#card-1").css('opacity', '1');
            
        }
    );

});