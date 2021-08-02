import { By, until, WebDriver } from "selenium-webdriver";

export class enterwantedspecs {
  driver: WebDriver;

  url: string = "https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html";
  wantedName = By.id("name");
  offenseInput = By.id("offense")
  results = By.id("results")

  constructor(driver: WebDriver) {
    this.driver = driver;
  }
  async navigate() {
    await this.driver.get(this.url);
    await this.driver.wait(until.elementLocated(this.wantedName));
    await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(this.wantedName))
    );
  }
  
  async sendKeys(elementBy: By, keys) {
    await this.driver.wait(until.elementLocated(elementBy));
    return this.driver.findElement(elementBy).sendKeys(keys);
  }

  async getText(elementBy: By) {
    await this.driver.wait(until.elementLocated(elementBy));
    return (await this.driver.findElement(elementBy)).getText();
  }

  async doSearch(text: string) {
    return this.sendKeys(this.wantedName, `${text}\n`);
  }

  async getResults() {
    return this.getText(this.results);
  }
}
