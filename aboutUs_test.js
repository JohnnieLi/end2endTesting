Feature('AboutUs');
let data = require('./app.config.js');

if(true){
    Scenario('to About Us page', (I) => {
        I.amOnPage('/home/');
        I.click('About Us');
        I.waitInUrl('/contact');
        I.waitForText('FEATURES');
    });
}





