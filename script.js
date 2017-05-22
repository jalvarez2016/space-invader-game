/*global $*/
$(document).ready(function() {
    setInterval(function(){
        console.log("1 second");
        fall();
    },
    1000);
    //just change the number 5000 to adjust the time that should pass before the code is executed again (1000ms is 1 second).

    function fall(){
        $(".enemy").css("top", $(".enemy").offset().top + 10);
    };
    
    function collission(){
        var enemyHeight = $(".enemy").offset().top + $("#paddle").height();
        var enemyWidth = $(".enemy").offset().left + $("#paddle").width();
        var heroHieght = $("#paddle").offset().top + $("#paddle").height();
        var heroWidth = $("#paddle").offset().left + $("#paddle").width();
        if(enemyHeight > heroHieght && enemyWidth ) {
            $(".enemy").offset().top - 460;
        }
    };



});

$("body").keydown(function(event) {
    console.log(event)
    if (event.keyCode ===37) {
        $("#paddle").css("left", $("#paddle").offset().left- 1);
    } else if (event.keyCode ===39){
        $("#paddle").css("left", $("#paddle").offset().left + 1);
    } else{
        return;
    }
});



