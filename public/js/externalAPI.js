$(document).ready(function() {
  // console.log("ready!");
    
  var isbns="";

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
        // console.log("OBJECT", tempObject)

        // Returning the value of the Object
        Object.keys(tempObject).map((key) => {
          let value = tempObject[key];
            key === "rank"? console.log("RANK", value):null
            key === "amazon_product_url"? console.log("AMAZON URL", value):null
        })
          
            // Grabbing the Key for the Book Details 
            Object.keys(tempObject).map((object) => {
              let bookDetails = tempObject.book_details[0]
              // console.log("BOOK DETAILS", bookDetails)
            
              // Returning the value of the Book Details 
              Object.keys(bookDetails).map((key) => {
                let value = bookDetails[key];
                  key === "title"? console.log("TITLE", value):null
                  key === "description"? console.log("DESCRIPTION", value):null
                  key === "author"? console.log("AUTHOR", value):null
              })

                // Grabbing the Key for the ISBNS
                Object.keys(tempObject).map((object) => {
                let isbns = tempObject.isbns[0]

                  // Returning the value of isbns
                  Object.keys(isbns).map((key) => {
                    let value = isbns[key];
                    key === "isbn10"? console.log("ISBNS 10", value):null
                  })
                })
            })
        })
    })
      .catch(error => {
      console.log('NYT API Error');
    });
  

  // GOOGLE API 
  
  // function bookCover(isbns) {
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
  // } // End of book cover function 

  // bookCover(isbns);

}); // Final closing tag 


