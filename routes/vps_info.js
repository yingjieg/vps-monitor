/**
 * Created by guoyj on 2015/8/14.
 */

var express = require("express");
var request = require("request");
var router = express.Router();

var options = {
    url: "https://api.kiwivm.it7.net/v1/getServiceInfo",
    method: 'GET',
    qs: {
        "veid": 189155,
        "api_key": "private_U0W4aRDKHGv7wZnIAwiRujKz"
    }
}


router.get("/", function(req, res, next) {
    request(options, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            res.json(body);
        }
    });
});

module.exports = router;
