$(() =>{
    //submit button
    $("#submit").on("click", (event) => {
      event.preventDefault();
      let newBook = {name: $("#ca").val().trim()};
      // Send the POST request.
      $.ajax("/api/books", {
        type: "POST",
        data: newBook
      }).then(
        () => {
          console.log("created new book");
          // Reload the page to get the updated list
          location.reload();
        });
    });
    $(".delete-book").on("click", function(event) {
      var id = $(this).data("id");
      // Send the DELETE request.
      $.ajax("/api/books/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted book", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });


