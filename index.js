const puppeteer = require("puppeteer");

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://traversymedia.com");

  //   await page.screenshot({ path: "example.png", fullPage: true });
  //   await page.pdf({ path: "example.pdf", format: "A4" });

  //   gets the whole page content
  //   const html = await page.content();

  //   This will just get the title
  //   const title = await page.evaluate(() => document.title);

  //   Just the text
  //   const text = await page.evaluate(() => document.body.innerText);

  //   This will get all the links
  //   const links = await page.evaluate(() =>
  //     Array.from(document.querySelectorAll("a"), (el) => el.href)
  //   );

  await browser.close();
}
run();
