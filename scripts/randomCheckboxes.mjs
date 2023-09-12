import { remote } from 'webdriverio'

function getRandomNumberFromOneToTen() {
    return Math.floor(Math.random() * 10) + 1;
}

(async () => {
    const browser = await remote({
        capabilities: {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: process.env.CI ? ['headless', 'disable-gpu'] : []
            }
        }
    })
    const firstCheckboxNumberOfClicks = getRandomNumberFromOneToTen();
    const secondCheckboxNumberOfClicks = getRandomNumberFromOneToTen();

    await browser.url('http://the-internet.herokuapp.com/checkboxes')
    const firstCheckbox = await browser.$('input[type=checkbox]:first-of-type')
    const secondCheckbox = await browser.$('input[type=checkbox]:last-of-type')

    for(let i = 0; i < firstCheckboxNumberOfClicks; i++) {
        await firstCheckbox.click()
    }

    for(let i = 0; i < secondCheckboxNumberOfClicks; i++) {
        await secondCheckbox.click()
    }
    
    await browser.deleteSession()
})()