//Array of strings stored in var actors
var actors = ["Danny McBride", "Craig Robinson", "Seth Rogen", "James Franco", "Jonah Hill", "Leonardo Dicaprio", "Tom Hardy"];

//
function searchAPI() {
	var actor = $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + actor + "&api_key=CmHnUnSRjJDF1om1KPA0Ussp6eVQy9xn&limit=10"

	$.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
    $("#actor-view").empty();

    for (var i = 0; i < response.data.length; i++) {
		var actorDiv = ('<div class="actor">');
		
    }

    });	
}


//create buttons in our HTML
function displayButtons() {
	$("#button-view").empty();
	for (var i = 0; i<actors.length; i++) {
		var button = $("<button>");
		button.addClass("btn btn-primary");
		button.attr("data-name", actors[i]);
		button.text(actors[i]);
		$('#button-view').append(button);
	}
}
 
$("#add-actor").on("click", function (event) {
	event.preventDefault();
	var actor = $("#actor-input").val().trim();
	$("#actor-input").val("");
	actors.push(actor);
	displayButtons();
});
$(document).on("click", ".actors", searchAPI);
displayButtons();
