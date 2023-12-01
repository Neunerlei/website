/*
 * Copyright 2022 Martin Neundorfer (Neunerlei)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Last modified: 2022.04.06 at 11:42
 */
import './App.sass';

document.addEventListener('DOMContentLoaded', function () {
	
	var objects = {
		// The mail address container
		$mailAddress: document.getElementById("mail")!,
		// The phone number container
		$phoneNumber: document.getElementById("phone")!,
		$age: document.getElementById("age")!
	};
	
	var methods = {
		updateAge: function(){
			var age = Math.floor((new Date().getTime() - new Date(1988, 2, 14).getTime()) / (1000 * 60 * 60 * 24 * 365));
			objects.$age.innerHTML = age.toString();
		},
		
		decrypter: {
			/**
			 * Removes "anti-bot-chars" from mail address
			 */
			clickableMail: function () {
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
			phoneNumber: function () {
				// Check if already decoded
				objects.$phoneNumber.innerHTML = objects.$phoneNumber.innerHTML.replace(/#/gi, " ");
			}
		},
		
		init: function () {
			methods.decrypter.clickableMail();
			methods.decrypter.phoneNumber();
			methods.updateAge();
		}
	};
	
	// Init the script
	methods.init();
}, false);
