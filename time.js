window.onload = function() {
	window.setInterval( function() {
		var now = new Date();
		var h = now.getHours();
		var m = now.getMinutes();
		var s = now.getSeconds();
		
		var badge_text = (m < 10 ? "0" + m : m).toString();
		var title_text = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
		
		chrome.browserAction.setBadgeText({text: badge_text});
		chrome.browserAction.setTitle({title: title_text});
	}, 1000);
}