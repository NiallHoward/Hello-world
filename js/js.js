$(document).ready(function(){




});

var serverTime = new Date();

function updateTime() {
    /// Increment serverTime by 1 second and update the html for '#time'
    serverTime = new Date(serverTime.getTime() + 1000);

    var mydate = serverTime.toLocaleString();
    var result = mydate.replace(/,/g, "<br>");
   
    $('#time').html(result);
}

$(function() {
    updateTime();
    setInterval(updateTime, 1000);
});
