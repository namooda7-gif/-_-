import puppeteer from 'puppeteer';

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 2000));

    const htmlInfo = await page.evaluate(() => {
      const container = document.querySelector('.hero-section');
      if(!container) return 'No hero-section found';
      
      const buttons = container.querySelectorAll('button');
      const innerHtmlLength = container.innerHTML.length;
      
      return {
         htmlLength: innerHtmlLength,
         buttonCount: buttons.length,
         buttonClasses: Array.from(buttons).map(b => b.className)
      };
    });

    console.log(JSON.stringify(htmlInfo, null, 2));
    await browser.close();
  } catch (error) {
    console.error('Puppeteer crash:', error);
  }
})();
