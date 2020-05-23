
// Fetch API to get the best seller data for hardcover works of fiction 
fetch('https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=' 
+ "Ci8Vjoo7efgZspORYyp2AbK75GGVXkRr", {    method: 'get',  })  .then(response => { return response.json(); })  .then(json => { console.log(json); });

// makes an HTML object to append to the best-seller-titles list
const listing = '<div id="' + book.rank + '" class="entry">' + '<p>' + '<img src="" class="book-cover" id="cover-' + book.rank + '">' + '</p>' + '<h2><a href="' + book.amazon_product_url + '" target="_blank">' + bookInfo.title + '</a></h2>' + '<h4>By ' + bookInfo.author + '</h4>' + '<h4 class="publisher">' + bookInfo.publisher + '</h4>' + '<p>' + bookInfo.description + '</p>' +     '<div class="stats">' + '<hr>' + '<p>Last Week: ' + lastWeekRank + '</p>' + '<p>Weeks on list: ' + weeksOnList + '</p>' +'</div>' +  '</div>';




(document).ready(function() {
    var queryURL =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
      "george" +
      "&api-key=ibkac4hZC04NsZtR3o3emSwXiYlsbj6e";
    function ajaxCall() {
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        for (var i = 0; i < response.response.docs.length; i++) {
          //all returned articles
          console.log(response.response);
          //returned headline from an article, according to array position
          var headlineResponse = response.response.docs[i].headline.main;
          //author
          var authorResponse = response.response.docs[i].byline.original;
          //document type
          var documentTypeResponse = response.response.docs[i].document_type;
          //link
          var documentLinkResponse = response.response.docs[i].web_url;
          //publish date
          var publishDateResponse = response.response.docs[i].pub_date;
          var hyperLink = documentLinkResponse.link(documentLinkResponse)
          $(".response").append(
            "<p class='headline'>" + headlineResponse + "</p>",
            "<p class='author'>" + authorResponse + "</p>",
            "<p class='documentType'>" + documentTypeResponse + "</p>",
            "<p class='link'>" + hyperLink + "</p>",
            "<p class='publishDate'>" + publishDateResponse + "</p>"
          );
        }
      });
    }
    ajaxCall();
});