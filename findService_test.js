Feature('find services');
let data = require('./app.config.js');

if(true){

    Scenario('find dealer', (I) => {
        I.amOnPage('/home/');
        I.click('Dealers','.new_prod_wrapper');
        I.waitForText('All / Dealers');
        I.click("More Info")
        I.waitInUrl('/service/detail/');
        I.click('.follow-btn');
        I.seeElement('.mat-dialog-container');
        I.click('.close');
    });


    // Scenario('find course', (I) => {
    //     I.amOnPage('/home/');
    //     I.click('License & Training','.slick-list');
    //     I.waitForText('All / License & Training');
    // });
    
    // Scenario('find lawyer/Insurance', (I) => {
    //     I.click('Insurance & Lawyers', '.new_prod_wrapper');
    //     I.waitForText('All / Insurance & Lawyers');
    // });

    // Scenario('find Car Stores', (I) => {
    //     I.click('Car Stores', '.new_prod_wrapper');
    //     I.waitForText('All / Car Shops');
    // });
    
    
    
    // Scenario('find Car Repair', (I) => {
    // 	I.click('Car Repair');
    //     I.waitInUrl('/car-repair');
    //     I.waitForText('Car-shop and Stores');
    //     pause();
    //     I.click('Sign in');
    //     pause();
    //     I.fillField('Username', 'test@email.com');
    //     I.fillField('Password', 'testPass');
    //     pause();
    //     I.click('Sign in','.form-signin');
    //     pause();
    //     I.click('Home ');
    // });

}





