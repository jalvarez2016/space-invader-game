/*global $*/

var score = 1;
var interval= Math.floor(Math.random()*10);

    function prepare(){
        $( ".enemy" ).each(function(index, element) {
            console.log(index);
        var $element = $(element);
        var origin = Math.floor((Math.random() * 460) + 1);
        $element.css("left", origin);
        console.log(origin);
    });
    }
    

$(document).ready(function() {
    prepare();
    powerup();
    setInterval(function(){
    
        console.log("1 second");
        fall();
        powerfall();
    },
    50);
    //just change the number 5000 to adjust the time that should pass before the code is executed again (1000ms is 1 second).
    
    var powerups = [
    "images/power0.jpg",
    "images/power1.jpg",
    "images/power3.jpg",
    "images/power4.gif"
    ];
    
    function powerup(){
        var chance = Math.floor(Math.random()*50);
        if(chance < 11){
            $(".powerup").attr("src","images/power0.jpg");
        } else if (chance < 21){
            $(".powerup").attr("src","images/power1.jpg");
        } else if (chance < 41){
            $(".powerup").attr("src","images/power3.jpg");
        } else if ( chance < 50){
            $(".powerup").attr("src","images/power4.gif");
        }
    }
    
    function powerfall(){
        var offset = $(".powerup").position().top;
        var interval2 = 10;
        var gameWidth = $('#game').width() - $(".powerup").width();
        if ( offset < gameWidth ){
            $(".powerup").css("top", offset + interval2);
        } else {
            $(".powerup").css("top", offset - offset);
        }
        powercollision();
    }
    
    function powercollision(){
    var blueLeft = $("#paddle").offset().left;
    var redLeft = $(".powerup").offset().left;
    var blueRight = blueLeft + $("#paddle").width();
    var redRight = redLeft + $(".powerup").width();
    var blueUp = $("#paddle").offset().top;
    var redDown = $(".powerup").offset().top;
    var blueDown = blueUp + $("#paddle").height();
    var redUp = redDown + $(".powerup").height();
    if(blueDown > redDown && blueUp < redUp && blueRight > redLeft && blueLeft < redRight) {
        console.log("hit");
        powerset();
        powerdetermine2();
    } else if ($(".powerup").position().top > 470) {
        $(".powerup").css("top",$(".powerup").position().top - $(".powerup").position().top);
        powerset();
    } 
    }
    
    function powerdetermine2(){
        var i = 1;
        setInterval(function(){
               i ++;
               console.log(i+"time left");
               if ( i < 12){
               $("#counter").text(score++);
               }
            },
            250);
    }
    

    function powerset(){
        var left = Math.floor((Math.random() * 460) + 1);
        var height = $(".powerup").position().top;
        console.log(left);
        $(".powerup").css("top",$(".powerup").position().top - height);
        $(".powerup").css("left", left);
        powerup();
    }
    
    function enemyset(element){
        var left = Math.floor((Math.random() * 460) + 1);
        var height = $(element).position().top;
        console.log(left);
        $(element).css("top",$(element).position().top - height);
        $(element).css("left", left);
    }

    function fall(){
        $( ".enemy" ).each(function(index, element) {
            var interval2= Math.floor(Math.random()*10);
            var $element = $(element);
            var offset= $element.position().top;
            var gameWidth = $('#game').width() - $element.width();
            if ( offset < gameWidth){
               $element.css("top", offset + interval2);
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
        $("#key").text("Nice you caught a body!!! (i couldn't find an accurate represenation of an actual body)")
        element.remove();
        createnemy();
    } else if (element.position().top > 470) {
        element.css("top",element.position().top - element.position().top);
        enemyset(element);
    } 

}

    function createnemy(){
        var math = Math.floor(score/2);
        
        for(var i= 0; i < math ; i = i +1){
            
            var div = document.createElement('div');

            div.className = 'enemy';
        
            document.getElementById('content').appendChild(div);
        
            enemyset(div);
        
        }
        
    }

$("body").keydown(function(event) {
    var offset= $("#paddle").position().left;
    var interval2= 25;
    var gameWidth = $('#game').width() - $("#paddle").width();
    console.log(offset);
    console.log($("#game").width());
    if (event.keyCode ===37 && offset > 0) {
        
        $("#paddle").css("left", offset -interval2);
        
    } else if (event.keyCode === 39 && offset < gameWidth){
        $("#paddle").css("left", offset +interval2);
    } else{
        return;
    }
});
});

 
 
    function powerdetermine(){
        var img = $(".powerup").src;
        if( img == "images/power0.jpg" ){
            setInterval(function(){
               var i = 1;
               i ++;
               console.log(i+"time left");
               if ( i < 50){
                interval/2;
               }
            },
            250);
        } else if ( img == "images/power1.jpg" ){
            setInterval(function(){
               var i = 1;
               i ++;
               console.log(i+"time left");
               if ( i < 50){
                interval*2;
               }
            },
            250);
        } else if ( img == "images/power3.jpg" ){
            setInterval(function(){
               var i = 1;
               i ++;
               console.log(i+"time left");
               if ( i < 50){
                $("#counter").text(score - 1);
               }
            },
            250);
        } else if ( img == "images/power4.jpg" ){
            setInterval(function(){
               var i = 1;
               i ++;
               console.log(i+"time left");
               if ( i < 50){
                $("#counter").text(score++);
               }
            },
            250);
        }
    }
    