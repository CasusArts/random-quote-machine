$(document).ready(function() {

  // Getting Quotes from https://market.mashape.com/andruxnet/random-famous-quotes API
  function fetchQuote(e) {
    $.ajax(settings).done(function(res) {

      var html = "";

      res = JSON.parse(res);

      html += "<cite>" + res.quote + "</cite><br>";
      html += "<strong> - " + res.author + "</strong><br>";

      // TODO: Enhance multiple category selection
      // html += "<i>Category: " + res.category + "</i>"

      $("#quote").html(html);
    });
  }

  // Show "Loading..." in <div id="quote>... while content is loading.
  $(window).on('load', function() {
    $("#quote").html("<i>Loading...</i>");
  });

  // Show initial quote on application is beeng loaded
  $(window).load(fetchQuote);

  // Show next random quote
  $("#getQuote").on("click", fetchQuote);
});
