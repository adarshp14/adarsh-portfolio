const puppeteer = require('puppeteer');

async function takeScreenshot(url, filename) {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: {
      width: 1920,
      height: 1080
    }
  });
  
  const page = await browser.newPage();
  
  try {
    await page.goto(url, { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    await page.screenshot({ 
      path: filename,
      fullPage: true,
      type: 'png'
    });
    
    console.log(`Screenshot saved: ${filename}`);
  } catch (error) {
    console.error(`Error taking screenshot of ${url}:`, error.message);
  } finally {
    await browser.close();
  }
}

async function main() {
  console.log('Taking comparison screenshots...');
  
  // Take screenshot of local portfolio
  await takeScreenshot(
    'http://localhost:3000',
    'adarsh-portfolio-final.png'
  );
  
  // Take screenshot of Ram Goel's portfolio
  await takeScreenshot(
    'https://www.ramgoel.com/',
    'ramgoel-portfolio-final.png'
  );
  
  console.log('Comparison screenshots completed!');
}

main().catch(console.error);