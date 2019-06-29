/**
 * Created by Neunerlei on 8/10/2016.
 */

document.addEventListener('DOMContentLoaded', function () {

	var objects = {
		// The mail address container
		"$mailAddress": document.getElementById("mail"),
		// The phone number container
		"$phoneNumber": document.getElementById("phone")
	};

	var methods = {

		"decrypter": {
			/**
			 * Removes "anti-bot-chars" from mail address
			 */
			"clickableMail": function () {
				// Check if already clickable
				if (objects.$mailAddress.querySelectorAll("a").length === 0) {
					// Make object clickable...
					// Get html
					var mail = objects.$mailAddress.innerHTML;

					// Remove cryption chars
					mail = mail.replace(/#at#/, "@").replace(/#dot#/, ".");

					// Build html tag
					const node = document.createElement("a");
					node.setAttribute("href", "mailto:" + mail);
					node.textContent = mail;
					objects.$mailAddress.replaceWith(node)
				}
			},

			/**
			 * Removes "anti-bot-chars" from phone number
			 */
			"phoneNumber": function () {
				// Check if already decoded
				objects.$phoneNumber.innerHTML = objects.$phoneNumber.innerHTML.replace(/#/gi, " ");
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
}, false);