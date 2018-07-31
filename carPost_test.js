Feature('CarPost');
let data = require('./app.config.js');
if(true){
    Scenario('rideshare_driver_search', (I) => {
        I.amOnPage('/home/');
        I.click('Carpool');
        I.waitInUrl('/home/carpool');
        I.waitForText('Post Carpool');
      //  I.click('Post Carpool');
    });
    
    
    Scenario('rideshare_passenger_search', (I) => {
        I.click('#mat-tab-label-0-1');
        I.waitForText('Request Carpool');
      //  I.click('Request Carpool');
    });


    Scenario('switch_language', (I) => {
        I.wait(2);
        I.click('Language ', '.lan-pos');
        I.click('中文', '.lan-pos');
        I.see('首页');
        I.click('语言 ', '.lan-pos');
        I.click('English', '.lan-pos');
        I.see('Home');
    });
    

}
