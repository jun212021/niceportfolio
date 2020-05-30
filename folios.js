  var links = [
               "nathan.tokyo/",
               "benlongdendesign.co.uk/",
               "neal.fun/",
               "michael.wang/",
               "liebermannkiepe.de/en",
               "sspeier.com/",
               "adamho.com/",
               "carolpychan.com/index.html",
               "coryetzkorn.com/",
               "sharypin.cool/",
               "zefs.website/",
               "kyledecker.me",
               "brianbaker.com",
               "taliacotton.com/work",
               "twnsnd.co",
               "karalevich.com"]

            var openSite = function() {
               // get a random number between 0 and the number of links
               var randIdx = Math.random() * links.length;
               // round it, so it can be used as array index
               randIdx = parseInt(randIdx, 10);
               // construct the link to be opened
               var link = 'http://' + links[randIdx];

      var win = window.open(link, '_blank');
      win.focus();

     };