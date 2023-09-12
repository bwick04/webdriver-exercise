const { $ } = require('@wdio/globals')
const Page = require('./page');


class SecurePage extends Page {
    get flashAlert () { return $('#flash') }
    get logoutButton () { return $('a[href="/logout"]') }

    async clickLogoutButton () {
        await this.logoutButton.click()
    }
}

module.exports = new SecurePage();
