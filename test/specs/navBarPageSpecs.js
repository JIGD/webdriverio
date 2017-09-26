/**
 * Created by JGonzalez on 24/09/2017.
 */
var IndexPage = require('../page_objects/IndexPage');
var GuidePage = require('../page_objects/GuidePage');
var ApiPage = require('../page_objects/ApiPage');
var ContributePage = require('../page_objects/ContributePage');
var expect = require('chai').use(require('chai-as-promised')).expect;


describe('Webdriver.io tests', () => {

    //expects are not really needed since we're checking for load in page() methods but added for clarity.
    it('navigation links redirect us to the right pages', () => {
        let indexPage =  IndexPage.get();
        expect(indexPage.testimonials.isVisible()).to.eventually.equal(true);
        indexPage.header.guide.click();
        let guidePage =  GuidePage.page();
        expect(guidePage.doc.isVisible()).to.eventually.equal(true);
        guidePage.header.logo.click();
        indexPage = IndexPage.page();
        expect(indexPage.testimonials.isVisible()).to.eventually.equal(true);
        indexPage.header.api.click();
        let apiPage = ApiPage.page();
        expect(apiPage.apidoc.isVisible()).to.eventually.equal(true);
        apiPage.header.contribute.click();
        let contributePage = ContributePage.page();
        expect(contributePage.doc.isVisible()).to.eventually.equal(true);
        contributePage.header.home.click();
        indexPage = IndexPage.page();
        expect(indexPage.testimonials.isVisible()).to.eventually.equal(true);
    });
});
