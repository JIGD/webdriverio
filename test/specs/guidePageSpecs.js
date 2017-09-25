/**
 * Created by JGonzalez on 24/09/2017.
 */
var IndexPage = require('../page_objects/IndexPage');
var GuidePage = require('../page_objects/GuidePage');
var ApiPage = require('../page_objects/ApiPage');
var ContributePage = require('../page_objects/ContributePage');

beforeEach(function () {
});

describe('Webdriver.io tests', () => {

    it('sidebar folder navigation shows links and hides links whenever we click on a new folder', () => {
        let indexPage =  IndexPage.get();
        indexPage.header.guide.click();
        let guidePage =  GuidePage.page();
        expect(guidePage.folderNavigation.getStarted.isVisible()).toBe(true);
    });
});
