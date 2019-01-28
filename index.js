const rp = require('request-promise');
const cheerio = require('cheerio');

const options = {
  uri: `https://www.imdb.com/name/nm0000102/`,
  transform: function (body) {
    return cheerio.load(body);
  }
};

rp(options)
  .then(($) => {
    let movies = [];
    $('.filmo-row').each(function(){
      var text = $(this).children('b').text();
      var link = $(this).children('b').children('a').attr('href');
      console.log(text + '-->' + link);
  })
  .catch((err) => {
    console.log(err);
  });


});
