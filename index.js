const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com/?gws_rd=ssl&safe=active&ssui=on');
  await page.screenshot({ path: 'screenshots/example.png' });

  await browser.close();
})();