Feature('CarPost');
let data = require('./app.config.js');
if(true){

    Scenario('login ', (I) => {
        I.amOnPage('/auth/login');
        I.fillField("Username", data.user_john.username);
        I.fillField("Password", data.user_john.password);
        I.click("Sign in",'.form-signin');
    });


    Scenario('rideshare_driver_search', (I) => {
        I.amOnPage('/home/user-post/carpool-post');
        I.waitForText('Post Carpool','.btn-group-col');
        I.click('Post Carpool');
        // I.click('Close', '.modal-body')
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

    Scenario('logout', (I) => {
        I.click('#navbarDropdownMenuLink');
        I.click("Sign Out");
    });
    

   

}
