$(document).ready(function() {

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies",
    "method": "POST",
    "headers": {
      "content-type": "application/x-www-form-urlencoded",
      "x-mashape-key": "7xuHGaQFVXmsh9hseX7ljiSdyF7ep1HpEbNjsnwfJNXTmSi2CQ",
      "accept": "application/json",
      "cache-control": "no-cache"
    }
  }

  // Getting Quotes from https://market.mashape.com/andruxnet/random-famous-quotes API
  function fetchQuote(e) {
    $.ajax(settings).done(function(res) {

      var html = "";

      res = JSON.parse(res);

      html += "<cite>" + res.quote + "</cite><br>";
      html += "<strong> - " + res.author + "</strong><br>";
      html += "<i>Category: " + res.category + "</i>"

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

