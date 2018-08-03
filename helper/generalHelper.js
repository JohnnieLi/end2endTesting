'use strict';
let Helper = codecept_helper;

// use any assertion library you like
let assert = require('assert');

const membership_level_course = {

}
class GeneralHelper extends Helper {

	/**
	 * checks that authentication cookie is set
	 */
	async checkCoursesByMembershipLevel(membership) {
		// access current client of WebDriverIO helper
		let client = this.helpers['WebDriverIO'];

		// get all cookies according to http://webdriver.io/api/protocol/cookie.html
		// any helper method should return a value in order to be added to promise chain
		//const res = await client.browser.cookie();
		// get values
		try{
			for(let key in  membership_level_course[membership]){
				if(membership_level_course[membership].hasOwnProperty(key)){
					await client.see(membership_level_course[membership][key]);
					console.log("I see " + membership_level_course[membership][key]);
				}
			}
			if(membership_level_course[membership][0] == 'EZ T.O.P'){
				//await client.wait(1);
				console.log('click EZ T.O.P');
				await client.click('EZ T.O.P');
				await client.waitForText('Welcome to');
				await client.click('Start now');
				await client.seeElement("#dp-mainbody-columns");
			}
			// else{
			// 	console.log('click Essential Grammar');
			// 	//await client.wait(1);
			// 	await client.click('Essential Grammar');
			// 	//await client.waitForText('Essential Grammar');
			// }
			assert.ok(true);
		}catch(e){
			console.log(e);
			assert.fail(e);
		}
	}
}

module.exports = CourseHelper;
