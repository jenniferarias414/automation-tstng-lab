// const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

// let driver;

// beforeEach(async () => {
//     driver = new Builder().forBrowser(Browser.CHROME).build();
//   });
  
//   afterEach(async () => {
//     await driver.quit();
//   });

//  describe('movie app testing', () => {
//     test("can add a movie to list", async () => {
//         await driver.get('http://localhost:3000/');
//         await driver.findElement(By.name('movieTitle')).sendKeys('Point Break', Key.RETURN);
//         const pointBreak = await driver.findElement(By.xpath('//label[contains(text(), "Point Break")]'));
    
//         expect(await pointBreak.isDisplayed()).toBe.true;
//     });
//  })

const { By, Builder, Browser, until, Key } = require("selenium-webdriver");

let driver;

// Build a new driver for each test
beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

// Quit a driver after each test
afterEach(async () => {
  await driver.quit();
});

describe("Test the movie app", () => {
  test("can add movie to list", async () => {
    // Navigate to localhost
    await driver.get("http://localhost:3000/");

    // Locate the search bar and send the search term to it
    await driver
      .findElement(By.name("movieTitle"))
      .sendKeys("Rush Hour", Key.RETURN);

    // check if rush hour is present
    const rushHour = await driver.findElement(
      By.xpath('//label[contains(text(), "Rush Hour")]')
    );

    // check if the element is displayed
    expect(await rushHour.isDisplayed()).toBe.true;
  });
 
});