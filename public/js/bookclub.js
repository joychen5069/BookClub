$(() =>{
  //submit button
  $("#addClub").on("click", (event) => {
    console.log("clicked add")
    event.preventDefault();
    let newClub = {
      clubName: $("#clubName").val().trim(),
      userName: $("#userName").val().trim(),
      description: $("#description").val().trim()};
      console.log(newClub)
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
    var id = $(this).data("id");
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
