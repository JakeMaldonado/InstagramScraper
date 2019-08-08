const scrapeFollowers = require('./app/scrape.js');
const selectors = require('./selectors');

function IgScrape(url, cookie) {
  this.url = url;
  this.cookie = cookie;
  this.selectors = selectors;
  this.scrapeFollowers = this.scrapeFollowers.bind(this);
}

IgScrape.prototype.scrapeFollowers = scrapeFollowers;

module.exports = IgScrape;
