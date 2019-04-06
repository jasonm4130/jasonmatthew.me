import axios from 'axios';

exports.handler = (event, context, callback) => {
	// Sets the username - replace username with your Medium Username
	var username = 'jason_matthew'
	var url = "https://medium.com/@"+username+"/latest?format=json";

	axios.get(url)
    .then((res) => {
		const jsonBody = res.data.replace('])}while(1);</x>', '');
		callback(null, {
			statusCode: 200,
			body: jsonBody
		});
    })
    .catch((err) => {
      callback(err);
    });
};