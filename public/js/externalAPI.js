$(document).ready(function() {

  //  // NY TIMES API 
  function nyTimes() {
    const NYT_API_URL= 'https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=';
    const NYT_API_KEY = 'Ci8Vjoo7efgZspORYyp2AbK75GGVXkRr';
    const NYT_ENTIRE_API_URL = `${NYT_API_URL}${NYT_API_KEY}`;

    fetch(`${NYT_ENTIRE_API_URL}`, {
      method: 'get',
      })
      .then(response => { return response.json(); })
      .then(json => {
      
      //Hashmap data to get the results 
      let results = json["results"];

      // Grabbing the Key for the Object  
      Object.keys(results).map((object) => {
        let tempObject = results[object]
       
        // Returning the value of the declared object
        Object.keys(tempObject).map((key) => {
        let value = tempObject[key];

        let title;
        let author;
        let description;

          // Returns the value of the rank 
          key === "rank"?
          // let rank = tempObject.rank; 
          console.log("Rank:", tempObject.rank):null
       
          // Returns the value of the the Amazon URL
          key === "amazon_product_url"?
          // let amazon = tempObject.amazon_product_url; 
          console.log("Amazon URL:", tempObject.amazon_product_url):null

          // Returns the value of the book details
          key === "book_details"?(Object.values(value).map((key3) => {
          title = key3.title;
          console.log("Title", title)
          author = key3.author;
          console.log("Author", author)
          description = key3.description;
          console.log("Description", description)
          
          // checking to see if there is an isbns - if so, it will add to the Google API
          key3["primary_isbn10"]? (googleAPI(key3.primary_isbn10)):null
          console.log("ISBN10 in NYT API", key3.primary_isbn10)
          })):null // end of Object.Values for book_details

              // just put this here so you can easily see the variables to include 
            var listing =
            "<div class='col s12 m6'>"
            // + rank  need to get this to work 
            // + title
            // + author
            // + description
            // // + img
            // + amazon need to get this to work
            + "</div>";

            $('#best-seller-titles').append(listing);


          }) // end of Object.keys (tempObject)
        }) // end of Object.keys(results)
      }) //end of fetch 
      .catch(error => {
      console.log('NYT API Error');
    });
  } // end of NYT API 

  // GOOGLE API 
  function googleAPI(isbn10) { 
    const GOOGLE_API_URL= 'https://www.googleapis.com/books/v1/volumes?q=isbn:';
    const GOOGLE_API_KEY = '&key=AIzaSyA6uNRyxzKhz1rSMQZYAu4wnaE4CvTMITs';
    console.log("ISBN10_______________", isbn10)

    const GOOGLE_ENTIRE_API_URL = `${GOOGLE_API_URL}${isbn10}${GOOGLE_API_KEY}`;
    console.log("GOOGLE URL", GOOGLE_ENTIRE_API_URL)
    
    fetch(`${GOOGLE_ENTIRE_API_URL}`, {
        method: 'get',
      })
      .then(response => { return response.json(); })
      .then(json => { 

      let img = json.items[0].volumeInfo.imageLinks.thumbnail;
      console.log("-------IMAGE-------", img)
    })     
      .catch(error => {
        console.log('GOOGLE API Error');
      });
} // end of Google API 

// // Calls the NYT API function to run 
nyTimes();

// Calls the Google API function to run

}); // Final closing tag 