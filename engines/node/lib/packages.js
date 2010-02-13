var fs = require("fs");

exports.root = JSON.parse(fs.cat("local.json").wait());
