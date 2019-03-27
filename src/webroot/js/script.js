/**
 * Created by Neunerlei on 8/10/2016.
 */
$(document).ready(function () {

	var objects = {
		// The mail address container
		"$mailAddress": $("#mail"),
		// The phone number container
		"$phoneNumber": $("#phone")
	};

	var methods = {

		"decrypter": {
			/**
			 * Removes "anti-bot-chars" from mail address
			 */
			"clickableMail": function () {
				// Check if already clickable
				if (objects.$mailAddress.find("a").length === 0) {
					// Make object clickable...
					// Get html
					var mail = objects.$mailAddress.html();

					// Remove cryption chars
					mail = mail.replace(/#at#/, "@").replace(/#dot#/, ".");

					// Build html tag
					var html = "<a href=\"mailto:" + mail + "\">" + mail + "</a>";
					objects.$mailAddress.html(html);
				}
			},

			/**
			 * Removes "anti-bot-chars" from phone number
			 */
			"phoneNumber": function () {
				// Check if already decoded
				var phoneNumber = objects.$phoneNumber.html().replace(/#/gi, " ");
				objects.$phoneNumber.html(phoneNumber);
			}
		},

		"init": function () {
			// "Decrypt" Mail address and phone number
			methods.decrypter.clickableMail();
			methods.decrypter.phoneNumber();
		}
	};

	// Init the script
	methods.init();
});