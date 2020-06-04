$(document).ready(function() {
  let placeholderimg = "https://previews.123rf.com/images/drakonova/drakonova2002/drakonova200200023/140458305-cartoon-business-cat-holding-empty-white-board-in-hands-successful-businessman-placeholder-vector-il.jpg";
  const topBook = (title, author, description, rank) => {
    const topBookHTML = 
    '<div class="row dualHeader"  id="' + rank + '">' +
    '<div class="col m6 s12 topPicksLeft">' +
     '<h1>TOP BOOK OF THE MONTH</h1> <br>' +
      '<p class="textstyle2">' + title + ' by ' + author +
      '</p> <p class="textstyle2">' + description + '</p> </div>' +
      '<div class="col m6 s12">' +
      '<img src="https://images-na.ssl-images-amazon.com/images/I/51ZyEVnRWRL._SX329_BO1,204,203,200_.jpg" class="bigbookCover" id="cover-' + rank + '">' +
      '</div> </div>';
      $('#bigheader').append(topBookHTML);
  };
  const otherbooks = (title, author, description, rank) => {
    const otherbooksHTML = 
    ' <div class="row"  id="' + rank + '"> <div class="col s4"> <p class="rankStyle"> ' + rank + '. </p> </div>' +
    '<div class="col s8">' +
    '<ul class="collection bookCard"><li class="collection-item avatar"><img src="https://previews.123rf.com/images/drakonova/drakonova2002/drakonova200200023/140458305-cartoon-business-cat-holding-empty-white-board-in-hands-successful-businessman-placeholder-vector-il.jpg" class="bookCover topBookCover" id="cover-' + rank + '"><span class="title">' 
    + title + '</span><p> <span class="author">' + author + '</span> <br>' + description
    + '</p> </li> </ul> </div> </div>';
    console.log(otherbooksHTML);
      $('#best-seller-titles').append(otherbooksHTML);
  };
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
          rank = tempObject.rank;
          console.log("rank" + rank)
          if (object == 0) {
            topBook(title, author, description, rank)
          } else {
            otherbooks(title, author, description, rank)
          };
          // checking to see if there is an isbns - if so, it will add to the Google API
          key3["primary_isbn10"]? (googleAPI(rank, key3.primary_isbn10)):null
          console.log("ISBN10 in NYT API", key3.primary_isbn10)
          })):null // end of Object.Values for book_details
              // just put this here so you can easily see the variables to include 
          }) // end of Object.keys (tempObject)
        }) // end of Object.keys(results)
      }) //end of fetch 
      .catch(error => {
      console.log('NYT API Error');
    });
  } // end of NYT API 
  // GOOGLE API 
  function googleAPI(rank, isbn10) { 
    const GOOGLE_API_URL= 'https://www.googleapis.com/books/v1/volumes?q=isbn:';
    // const GOOGLE_API_KEY = '&key=AIzaSyA6uNRyxzKhz1rSMQZYAu4wnaE4CvTMITs';
    console.log("ISBN10_______________", isbn10)
    const GOOGLE_ENTIRE_API_URL = `${GOOGLE_API_URL}${isbn10}`;
    console.log("GOOGLE URL", GOOGLE_ENTIRE_API_URL)
    fetch(`${GOOGLE_ENTIRE_API_URL}`, {
        method: 'get',
      })
      .then(response => { return response.json(); })
      .then(json => { 
      let img = json.items[0].volumeInfo.imageLinks.thumbnail;
      $('#cover-' + rank).attr('src', img);
      console.log("-------IMAGE-------", img)
    })     
      .catch(error => {
        console.log('GOOGLE API Error' + error);
      });
} // end of Google API 
// // Calls the NYT API function to run 
nyTimes();
      // lauren - get date to add to html
      n =  new Date();
      y = n.getFullYear();
      var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      m = months[n.getMonth()];
      // document.getElementById("date").innerHTML = m + " " + y;
}); // Final closing tag