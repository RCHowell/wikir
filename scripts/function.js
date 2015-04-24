var id;

$(document).ready(function(){
	id = chrome.i18n.getMessage('@@extension_id'); // get the id
	$.ajax({ // get html for the menu
		url : "chrome-extension://" + id + "/inject.html",
		success : function(result){ // returns HTML for the menu
			$('body').prepend(result);
		}
	});
});