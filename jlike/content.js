// content.js
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('add_content');
    // onClick's logic below:
    link.addEventListener('click', function() {
		chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
		   function(tabs){
				var request = new XMLHttpRequest()
				var data = new FormData();
				data.append('url', tabs[0].url);
				data.append('client', 'com_ekcontent');
				data.append('cont_id', 1353);
				request.open('POST', 'http://ttpl1-php72.local/joom/index.php?option=com_api&app=jlike&resource=init', true)
				request.send(data)
		   }
		);
    });
});
