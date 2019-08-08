// these are selectors used to scrape instagram

const selectors = {
  followerButton: "header>section>ul>li+li>a",
  followerModalHeader: "h1>div",
  followerModalFollowerButton: "ul > div > li:nth-child(1) > div > div > button",
}

module.exports = selectors;
