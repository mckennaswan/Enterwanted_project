import { enterwantedspecs } from "./enterwantedspecs";
const chromedriver = require("chromedriver");
import { By, until, WebDriver, Builder, Capabilities } from "selenium-webdriver";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
const page = new enterwantedspecs(driver);

test("it works", async () => {
  await page.navigate();
  await page.doSearch("McKenna");
  expect(await page.getResults()).toContain("McKenna");
});
afterAll(async () => {
  await driver.quit();
});
