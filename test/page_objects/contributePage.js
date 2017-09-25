var sharedPageObjects = require('./shared');
module.exports = (function () {

    return {
        get: function () {
            var self = this;
            browser.url('/contribute.html');
            return self.page();
        },

        page: function () {
            browser.waitForVisible('#Contributing', 30000);
            var shared = sharedPageObjects();
            var page = browser.element('.content .container');
            return {
                header: shared.header,
                doc: page.element('#Contributing')
        }
        }
    };
})();
