// ==UserScript==
// @name         🐭️ MouseHunt - Taller windows
// @version      1.1.0
// @description  Makes all the windows taller, so you can see more of the content without scrolling.
// @license      MIT
// @author       bradp
// @namespace    bradp
// @match        https://www.mousehuntgame.com/*
// @icon         https://brrad.com/mouse.png
// @grant        none
// @run-at      document-end
// ==/UserScript==

((function () {
	'use strict';

	const style = document.createElement('style');
	style.innerHTML = `#supplytransfer .drawer,
	#supplytransfer .drawer .tabContent,
	#supplytransfer .drawer .listContainer,
	.treasureMapView-blockWrapper.tall .treasureMapView-block-content,
	.treasureMapView-block-content.tall,
	.treasureMapView-block-content,
	.MHCheckoutAllRewardsPageView,
	.treasureMapListingsView-tableView,
	.marketplaceView-browse-content,
	.adventureBookPopup-titleContent,
	.treasureMapView-block-content.halfHeight,
	.convertibleOpenView-itemContainer,
	#messengerUINotification .notificationHeader,
	#messengerUINotification .notificationMessageList,
	.convertibleOpenView-itemContainer {
		max-height: 75vh;
		height: auto;
	}

	.giftSelectorView-inbox-giftContainer {
		min-height: 300px;
		max-height: 75vh;
		height: auto;
	}

	.giftSelectorView-scroller {
		min-height: 320px;
		max-height: 55vh;
		height: auto;
	}`;
	document.head.appendChild(style);
})());
