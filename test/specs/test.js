/**
 * Created by JGonzalez on 24/09/2017.
 */
var IndexPage = require('../page_objects/IndexPage');

describe('Webdriver.io index page test', () => {

    it('index page should load', () => {
        IndexPage.get();
        let indexPage =  IndexPage.page();
        expect(indexPage.testimonials.isVisible()).toBe(true);
    });
});
