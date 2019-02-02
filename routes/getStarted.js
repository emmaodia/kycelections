const express = require('express');
const router = express.Router();

router.get('/', function setupGetStartedButton(req, res){
        var messageData = {
                "get_started":[
                {
                    "payload":"USER_DEFINED_PAYLOAD"
                    }
                ]
        };

        // Start the request
        request({
            url: 'https://graph.facebook.com/v2.6/me/messenger_profile?access_token='+ PAGE_ACCESS_TOKEN,
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            form: messageData
        },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                // Print out the response body
                res.send(body);

            } else {
                // TODO: Handle errors
                res.send(body);
            }
        });
    }
)

module.exports = router;
