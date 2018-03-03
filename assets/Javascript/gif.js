//Array of strings stored in var actors
var actors = ["Danny McBride", "Craig Robinson", "Seth Rogen", "James Franco", "Jonah Hill", "Leonardo Dicaprio", "Tom Hardy", "Heath Ledger", "Matthew McConaughey", "Woody Harrelson", "John Robinson", "Mike Myers", "Walton Goggins"];

//
function searchAPI() {
	// console.log(here)
	var actor = $(this).attr('data-name');
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + actor + "&api_key=CmHnUnSRjJDF1om1KPA0Ussp6eVQy9xn&limit=10"

	$.ajax({
    	url: queryURL,
    	method: "GET"
    }).then(function(response) {

    $("#actor-view").empty();

    for (var i = 0; i < response.data.length; i++) {
    	console.log(response.data[i]);
    	var div = $("<div class='image-container col-md-6'>");
    	var rating = $("<div class='rating'>").text('Rating: ' + response.data[i].rating);
    	var image = $("<img>");
    	image.attr("src", response.data[i].images.original_still.url);
    	image.attr("data-state", "still");
    	image.attr("data-animate", response.data[i].images.original.url);
    	image.attr("data-still", response.data[i].images.original_still.url);
    	image.addClass("gif");
    	div.append(image);
    	div.append(rating);
    	$('#actor-view').append(div);
    }

    });	
}


//create buttons in our HTML
function displayButtons() {
	$("#button-view").empty();
	for (var i = 0; i<actors.length; i++) {
		var button = $("<button>");
		button.addClass("btn btn-danger");
		button.addClass("actors");
		button.attr("data-name", actors[i]);
		button.text(actors[i]);
		$('#button-view').append(button);
	}
}

    function still() {
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $(this).attr("data-state");
      console.log(state)
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    };

 
$("#add-actor").on("click", function (event) {
	event.preventDefault();
	var actor = $("#actor-input").val().trim();
	$("#actor-input").val("");
	actors.push(actor);
	displayButtons();
});
$(document).on("click", ".actors", searchAPI);
displayButtons();

$(document).on("click", ".gif", still);
