Feature('AboutUs');
let data = require('./app.config.js');

if(true){
    Scenario('AboutPage to Payment', (I) => {
        I.amOnPage('/home/');
        I.click('About Us');
        I.waitInUrl('/aboutUs');
        I.waitForText('FEATURES');
        I.scrollPageToBottom();
        // I.dontsee("This page didn't load Google Maps correctly. See the JavaScript console for technical details.")
        I.scrollTo('#plan');
        I.click("Become a Premium User");
        I.waitInUrl('/auth/login?returnUrl=/user/setting/account/payment/1');
        I.fillField("Username", data.user_john.username);
        I.fillField("Password", data.user_john.password);
        I.click("Sign in",'.form-signin');
        I.waitInUrl('/user/setting/account/payment/1');
        I.wait(1);
        I.click("Select", ".plan");
        // I.click("Enter Promo Code", ".step2");
        // pause();
        // I.seeElement('#mat-dialog-1');
        // I.fillField("Promo Code", "atbi63");
        // I.click("Try", "#mat-dialog-1");
        // I.see('Get 3 monthly plan fee as account balance credit');
        I.scrollPageToBottom();
        I.click("Continue to Payment",'.--subscription');
        I.wait(3);
        within({frame: ".stripe_checkout_app"}, () => {
            I.see('Pay');
            I.click('.Header-navClose');
          });
        I.amOnPage('/home/');
        I.click('#navbarDropdownMenuLink');
        I.click("Sign Out");
    });


}





