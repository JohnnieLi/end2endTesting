Feature('Course_available');
let data = require('./app.config.js');


let UserTestList = ["user_free","user_instructor","user_OTP",
	"user_OTPP",  "user_RTPP", "user_TPC", "user_TPCP", "user_WTP", "user_WTPP", "user_Hospital","user_city"];


UserTestList.forEach(function(user) {
    if(true){
	    Scenario( data[user].type + ': Login', (I) => {
		    I.amOnPage('/login/');
		    I.see('Login');
		    I.fillField('#log', data[user].username);
		    I.fillField('#pwd', data[user].password);
		    I.click('#mm-login-button');
		    I.waitInUrl('/'+data[user].homeUrl);
	    });

	    if(user != "user_Hospital" && user != "user_city"){
		    Scenario(data[user].type + ':Courses_available', (I) => {
			    I.amOnPage('/my-course/');
			    I.waitForText('My Courses');
			    I.checkCoursesByMembershipLevel(data[user].type);
		    });
	    }

	    Scenario('LogOut', (I) => {
		    I.amOnPage('/home/');
		    I.see('Logout');
		    I.click('Logout');
		    I.waitForText('You have successfully logged out.');
	    });
    }


});


