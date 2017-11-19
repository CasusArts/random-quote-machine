  // Getting Quotes from https://market.mashape.com/andruxnet/random-famous-quotes API
function fetchQuote() {
  const init = {
    method: 'GET'
  };
  fetch("https://talaikis.com/api/quotes/random/").then(data => {
    let contentType = data.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return data.json();
    }
    throw new TypeError("NOT JSON OBJECT");
  }).then(json => {

    let html = '';
    const quote = json.quote;
    const author = json.author;

    html += "<p><cite class='quote'><span class='quote-sign'>&#8220;</span>" + quote + "<span class='quote-sign'>&#8221;</span></cite></p>";
    html += "<p class='author'><strong> - " + author + "</strong></p>";

    // TODO: Enhance multiple category selection
    // html += "<i>Category: " + res.category + "</i>"

    $("#quote").html(html);

    $('.twitter-share')
      .attr(
        'href',
        'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='
        + encodeURIComponent('"' + quote + '" ' + author)
      );
  }).catch(error => {
    console.error(error);
  });
}

$(document).ready(function() {

  // Show "Loading..." in <div id="quote>... while content is loading.
  $(window).on('load', function() {
    $("#quote").html("<i>Loading...</i>");
  });

  // Show initial quote on application is beeng loaded
  $(window).load(fetchQuote);

  // Show next random quote
  $("#getQuote").on("click", fetchQuote);
});

