/**
 * Created by JGonzalez on 24/09/2017.
 */
var IndexPage = require('../page_objects/IndexPage');
var GuidePage = require('../page_objects/GuidePage');
var ApiPage = require('../page_objects/ApiPage');
var ContributePage = require('../page_objects/ContributePage');
var expect = require('chai').use(require('chai-as-promised')).expect;


describe('Doc search tests', () => {
    
    it('setting a value in doc search should open suggestion box', () => {
        let indexPage =  IndexPage.get();
        expect(indexPage.header.docSearch.isVisible()).to.eventually.equal(true);
        indexPage.header.docSearch.click();
        indexPage.header.docSearch.setValue('test');
        expect(indexPage.header.docSearch.getValue()).to.eventually.equal('test');
        expect(indexPage.header.suggestion.isVisible()).to.eventually.equal(true);
    });
});
