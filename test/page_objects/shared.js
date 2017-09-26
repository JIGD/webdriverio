function Header(header) {
    //TODO: element chaining/selectors not working for some reason. Need to fix it.
    header.logo = $('.logo');
    header.home = $('a*=Home');
    header.guide = $('a*=Developer Guide');
    header.api = $('a*=API');
    header.contribute = $('a*=Contribute');
    header.docSearch = $('input.ds-input');
    header.suggestion = $('.algolia-docsearch-suggestion--category-header');
    return header;
}

var headerPage = browser.element('nav.mainnav');

module.exports = function () {

    return {
        header: new Header(headerPage)
    };
};
