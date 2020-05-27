// Fetch NY Times API to get the best seller data for hardcover works of fiction 
// example NYTimes data https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=Ci8Vjoo7efgZspORYyp2AbK75GGVXkRr
fetch('https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=' 
+ "Ci8Vjoo7efgZspORYyp2AbK75GGVXkRr", { 
  method: 'get', 
  })  
  .then(response => { return response.json(); })  
  .then(json => 
    { console.log(json); 
  })
  .catch(error => {
    console.log('NYT API Error: Defaulting to nytimes archival data.');
    updateBestSellers(nytimesArchive);
  });