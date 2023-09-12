const { $$ } = require('@wdio/globals');
const Page = require('./page');

class HoversPage extends Page {

    get userProfilePicture () { return $$('.figure') }

    open () {
        return super.open('hovers');
    }
}

module.exports = new HoversPage();
