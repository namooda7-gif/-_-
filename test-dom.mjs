import puppeteer from 'puppeteer';

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    // Wait for network to be idle
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
    
    // Give Framer Motion 1 second to settle
    await new Promise(r => setTimeout(r, 1000));

    // Get info about HeroGallery cards
    const cardInfo = await page.evaluate(() => {
      const buttons = document.querySelectorAll('button[type="button"]');
      let arr = [];
      buttons.forEach(b => {
        // Only get buttons related to HeroGallery (has inline style width like 3.5vw or 45vw)
        if(b.style.width) {
          arr.push({
            width: b.style.width,
            height: b.style.height,
            opacity: window.getComputedStyle(b).opacity,
            className: b.className
          });
        }
      });
      return arr;
    });

    console.log('--- CARD INFO ---');
    console.log(JSON.stringify(cardInfo, null, 2));

    // Get info about Ticker
    const tickerInfo = await page.evaluate(() => {
      // Find the flex-row gap-1.5 container
      const tickerContainer = document.querySelector('.flex.flex-row.gap-1\\.5.items-end.h-4');
      if (!tickerContainer) return 'No Ticker Container Found';
      return tickerContainer.children.length + ' ticker items found.';
    });
    console.log('--- TICKER INFO ---');
    console.log(tickerInfo);

    await browser.close();
  } catch (error) {
    console.error('Puppeteer crash:', error);
  }
})();
