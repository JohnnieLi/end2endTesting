Feature('CarPost');
let data = require('./app.config.js');
if(true){

    Scenario('login ', (I) => {
        I.amOnPage('/auth/login');
        I.fillField("Username", data.user_john.username);
        I.fillField("Password", data.user_john.password);
        I.click("Sign in",'.form-signin');
    });


    Scenario('access my page and edit page', (I) => {
        I.amOnPage('/home')
        I.click('#navbarDropdownMenuLink');
        I.click("MyPage");
        I.waitInUrl('/service/myDetail');
        I.see('Johnnie22');
        I.click('Edit My Page','.profile-action-inner');
        I.waitInUrl('/service/editMyDetail');
        I.wait(2);
        I.click('.upload-action','.myService');
        I.waitForText("Post Your Service");
        I.click('Cancel','.modal-footer');
        I.wait(1);
        I.click('Save','#sidebar');
    });
    


    Scenario('logout', (I) => {
        I.wait(3);
        I.click('#navbarDropdownMenuLink');
        I.click("Sign Out");
    });
    

   

}
