Feature('find services');
let data = require('./app.config.js');

Scenario('find course', (I) => {
    I.amOnPage('/home/');
    I.click('License & Training');
    I.waitInUrl('/home/course');
    I.waitForText('License Translation and Training Course');
});

Scenario('find lawyer/Insurance', (I) => {
    I.click('Insurance & Lawyers');
    I.waitInUrl('/home/insurance');
	I.waitForText('Insurance and Lawyers');
});

Scenario('find dealer', (I) => {
    I.click('Dealers');
    I.waitInUrl('/home/dealer');
	I.waitForText('Car dealers');
});

Scenario('find Car Repair', (I) => {
	I.click('Car Repair');
    I.waitInUrl('/car-repair');
    I.waitForText('Car-shop and Stores');
    pause();
    I.click('Sign in');
    pause();
    I.fillField('Username', 'test@email.com');
    I.fillField('Password', 'testPass');
    pause();
    I.click('Sign in','.form-signin');
    pause();
    I.click('Home ');
});




