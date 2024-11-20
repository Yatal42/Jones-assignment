const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch(); 
    const page = await browser.newPage();
    const url ='https://testsite.getjones.com/ExampleForm/';
    await page.goto(url);

    await page.type('#name', 'Name');
    await page.type('#email', 'email@example.com');
    await page.type('#phone', '0501234567');
    await page.type('#company', 'Company');
    await page.select('#employees', '51-500');

    const screenshotPath = 'before-submit.png'
    await page.screenshot({ path:screenshotPath});

    await page.click('text=Request a call back');

    await page.waitForNavigation();
    console.log('Form submitted successfully!');

    await browser.close();
})();