/*global $*/
$(document).ready(function () {
    window.setInterval(function(){
        var width = Math.random();
        var yeniwidth = width * 500;
        margin = Math.round(yeniwidth);
        $("#circle").css("margin-top", margin + "px");
        var height = Math.random();
        var yeniheight = height * 1000;
        margin2 = Math.round(yeniheight);
        $("#circle").css("margin-left", margin2 + "px");
    }, 5000);
});
//just change the number 5000 to adjust the time that should pass before the code is executed again (1000ms is 1 second).

