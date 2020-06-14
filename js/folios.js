  var links = [
    "https://ezekielaquino.com/",
    "https://phuongnguyen.co/",
               "https://nathan.tokyo/",
               "https://neal.fun/",
               "https://michael.wang/",
    "https://www.lenoraporter.com/",
               "https://liebermannkiepe.de/en",
               "https://sspeier.com/",
    "https://day-and.co/",
               "http://www.timothyachumba.com/",
               "https://adamho.com/",
               "https://carolpychan.com/index.html",
               "https://coryetzkorn.com/",
               "https://sharypin.cool/",
    "https://www.almond.studio/",
               "https://zefs.website/",
               "https://kyledecker.me",
    "https://www.futurefabric.co/",
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
    "https://www.mrkylemac.com/",
    "https://kitkatpecson.com/",
    "https://jeongsteph.design/",
    "https://www.gabrielcontassot.com/",
    "http://davidpolonia.com/",
    "https://katiforner.com/",
    "https://niklasrosen.se/",
    "http://matthieuteyssandier.com/",
    "https://www.angel-estrada.com/",
    "https://angelamilosevic.com/",
    "https://www.calebbarclay.com/",
    "http://nathanyoung.org/",
    "https://victor.work/",
    "https://www.lizvwells.com/",
    "https://biron.io/",
    "http://actualidea.com/",
    "http://www.colinkeany.com/",
    "https://soulwire.co.uk/",
               "https://karalevich.com",
    "https://taragraphy.com/",
"http://rumz.org/",
"https://jeanlou.co/",
"https://jonasf.work/",
"http://dmcg.co/",
"https://nickytes.la/",
"https://heckhouse.com/",
"https://maryloufaure.com/",
"https://florianmarkl.com/en/",
"http://florentbiffi.com/",
"https://undersight.co/",
"https://samucoronado.com/",
"https://thomaswilliams.co/",
"https://simon.abranowicz.com/",
"https://maximerimbert.fyi/",
"https://www.janieceallison.design/"
  ]

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
