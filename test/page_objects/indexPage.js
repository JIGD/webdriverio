module.exports = (function () {

    return {
        get: function (params) {
            var self = this;
            browser.url('http://www.webdriver.io');
            return self.page();
        },

        page: function () {
            var page = browser.element('.content .container');
            page.testimonials = page.element('.testimonials');
            return page;
        }

    };
})();
