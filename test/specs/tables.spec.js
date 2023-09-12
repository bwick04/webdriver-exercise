const { expect } = require('@wdio/globals')
const { browser } = require('@wdio/globals')
const chai = require('chai');
const TablesPage = require('../pageobjects/tables.page');

describe('Data tables page', () => {
    const headers = [{label: 'First Name'}, {label: 'Last Name'}, {label: 'Email'}, {label: 'Due'}, {label: 'Web Site'}, {label: 'Action'}]

    beforeEach(async () => { await TablesPage.open() })

    it('should have the correct number of columns', async () => {
        chai.expect(await TablesPage.columnHeaders.length).to.equal(headers.length)
    })

    it('should be able to sort by last name in ascending order after clicking once', async () => {
        const ascendingOrderLastNames = await TablesPage.lastNames.map((lastName) => lastName.getText()).sort()        
        await TablesPage.sortByAscendingOrderColumn('Last Name')
        const lastNames = await TablesPage.lastNames.map((lastName) => lastName.getText())
        chai.assert.sameOrderedMembers(ascendingOrderLastNames, lastNames)
    })

    it('should be able to sort by last name in decsending order after clicking twice', async () => {
        const descendingOrderSortedLastNames = await TablesPage.lastNames.map((lastName) => lastName.getText()).sort()
        descendingOrderSortedLastNames.reverse()
        await TablesPage.sortByDescendingOrderColumn('Last Name')
        const lastNames = await TablesPage.lastNames.map((lastName) => lastName.getText())
        chai.assert.sameOrderedMembers(descendingOrderSortedLastNames, lastNames)
    })

    it('should be able to edit each row', async () => {
        for await (const editButton of TablesPage.editButtons) {
            await editButton.click()
            // Since edit functionality is not built out, assume this is how we check
            expect(browser).toHaveUrlContaining('#edit')
        }
    })

    it('should be able to delete each row', async () => {
        for await (const deleteButton of TablesPage.deleteButtons) {
            await deleteButton.click()
            // Since delete functionality is not built out, assume this is how we check
            expect(browser).toHaveUrlContaining('#delete')
        }
    })
})

