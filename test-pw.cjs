const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('pageerror', error => {
    console.log(`[PAGE ERROR] ${error.message}\n${error.stack}`);
  });
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log(`[CONSOLE ERROR] ${msg.text()}`);
    }
  });

  page.on('requestfailed', request => {
    console.log(`[REQUEST FAILED] ${request.url()} - ${request.failure()?.errorText}`);
  });

  console.log('Navigating to http://localhost:3000 ...');
  await page.goto('http://localhost:3000', { waitUntil: 'load', timeout: 10000 }).catch(e => console.log('Goto error:', e.message));
  
  // Wait to capture errors that appear after hydration
  await page.waitForTimeout(3000);
  
  await browser.close();
})();
