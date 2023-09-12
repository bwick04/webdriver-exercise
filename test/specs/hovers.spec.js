const { expect } = require('@wdio/globals')
const { browser } = require('@wdio/globals')
const HoversPage = require('../pageobjects/hovers.page')

describe('Hovers page', () => {
    it('should be able to navigate to each users profile', async () => {
        await HoversPage.open()
        for await (const profile of HoversPage.userProfilePicture) {
            await profile.moveTo()
            await profile.$('a=View profile').click()
            expect(browser).toHaveUrlContaining(`/users/${profile.index+1}`)
            await browser.back()
        }
    })
})

