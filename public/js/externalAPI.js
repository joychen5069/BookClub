$(document).ready(function() {

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
          key === "rank"? console.log("RANK", value):null
          key === "amazon_product_url"? console.log("AMAZON URL", value):null
          
          // Returns the value of the book details
          key === "book_details"?(Object.values(value).map((key3) => {
            
            // Filters for the value of the title
            Object.keys(key3).filter(title => {
            title === "title"?(console.log(key3[title])):null
            })

            // Filters for the value of the author
            Object.keys(key3).filter(author => {
              author === "author"?(console.log(key3[author])):null
            })

            // Filters for the value of the description
            Object.keys(key3).filter(description => {
            description === "description"?(console.log(key3[description])):null
            })

          })):null // book details key
      }) // end of Object.keys
    }) // end of Object.keys(results)
  }) //end of fetch 

    .catch(error => {
    console.log('NYT API Error');
  });
  
  // GOOGLE API 
  
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


      //lauren - get date to add to html

      n =  new Date();
      y = n.getFullYear();

      var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      m = months[n.getMonth()];
      document.getElementById("date").innerHTML = m + " " + y;

      //lauren materialize dropdown trigger
      $('.dropdown-trigger').dropdown();


}); // Final closing tag 


