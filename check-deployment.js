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
    console.log(`Taking screenshot of: ${url}`);
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
  console.log('Taking screenshots of both deployed and reference portfolios...');
  
  // Take screenshot of deployed portfolio
  await takeScreenshot(
    'https://adarsh-portfolio-teal.vercel.app/',
    'deployed-portfolio-screenshot.png'
  );
  
  // Take fresh screenshot of Ram Goel's portfolio
  await takeScreenshot(
    'https://www.ramgoel.com/',
    'ramgoel-reference-screenshot.png'
  );
  
  console.log('Screenshots completed!');
}

main().catch(console.error);