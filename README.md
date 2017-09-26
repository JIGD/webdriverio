# webdriverio

## In order to run: 
* Download this project
* Install latest stable node
* Using command line on the project directory run npm install command
* Using command line project directory type ./node_modules/.bin/selenium-standalone install
* Add selenium to path variable
* Using command line project directory type ./node_modules/.bin/selenium-standalone start
* Using command line on the project directory type npm test

##Blockers:
* Had an issue with selenium where it would fail on install.
* Had an issue with how webdriver.io manages elements and promises since it's really different to how it's done on protractor.
* Had an issue with cucumber finds step definitions (Had to switch to jasmine).
* Had an issue with async not working due to a property in config file.
* Had an issue with css selectors not working for attributes.
* Had an issue with setValue not working properly.

##Stuff i didn't have the time to do:
* Add propper async handling in page object.
* Add jslint verification.
* Add grunt for more runs instead of just using package.
* Add propper testing for search bar.
* Add allure reporting for instant html reports using a grunt or node command.
* Add more complex before and after hooks.
