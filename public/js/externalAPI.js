$(document).ready(function() {
  console.log("ready!");
      
      const NYT_API_URL= 'https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=';
  const NYT_API_KEY = 'Ci8Vjoo7efgZspORYyp2AbK75GGVXkRr';
  const NYT_ENTIRE_API_URL = `${NYT_API_URL}${NYT_API_KEY}`;
  
  // NY TIMES API 
  fetch(`${NYT_ENTIRE_API_URL}`, {
        method: 'get',
      })
      .then(response => { return response.json(); })
      .then(json => { 
        console.log(json);
      })
      .catch(error => {
        console.log('NYT API Error: Defaulting to nytimes archival data.');
      });
  
  const GOOGLE_API_URL= 'https://www.googleapis.com/books/v1/volumes?q=isbn:';
  const GOOGLE_API_KEY = '&key=AIzaSyA6uNRyxzKhz1rSMQZYAu4wnaE4CvTMITs';
  // const isbn = response.data.results.isbns[1].isbn10;
  const isbn = '0735219095';
  const GOOGLE_ENTIRE_API_URL = `${GOOGLE_API_URL}${isbn}${GOOGLE_API_KEY}`;
  
  // GOOGLE API 
  fetch(`${GOOGLE_ENTIRE_API_URL}`, {
      method: 'get',
    })
    .then(response => { return response.json(); })
    .then(json => { 
      console.log(json);
    })
    .catch(error => {
      console.log('NYT API Error: Defaulting to nytimes archival data.');
    });
  }); // Final closing tag 