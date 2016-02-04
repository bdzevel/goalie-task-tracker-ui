var $ = require("jquery");

function AJAX(method, url, onSuccess, onError, body)
{
	$.ajax({
		async: true,
		contentType: "application/json",
		xhrFields: { withCredentials: true },
		method: method,
		url: url,
		data: body,
		success: onSuccess,
		error: onError
	});
}

module.exports = AJAX;