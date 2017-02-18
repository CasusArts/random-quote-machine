// Getting Quotes from https://market.mashape.com/andruxnet/random-famous-quotes API
function getQuote(e) {
  $.ajax(settings).done(function(res) {

    var html = "";

    res = JSON.parse(res);

    var quote = res.quote;
    var author = res.author;

    html += "<cite>" + res.quote + "</cite><br>";
    html += "<strong> - " + res.author + "</strong><br>";

    // TODO: Enhance multiple category selection
    // html += "<i>Category: " + res.category + "</i>"

    $("#quote").html(html);

    $('.twitter-share-button').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" ' + author));
  });
}

$(document).ready(function() {

  // Show "Loading..." in <div id="quote>... while content is loading.
  $(window).on('load', function() {
    $("#quote").html("<i>Loading...</i>");
  });

  // Show initial quote on application is beeng loaded
  $(window).load(getQuote);

  // Show next random quote
  $("#getQuote").on("click", getQuote);

});

