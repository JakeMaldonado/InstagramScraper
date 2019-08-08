const Nick = require("nickjs");
const nick = new Nick();

process.env.CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

// Example of cookie that should be passed
// const cookie = {
//   name: "cookieName",
//   value: "cookieValue",
//   domain: "domain.com"
// }

async function scrapeFollowers() {
  try {
    this.tab = await setUpBrowser.call(this);

    await openPage.call(this);

    // click on the follower button
    await clickButton.call(this, this.selectors.followerButton);

    // wait until modal pops up
    await this.tab.waitUntilVisible(this.selectors.followerModalHeader);
    await this.tab.waitUntilVisible(this.selectors.followerModalFollowerButton);

    while {
      try {
        await tab.wait(3000)
        await tab.scrollToBottom();
      } catch (err) {
        console.log("reached bottom of followers modal");
      }
    }

    const path = await this.tab.screenshot('screencap.jpg');
    console.log("Screenshot saved at", path)
  } catch(err) {
    console.log("An error occured:", err);
  }
  nick.exit();
}

// set up a new session on and navigate to the page
async function setUpBrowser() {
  const tab =  await nick.newTab();
  await nick.setCookie(this.cookie);
  return tab;
}

async function openPage() {
  const [httpCode, httpStatus] = await this.tab.open(this.url)

  if ((httpCode >= 300) || (httpCode < 200)) {
    console.log("The site responded with", httpCode, httpStatus)
  } else {
    console.log("Successfully opened", this.url, ":", httpCode, httpStatus)
  }
}

async function getFollowers() {
  const results = [];
}

// waits for and clicks a button
async function clickButton(selector) {
    await this.tab.waitUntilVisible(selector);
    return await this.tab.click(selector);
}

module.exports = scrapeFollowers;

