  var links = [
               "https://nathan.tokyo/",
               "https://neal.fun/",
               "https://michael.wang/",
               "https://liebermannkiepe.de/en",
               "https://sspeier.com/",
               "https://adamho.com/",
               "https://carolpychan.com/index.html",
               "https://coryetzkorn.com/",
               "https://sharypin.cool/",
               "https://zefs.website/",
               "https://kyledecker.me",
               "https://taliacotton.com/work",
               "https://twnsnd.co",
               "http://erichu.info/",
               "http://elirousso.com/",
               "https://timroussilhe.com/",
               "https://stanleychen.info/",
               "https://studiofrank.co",
    "https://christianmezofi.com/",
    "https://narrowdesign.com/",
    "https://justified.studio/",
    "https://kitkatpecson.com/",
    "https://jeongsteph.design/",
    "https://www.gabrielcontassot.com/",
    "http://davidpolonia.com/",
    "https://katiforner.com/",
    "https://niklasrosen.se/",
    "http://matthieuteyssandier.com/"
    "https://www.angel-estrada.com/",
    "https://angelamilosevic.com/",
    "https://www.calebbarclay.com/",
    "http://nathanyoung.org/",
    "https://victor.work/",
               "https://karalevich.com"]

            var openSite = function() {
               // get a random number between 0 and the number of links
               var randIdx = Math.random() * links.length;
               // round it, so it can be used as array index
               randIdx = parseInt(randIdx, 10);
               // construct the link to be opened
               var link = links[randIdx];

      var win = window.open(link, '_blank');
      win.focus();

     };
