const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const { browser } = require('@wdio/globals')


describe('Login page', () => {
    it('should be able to login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(browser).toHaveUrlContaining('/secure')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
        await SecurePage.clickLogoutButton()
        await expect(browser).toHaveUrlContaining('/login')
        await expect(LoginPage.flashAlert).toBeExisting()
        await expect(LoginPage.flashAlert).toHaveTextContaining(
            'You logged out of the secure area!')
    })
})

