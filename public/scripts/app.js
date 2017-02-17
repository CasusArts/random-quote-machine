$(document).ready(function() {


  // var data = {
  //   "Content-Type": "application/x-www-form-urlencoded",
  //   "X-Mashape-Key": "7xuHGaQFVXmsh9hseX7ljiSdyF7ep1HpEbNjsnwfJNXTmSi2CQ",
  //   "Accept": "application/json"
  // }

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



  $("#getQuote").on("click load", function() {

    $.ajax(settings).done(function(res) {

      var html = "";

        // console.log(res);
        // console.log(loc);

      res = JSON.parse(res);
        // console.log(res);
        // console.log(res.author);
        // console.log(res.quote);

      html += "<cite>" + res.quote + "</cite><br>";
      html += "<strong> - " + res.author + "</strong><br>";
      html += "<i>Category: " + res.category + "</i>"

      $("#quote").html(html);
    });
  });



});

