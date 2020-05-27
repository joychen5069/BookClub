$(document).ready(function() {
  //submit button
  $(".create-form").on("submit", (event) => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("clicked")

    let newClub = {name: $("#ca").val().trim(),
      // devoured: $("[devoured=true]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/clubs", {
      type: "POST",
      data: newClub
    }).then(
      () => {
        console.log("created new club");
        // Reload the page to get the updated list
        location.reload();
      }
  //get information from API 

  });


