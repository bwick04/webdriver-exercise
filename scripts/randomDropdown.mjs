import { remote } from 'webdriverio'

function getRandomOption(numberOfOptions) {
    return Math.floor(Math.random() * numberOfOptions) + 1;
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

    await browser.url('http://the-internet.herokuapp.com/dropdown')
    const optionsElement = await browser.$$('option:not([disabled])')
    const randomOptionValue = getRandomOption(optionsElement.length)
    await browser.$('#dropdown').selectByAttribute('value', `${randomOptionValue}`)
    await browser.deleteSession()
})()