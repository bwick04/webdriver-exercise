const { $ } = require('@wdio/globals')
const Page = require('./page');


class TablesPage extends Page {

    get columnHeaders () {
        return $$('#table1 > thead > tr > th.header')
    }

    get lastNames () {
        return $$('#table1 > tbody > tr > td:first-child')
    }

    get firstNames () {
        return $$('#table1 > thead > tr > th.header')
    }

    get emails () {
        return $$('#table1 > thead > tr > th.header')
    }

    get amountDue () {
        return $$('#table1 > thead > tr > th.header')
    }

    get websites () {
        return $$('#table1 > thead > tr > th.header')
    }

    get editButtons () {
        return $('#table1').$$('a=edit')
    }

    get deleteButtons () {
        return $('#table1').$$('a=delete')
    }

    async sortByAscendingOrderColumn (label) {
        const header = await $(`span=${label}`)
        await header.click()
        // Not ideal, but need to wait for dom to update
        await browser.pause(500)
    }

    async sortByDescendingOrderColumn (label) {
        const header = await $(`span=${label}`)
        await header.click()
        await header.click()
        // Not ideal, but need to wait for dom to update
        await browser.pause(500)
    }

    open () {
        return super.open('tables');
    }
}

module.exports = new TablesPage();
