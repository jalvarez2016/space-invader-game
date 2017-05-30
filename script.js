/*global $*/
$(document).ready(function() {
   
    setInterval(function(){
    
        console.log("1 second");
        fall();
    },
    1000);
    //just change the number 5000 to adjust the time that should pass before the code is executed again (1000ms is 1 second).

    function fall(){
        var offset= $(".enemy").position().top;
        var interval= 10;
        var gameWidth = $('#game').width() - $(".enemy").width();
        if ( offset < gameWidth){
            $(".enemy").css("top", offset + interval);
        }
        collission();
    };
    
    function enemyset(){
        $(".enemy").css("top", $(".enemy").offset().top - 455)
    }
    
    function collission(){
        var enemyTopPosition = $(".enemy").position().top + $(".enemy").height();
        var enemyLeftPosition = $(".enemy").position().left + $("#paddle").width();
        var heroTopPosition = $("#paddle").position().top + $("#paddle").height();
        var heroLeftPosition = $("#paddle").position().left + $("#paddle").width();
        if(enemyTopPosition == heroTopPosition && enemyLeftPosition == heroLeftPosition) {
          console.log("hit");
          
        }
    };



});

$("body").keydown(function(event) {
    var offset= $("#paddle").position().left;
    var interval= 10;
    var gameWidth = $('#game').width() - $("#paddle").width();
    console.log(offset);
    console.log($("#game").width())
    if (event.keyCode ===37 && offset > 0) {
        
        $("#paddle").css("left", offset -interval);
        
    } else if (event.keyCode === 39 && offset < gameWidth){
        $("#paddle").css("left", offset +interval);
    } else{
        return;
    }
});



