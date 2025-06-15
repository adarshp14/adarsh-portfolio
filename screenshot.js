const puppeteer = require('puppeteer');
const path = require('path');

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
    
    // Take full page screenshot
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
  console.log('Taking screenshots...');
  
  // Take screenshot of Adarsh's portfolio
  await takeScreenshot(
    'https://adarsh-portfolio-teal.vercel.app/',
    'adarsh-portfolio-screenshot.png'
  );
  
  // Take screenshot of Ram Goel's portfolio
  await takeScreenshot(
    'https://www.ramgoel.com/',
    'ramgoel-portfolio-screenshot.png'
  );
  
  console.log('Screenshots completed!');
}

main().catch(console.error);