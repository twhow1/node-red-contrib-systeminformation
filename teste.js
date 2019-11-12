const si = require('systeminformation');

si.getAllData(function(data) {
    console.log(data.os);
})
