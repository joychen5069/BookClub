$(document).ready(function() {

  function nyTimes() {
    // NY TIMES API 
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

          // Returns the value of the rank 
          key === "results"?(Object.values(value).map((tempObject) => {
          let rank = tempObject.rank; //NEW
          console.log("Rank:", rank) //NEW
          })):null

          // Returns the value of the the Amazon URL
          key === "results"?(Object.values(value).map((tempObject) => {
          let amazon = tempObject.amazon_product_url; //NEW
          console.log("Amazon URL:", amazon) //NEW
          })):null

          // Returns the value of the book details
          key === "book_details"?(Object.values(value).map((key3) => {
          let title = key3.title;
          console.log("Title", title)
          let author = key3.author;
          console.log("Author", author)
          let description = key3.description;
          console.log("Description", description)
          let isbn10 = key3.primary_isbn10;
          console.log("ISBN10", isbn10)
        
          })):null // end of Object.Values for book_details

          }) // end of Object.keys (tempObject)
        }) // end of Object.keys(results)
      }) //end of fetch 

      .catch(error => {
      console.log('NYT API Error');
    });
  } // end of NYT API 
  
  

  // GOOGLE API 
  
  function googleAPI() { 
    const GOOGLE_API_URL= 'https://www.googleapis.com/books/v1/volumes?q=isbn:';
    const GOOGLE_API_KEY = '&key=AIzaSyA6uNRyxzKhz1rSMQZYAu4wnaE4CvTMITs';
    const isbnNumber = '0735219117';
    const GOOGLE_ENTIRE_API_URL = `${GOOGLE_API_URL}${isbnNumber}${GOOGLE_API_KEY}`;
    console.log("GOOGLE URL", GOOGLE_ENTIRE_API_URL)
    
    fetch(`${GOOGLE_ENTIRE_API_URL}`, {
        method: 'get',
      })
      .then(response => { return response.json(); })
      .then(json => { 

      const img = json.items[0].volumeInfo.imageLinks.thumbnail;
      console.log("-------IMAGE-------", img)
    })     
      .catch(error => {
        console.log('GOOGLE API Error');
      });
} // end of Google API 

// Calls the NYT API function to run 
nyTimes();

// Calls the Google API function to run
googleAPI();

}); // Final closing tag 


