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

            function folderNavigation(sideBar){
                this.getStarted = sideBar.element('[data-open="getstarted"]');
                this.usage = sideBar.element('[data-open="usage"]');
                this.testRunner = sideBar.element('[data-open="testrunner"]');
                this.reporters = sideBar.element('[data-open="reporters"]');
                this.services = sideBar.element('[data-open="services"]');
                this.plugins = sideBar.element('[data-open="plugins"]');
                this.examples = sideBar.element('[data-open="examples"]');

            }

            return {
                header: shared.header,
                doc: page.element('article.doc'),
                folderNavigation: page.element('nav .apinav.guide')
        }
        }
    };
})();
