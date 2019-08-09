const scrapeFollowers = require('./scrape.js');
const selectors = require('./selectors');

const IgScrape = function (url, cookie) {
  return new IgScrape.init(url, cookie)
}

IgScrape.prototype = {
  scrapeFollowers,
};

IgScrape.init = function (url, cookie) {
  // validate params
  if(!url) throw 'Error: a URL must be provided';
  if(!cookie || !(cookie instanceof Object)) throw 'Error: a cookie object must be provided';

  this.url = url;
  this.cookie = cookie;
  this.selectors = selectors;
  this.scrapeFollowers = this.scrapeFollowers.bind(this);
}

IgScrape.init.prototype = IgScrape.prototype;

module.exports = IgScrape;
