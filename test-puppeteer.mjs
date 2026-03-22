import puppeteer from 'puppeteer';

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    page.on('pageerror', err => {
      console.log('PAGE_ERROR:', err.message);
    });
    page.on('console', msg => {
      if (msg.type() === 'error') {
        console.log('CONSOLE_ERROR:', msg.text());
      }
    });

    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
    const nextData = await page.$eval('script#__NEXT_DATA__', el => el.innerText).catch(() => 'No Next.js data found');
    console.log('Next.js Data Length:', nextData.length);
    
    // check if there is an error overlay
    const overlay = await page.$$('nextjs-portal');
    console.log('Overlay count:', overlay.length);

    await browser.close();
  } catch (error) {
    console.error('Puppeteer crash:', error);
  }
})();
