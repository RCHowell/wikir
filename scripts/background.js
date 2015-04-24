var rule = {
	conditions: [
		new chrome.declarativeContent.PageStateMatcher({
			pageUrl: { hostEquals: 'en.wikipedia.org'}
		})
	],
	actions: [ new chrome.declarativeContent.ShowPageAction() ]
};

chrome.runtime.onInstalled.addListener(function() {
	// remove all rules
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  	// add rule
    chrome.declarativeContent.onPageChanged.addRules([rule]);
  });
});