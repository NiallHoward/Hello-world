$(document).ready(function(){

	// apikey- bb6e8b3742ec49ea94aafca890734896
	// categories - general, business, entertainment,health, science, sports, technology

	// author: "The editorial board"
	// content: "Let our global subject matter experts broaden your perspective with timely insights and opinions you
	// description: "News, analysis and comment from the Financial Times, the worldʼs leading global business publication"
	// publishedAt: "2020-06-10T21:37:04Z"
	// source:
	// 	id: "financial-times"
	// 	name: "Financial Times"
	// title: "Britain’s ties with China are set for a sea change - Financial Times"
	// url: "https://www.ft.com/content/a979670c-ab31-11ea-a766-7c300513fe47"
	// urlToImage: null

	// 	<div class="newspost"><p><a href="https://www.ft.com/content/a979670c-ab31-11ea-a766-7c300513fe47" target="_blank" rel="noopener"><strong><span id="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</span></strong></a><br>
				// <span id="source">Financial Times</span> &#124; 
				// <span id="author">The editorial board</span> &#124; 
				// <span id="date">10/06/2020</span>
				// <span></span>
				// </p>
			// </div>

	fetch('https://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=bb6e8b3742ec49ea94aafca890734896')
		.then(response => response.json())
		.then(function(data) {

			var business = data.articles;
			var businessLength = business.length;
			
			for (var i = 0; i < businessLength; i++) {
    			
    			if ( i === 5 ){
    				break;
    			}
    			else {

    				var title = business[i].title;
    				var source = business[i].source.name;
    				if ( business[i].author == null ){
    					var author = "Unknown Author";
    					console.log(author);
    				}
    				else {
    					var author = business[i].author;
    					console.log(author);
    				}
    				var url = business[i].url;
 				
 					var publishedAt = business[i].publishedAt;
    				var json = JSON.stringify(publishedAt);
					var dateStr = JSON.parse(json);  
					var date = new Date(dateStr);
					var formatDate = date.toDateString();

    				document.getElementById("businessposts").innerHTML += "<div class=\"newspost\"><p><a href=\"" + url + "\" target=\"_blank\" rel=\"noopener\"><strong><span id=\"title\">" + title + "</span></strong></a><br><span id=\"source\">" + source + "</span> &#124; <span id=\"author\">" + author + "</span> &#124; <span id=\"date\">" + formatDate + "</span></p></div>";
    			}
			}
		});

		fetch('https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=bb6e8b3742ec49ea94aafca890734896')
		.then(response => response.json())
		.then(function(data) {

			var sports = data.articles;
			var sportsLength = sports.length;
			
			for (var i = 0; i < sportsLength; i++) {
    			
    			if ( i === 5 ){
    				break;
    			}
    			else {
    			
    				var title = sports[i].title;
    				var source = sports[i].source.name;
    				if ( sports[i].author == null ){
    					var author = "Unknown Author";
    					console.log(author);
    				}
    				else {
    					var author = sports[i].author;
    					console.log(author);
    				}
    				var url = sports[i].url;
    				
    				var publishedAt = sports[i].publishedAt;
    				var json = JSON.stringify(publishedAt);
					var dateStr = JSON.parse(json);  
					var date = new Date(dateStr);
					var formatDate = date.toDateString();
					
					


    				document.getElementById("sportsposts").innerHTML += "<div class=\"newspost\"><p><a href=\"" + url + "\" target=\"_blank\" rel=\"noopener\"><strong><span id=\"title\">" + title + "</span></strong></a><br><span id=\"source\">" + source + "</span> &#124; <span id=\"author\">" + author + "</span> &#124; <span id=\"date\">" + formatDate + "</span></p></div>";
    			}
			}
		});

		fetch('https://newsapi.org/v2/top-headlines?country=gb&category=technology&apiKey=bb6e8b3742ec49ea94aafca890734896')
		.then(response => response.json())
		.then(function(data) {

			var tech = data.articles;
			var techLength = tech.length;
			
			for (var i = 0; i < techLength; i++) {
    			
    			if ( i === 5 ){
    				break;
    			}
    			else {

    				var title = tech[i].title;
    				var source = tech[i].source.name;
    				if ( tech[i].author == null ){
    					var author = "Unknown Author";
    					console.log(author);
    				}
    				else {
    					var author = tech[i].author;
    					console.log(author);
    				}
    				var url = tech[i].url;
    				var date = tech[i].publishedAt;
  					
  					var publishedAt = tech[i].publishedAt;
    				var json = JSON.stringify(publishedAt);
					var dateStr = JSON.parse(json);  
					var date = new Date(dateStr);
					var formatDate = date.toDateString();

    				document.getElementById("techposts").innerHTML += "<div class=\"newspost\"><p><a href=\"" + url + "\" target=\"_blank\" rel=\"noopener\"><strong><span id=\"title\">" + title + "</span></strong></a><br><span id=\"source\">" + source + "</span> &#124; <span id=\"author\">" + author + "</span> &#124; <span id=\"date\">" + formatDate + "</span></p></div>";
    			}
			}
		});

});
