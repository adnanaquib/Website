//$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function (a) {
//  $("#actualquote").append(a[0].content);
//  $("#authorquote").append("<p>&mdash; " + a[0].title + "</p>");
//});



//window.onload(doIt());


$.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(data) {
    	//
        //Change data.source to data.something , where something is whichever part of the object you want returned.
        //To see the whole object you can output it to your browser console using:
        console.log(data);
       	//document.getElementById("output").innerHTML = data.source;
        $("#actualquote").append("<p> " + data.quote + "</p>");
        $("#authorquote").append("<p>Source: " + data.author + "</p>");
        },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "M98INuayXFmshBtyY0Pa91SVnhLcp1wAjEljsnW8bgfpOsQ5sB"); // Enter here your Mashape key
    }
});

$(document).ready(function(){
    $("#pass").hide();

    $("#wifidesc").click(function(){
        $("#pass").toggle();
    });
});


$("#refresh").click(function(event){
    $("#actualquote").empty();
    $("#authorquote").empty();




    /***********************AJAX*****************************/

    $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(data) {
    	//
        //Change data.source to data.something , where something is whichever part of the object you want returned.
        //To see the whole object you can output it to your browser console using:
        console.log(data);
       	//document.getElementById("output").innerHTML = data.source;
        $("#actualquote").append("<p> " + data.quote + "</p>");
        $("#authorquote").append("<p>Source: " + data.author + "</p>");
        },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "M98INuayXFmshBtyY0Pa91SVnhLcp1wAjEljsnW8bgfpOsQ5sB"); // Enter here your Mashape key
    }
});


});