var sharedPageObjects = require('./shared');
module.exports = (function () {

    return {
        get: function () {
            var self = this;
            browser.url('/api.html');
            return self.page();
        },

        page: function () {
            browser.waitForVisible('#WebdriverIO-API-Docs', 30000);
            var shared = sharedPageObjects();
            var page = browser.element('.content .container');
            return {
                header: shared.header,
                apidoc: page.element('#WebdriverIO-API-Docs')
        }
        }
    };
})();
