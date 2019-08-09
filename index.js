const scrapeFollowers = require('./app/scrape.js');
const selectors = require('./selectors');

const IgScrape = (url, cookie) {
  return new IgScrape.init(url, cookie)
}

IgScrape.prototype = {
  scrapeFollowers,
};

IgScrape.init = (url, cookie) => {
  if(!url) throw 'Error: a URL must be provided';
  if(!cookie || !(cookie instanceOf Object)) throw 'Error: a cookie object must be provided';

  this.url = url;
  this.cookie = cookie;
  this.selectors = selectors;
  this.scrapeFollowers = this.scrapeFollowers.bind(this);
}

IgScrape.init.prototype = IgScrape.prototype;

IgScrape.prototype.scrapeFollowers = ;

module.exports = IgScrape;
