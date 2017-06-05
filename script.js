/*global $*/

var score = 1;

    function prepare(){
        $( ".enemy" ).each(function(index, element) {
            console.log(index)
        var $element = $(element)
        var origin = Math.floor((Math.random() * 460) + 1);
        $element.css("left", origin);
        console.log(origin);
    });
    }
    

$(document).ready(function() {
    prepare()
    setInterval(function(){
    
        console.log("1 second");
        fall();
        // fallb();
        // fallc();
    },
    250);
    //just change the number 5000 to adjust the time that should pass before the code is executed again (1000ms is 1 second).
    

    function enemyset(element){
        var left = Math.floor((Math.random() * 460) + 1);
        console.log(left);
        $(element).css("top",$(element).position().top - 455);
        $(element).css("left", left);
    }

    function fall(){
        $( ".enemy" ).each(function(index, element) {
            var $element = $(element)
            var offset= $element.position().top;
            var interval= 10;
            var gameWidth = $('#game').width() - $element.width();
            if ( offset < gameWidth){
               $element.css("top", offset + interval);
            }
            collission($element);
        });
    }
    
        
    
    function collission(element) {
    var blueLeft = $("#paddle").offset().left;
    var redLeft = element.offset().left;
    var blueRight = blueLeft + $("#paddle").width();
    var redRight = redLeft + element.width();
    var blueUp = $("#paddle").offset().top;
    var redDown = element.offset().top;
    var blueDown = blueUp + $("#paddle").height();
    var redUp = redDown + element.height();
    if(blueDown > redDown && blueUp < redUp && blueRight > redLeft && blueLeft < redRight) {
        console.log("hit");
        $("#counter").text(score++);
        enemyset(element);
    } else if (element.position().top > 470) {
        element.css("top",element.position().top - element.position().top);
    } 

}

$("body").keydown(function(event) {
    var offset= $("#paddle").position().left;
    var interval= 25;
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
});

    function enemyseta(){
        var left = Math.floor((Math.random() * 460) + 1);
        console.log(left);
        $("#justkillit").css("top",$("#justkillit").position().top - 455);
        $("#justkillit").css("left", left);
    }
    
    function enemysetb(){
        var left = Math.floor((Math.random() * 460) + 1);
        console.log(left);
        $("#pleazkillit").css("top",$("#pleazkillit").position().top - 455);
        $("#pleazkillit").css("left", left);
    }
    
    function enemysetc(){
        var left = Math.floor((Math.random() * 460) + 1);
        console.log(left);
        $("#mustkill").css("top",$("#mustkill").position().top - 455);
        $("#mustkill").css("left", left);
    }
    
    

    //fall number1
    function falla(){
            var offset= $( "#justkillit" ).position().top;
            var interval= 10;
            var gameWidth = $('#game').width() - $( "#justkillit" ).width();
            if ( offset < gameWidth){
               $( "#justkillit" ).css("top", offset + interval);
            }
            collissiona();
    }
    
    //fall number2
    function fallb(){
            var offset= $( "#pleazkillit" ).position().top;
            var interval= 10;
            var gameWidth = $('#game').width() - $( "#pleazkillit" ).width();
            if ( offset < gameWidth){
               $( "#pleazkillit" ).css("top", offset + interval);
            }
            collissionb();
            
    }
    
    function fallc(){
            var offset= $( "#mustkill" ).position().top;
            var interval= 10;
            var gameWidth = $('#game').width() - $( "#mustkill" ).width();
            if ( offset < gameWidth){
               $( "#mustkill" ).css("top", offset + interval);
            }
            collissionc();
            
    }
    
    
    
    //collision number1
    function collissiona() {
    var blueLeft = $("#paddle").offset().left;
    var redLeft = $( "#justkillit" ).offset().left;
    var blueRight = blueLeft + $("#paddle").width();
    var redRight = redLeft + $( "#justkillit" ).width();
    var blueUp = $("#paddle").offset().top;
    var redDown = $( "#justkillit" ).offset().top;
    var blueDown = blueUp + $("#paddle").height();
    var redUp = redDown + $( "#justkillit" ).height();
    if(blueDown > redDown && blueUp < redUp && blueRight > redLeft && blueLeft < redRight) {
        console.log("hit");
        $("#counter").text(score++);
        enemyseta();
    } else if ($( "#justkillit" ).position().top > 470) {
        $( "#justkillit" ).css("top",$( "#justkillit" ).position().top - $( "#justkillit" ).position().top);
    } 

}
    
    //collision number2
    function collissionb() {
    var blueLeft = $("#paddle").offset().left;
    var redLeft = $( "#pleazkillit" ).offset().left;
    var blueRight = blueLeft + $("#paddle").width();
    var redRight = redLeft + $( "#pleazkillit" ).width();
    var blueUp = $("#paddle").offset().top;
    var redDown = $( "#pleazkillit" ).offset().top;
    var blueDown = blueUp + $("#paddle").height();
    var redUp = redDown + $( "#pleazkillit" ).height();
    if(blueDown > redDown && blueUp < redUp && blueRight > redLeft && blueLeft < redRight) {
        console.log("hit");
        $("#counter").text(score++);
        enemysetb();
    } else if ($( "#pleazkillit" ).position().top > 470) {
        $( "#pleazkillit" ).css("top",$( "#pleazkillit" ).position().top - $( "#pleazkillit" ).position().top);
    } 

}

  //collision number0
    function collissionc() {
    var blueLeft = $("#paddle").offset().left;
    var redLeft = $( "#mustkill" ).offset().left;
    var blueRight = blueLeft + $("#paddle").width();
    var redRight = redLeft + $( "#mustkill" ).width();
    var blueUp = $("#paddle").offset().top;
    var redDown = $( "#mustkill" ).offset().top;
    var blueDown = blueUp + $("#paddle").height();
    var redUp = redDown + $( "#mustkill" ).height();
    if(blueDown > redDown && blueUp < redUp && blueRight > redLeft && blueLeft < redRight) {
        console.log("hit");
        $("#counter").text(score++);
        enemysetc();
    } else if ($( "#mustkill" ).position().top > 470) {
        $( "#mustkill" ).css("top",$( "#mustkill" ).position().top - $( "#mustkill" ).position().top);
    } 

}

   