$(() =>{
  //submit button
  $("#submit").on("click", (event) => {
    event.preventDefault();
    
    let newClub = {name: $("#ca").val().trim()};
     
    // Send the POST request.
    $.ajax("/api/clubs", {
      type: "POST",
      data: newClub
    }).then(
      () => {
        console.log("created new club");
        // Reload the page to get the updated list
        location.reload();
      });
  });

  $(".delete-club").on("click", (event) => {
    console.log("delete")
    let id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/clubs/" + id, {
      type: "DELETE"
    }).then(
      () => {
        console.log("deleted club", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


});

})

  
  


