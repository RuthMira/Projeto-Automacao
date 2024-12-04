/* index.mjs */

const puppeteer = require('puppeteer');

async function ExemploGLPI() {
    let browser = await puppeteer.launch({ headless: true, slowMo: 250, ignoreHTTPSErrors: true });
    let page = await browser.newPage();
    await page.goto('https://glpi.1risjc.com.br/');

    await page.screenshot({ path: '/resultado/exemploGLPI.png' });
    await browser.close();
}

async function ExemploGLPILogin() {
    let browser = await puppeteer.launch({ headless: true, slowMo: 250, ignoreHTTPSErrors: true });
    let page = await browser.newPage();
    await page.goto('https://glpi.1risjc.com.br/');



    let login = 'ruth.silva';
    let senha = '43P8630tc#6!';
    
    await page.type('#login_name', login);
    await page.type('input[type="password"]', senha);

    const [response] = await Promise.all([
    page.waitForNavigation(),
    page.click('.btn-primary'),
    ]);

    await page.goto('https://glpi.1risjc.com.br/front/ticket.form.php');

    const inputId = await page.evaluate(() => {
        const divElement = document.querySelector('div.form-field');
        const labelElement = divElement.querySelector('label'); 
        return labelElement.getAttribute('for'); 
    });
    
    const inputValue = await page.$eval(`input[id=${inputId}]`, el => el.value);
    console.log(inputValue);



    
    



    await page.screenshot({ path: '/resultado/exemploGLPILogin.png' });
    await browser.close();
}



ExemploGLPI();
ExemploGLPILogin();



