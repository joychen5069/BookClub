$(document).ready(()=> {

  // Append books to the page 
  const selectedBook = (title, author, description, img) => {
    const selectedBookHTML = 
    '<div class="col m6 s12">' +
      '<p class="textstyle2">' + title +' by ' + author +
      '</p> <p class="textstyle2">' + description + '</p> </div>' +
      '<div class="col m6 s12">' + 
      '<img src="' +
      `${img}` + '">' + 
      '</div> </div>';
      $('#searched-books').empty().append(selectedBookHTML);
  };

  //Global variable
  let newBook=""; // Book Title input

  // Grabs the book title input when the user submits 
  $("#addBook").on("click", (event) => {
      event.preventDefault();

      //reveals the add to club button
      $("#addToClub").show()

      // Grabs the input from the book title text
      newBook = $("#bookName").val().trim();
      // newBook = {
      //   bookName: $("#bookName").val().trim()};

      // Calls the google API function after the button is clicked 
      googleBookAPI();
      
      // Send the POST request.
      $.ajax("/api/books", {
        type: "POST",
        data: newBook
      }).then(
        () => {
          console.log("created new book"); 
          
        });

         
        
    }); // STILL NEED TO ADD DELETE BUTTON

    $(".delete-book").on("click", (event) => {
      var id = $(this).data("id");
      // Send the DELETE request.
      $.ajax("/api/books/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted book", id)
        }
      );
    });
    
      // GOOGLE API 
      const googleBookAPI = () => { 
          const GOOGLE_API_URL= 'https://www.googleapis.com/books/v1/volumes?q=';
          // const GOOGLE_API_KEY = '&key=AIzaSyA6uNRyxzKhz1rSMQZYAu4wnaE4CvTMITs';
          const GOOGLE_ENTIRE_API_URL = `${GOOGLE_API_URL}${newBook}`;
          console.log("GOOGLE URL", GOOGLE_ENTIRE_API_URL)
          console.log("NEW BOOK", newBook)
          fetch(`${GOOGLE_ENTIRE_API_URL}`, {
              method: 'get',
          })
          .then(response => { return response.json(); })
          .then(json => { 
          let img = json.items[0].volumeInfo.imageLinks.thumbnail;
          console.log("img-----------", img)
          let title = json.items[0].volumeInfo.title;
          console.log("title--------", title)
          let author = json.items[0].volumeInfo.authors[0];
          console.log("author--------", author)
          let description = json.items[0].volumeInfo.description
          console.log("description---------",description) 

          //add function that if the add button is clicked the search bar disappears
        $("#addToClub").on("click", (event) => {
          event.preventDefault();
          $("#currentlyReading").show()
          $('#title').append(title)
          $('#author').append(author)
          $('#image').append('<img src="' +
          `${img}` + '">');
          $('#searched-books').empty();
          $('.add').hide();
          $('#addToClub').hide();
        }); 

          // Turns the variables into values so that we can pass them 
          if (author !== null) {
              selectedBook(title, author, description, img)
            } else {
              console.log("Select a Book")
            };

          // Catches any errors
          })    
          .catch(error => {
              console.log('GOOGLE API Error Look Up A Book');
          });

      } // end of Google API 
  }); // Final closing tag