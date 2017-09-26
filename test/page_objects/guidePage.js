var sharedPageObjects = require('./shared');
module.exports = (function () {

    return {
        get: function () {
            var self = this;
            browser.url('/guide.html');
            return self.page();
        },

        page: function () {
            browser.waitForVisible('article.doc', 30000);
            var shared = sharedPageObjects();
            var page = browser.element('.content .container');
            return {
                header: shared.header,
                doc: page.element('article.doc')
        }
        }
    };
})();
