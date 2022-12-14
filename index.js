const puppeteer = require("puppeteer");
const fs = require("fs");

const url = "https://traversymedia.com";

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

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

  //   const courses = await page.evaluate(() =>
  //     Array.from(document.querySelectorAll("#courses .card"), (el) => ({
  //       title: el.querySelector(".card-body h3").innerText,
  //       level: el.querySelector(".card-body .level").innerText,
  //       url: el.querySelector(".card-footer a").href,
  //       promo: el.querySelector(".card-footer .promo-code .promo").innerText,
  //     }))
  //   );

  //   This is just another syntax to write the same code.
  const courses = await page.$$eval("#courses .card", (elements) =>
    elements.map((el) => ({
      title: el.querySelector(".card-body h3").innerText,
      level: el.querySelector(".card-body .level").innerText,
      url: el.querySelector(".card-footer a").href,
      promo: el.querySelector(".card-footer .promo-code .promo").innerText,
    }))
  );

  //   console.log(courses);
  // save to json
  fs.writeFile("courses.json", JSON.stringify(courses), (err) => {
    if (err) throw err;
    console.log("File saved");
  });

  await browser.close();
}
run();
