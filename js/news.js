$(document).ready(function(){

    fetch("https://newscatcher.p.rapidapi.com/v1/latest_headlines?topic=business&lang=en&country=GB", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "newscatcher.p.rapidapi.com",
            "x-rapidapi-key": "e90edb62fbmsh0d0dfd4ff78532ep1cdc91jsn8f9acf1314c5"
        }
    })
	.then(response => response.json())
	.then(function(data) {

		var business = data.articles;
		var businessLength = business.length;
        // console.log(business);
			
		for (var i = 0; i < businessLength; i++) {
    			
    		if ( i === 5 ){
    			break;
    		}
    		else {

    			var title = business[i].title;
    			var source = business[i].clean_url;
    			var url = business[i].link;
 				
 				var publishedAt = business[i].published_date;
    			var json = JSON.stringify(publishedAt);
				var dateStr = JSON.parse(json);  
				var date = new Date(dateStr);
				var formatDate = date.toDateString();

    			document.getElementById("businessposts").innerHTML += "<div class=\"newspost\"><p><a href=\"" + url + "\" target=\"_blank\" rel=\"noopener\"><strong><span id=\"title\">" + title + "</span></strong></a><br><span id=\"source\">" + source + "</span> &#124; <span id=\"date\">" + formatDate + "</span></p></div>";
    		}
		}
	})
     .catch(function(error) {
        // console.log(JSON.stringify(error));
        document.getElementById("businessposts").innerHTML = "<div class=\"nonews\"><p>This wont work on live! :(</p></div>";
    });   




    fetch("https://newscatcher.p.rapidapi.com/v1/latest_headlines?topic=sport&lang=en&country=GB", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "newscatcher.p.rapidapi.com",
            "x-rapidapi-key": "e90edb62fbmsh0d0dfd4ff78532ep1cdc91jsn8f9acf1314c5"
        }
    })
    .then(response => response.json())
    .then(function(data) {

        var sports = data.articles;
        var sportsLength = sports.length;
        // console.log(sports);
        
        for (var i = 0; i < sportsLength; i++) {
                
            if ( i === 5 ){
                 break;
            }
            else {
                
                var title = sports[i].title;
                var source = sports[i].clean_url;
                var url = sports[i].link;
                    
                var publishedAt = sports[i].published_date;
                var json = JSON.stringify(publishedAt);
                var dateStr = JSON.parse(json);  
                var date = new Date(dateStr);
                var formatDate = date.toDateString();

                document.getElementById("sportsposts").innerHTML += "<div class=\"newspost\"><p><a href=\"" + url + "\" target=\"_blank\" rel=\"noopener\"><strong><span id=\"title\">" + title + "</span></strong></a><br><span id=\"source\">" + source + "</span> &#124; <span id=\"date\">" + formatDate + "</span></p></div>";
            }
        }
    })
	.catch(function(error) {
        console.log(JSON.stringify(error));
        document.getElementById("sportsposts").innerHTML = "<div class=\"nonews\"><p>This wont work on live! :(</p></div>";
    });



    fetch("https://newscatcher.p.rapidapi.com/v1/latest_headlines?topic=tech&lang=en&country=GB", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "newscatcher.p.rapidapi.com",
            "x-rapidapi-key": "e90edb62fbmsh0d0dfd4ff78532ep1cdc91jsn8f9acf1314c5"
        }
    })
	.then(response => response.json())
	.then(function(data) {

		var tech = data.articles;
		var techLength = tech.length;
         // console.log(tech);
			
		for (var i = 0; i < techLength; i++) {
    			
    		if ( i === 5 ){
    			break;
    		}
    		else {

    			var title = tech[i].title;
    			var source = tech[i].clean_url;
    			var url = tech[i].link;
    			var date = tech[i].publishedAt;
  					
  				var publishedAt = tech[i].published_date;
    			var json = JSON.stringify(publishedAt);
				var dateStr = JSON.parse(json);  
				var date = new Date(dateStr);
				var formatDate = date.toDateString();

    			document.getElementById("techposts").innerHTML += "<div class=\"newspost\"><p><a href=\"" + url + "\" target=\"_blank\" rel=\"noopener\"><strong><span id=\"title\">" + title + "</span></strong></a><br><span id=\"source\">" + source + "</span> &#124; <span id=\"date\">" + formatDate + "</span></p></div>";
    		}
		}
	})
    .catch(function(error) {
        console.log(JSON.stringify(error));
        document.getElementById("techposts").innerHTML = "<div class=\"nonews\"><p>This wont work on live! :(</p></div>";
    });

});
