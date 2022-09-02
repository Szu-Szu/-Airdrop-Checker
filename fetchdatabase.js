//download stuff
const express = require('express');
const app = express();
const mssql = require("mysql");
 
app.get('/', function (req, res) {
 
    // Config your database credential
    const config = {
        user: 'linroot',
        password: 'eXTDUj0AxkAUPe!7',
        server: 'lin-7861-5188-mysql-primary.servers.linodedb.net',
        database: 'example'
    };
 
    // This should connect to a database
    mssql.connect(config, function (err) {
 
        var request = new mssql.Request();
 
        //Find that shit
        request.query('select * from example',
            function (err, records) {
 
                if (err) console.log(err)
 
                //display data to local browser
                
                res.send(records);
 
            });
    });
});
 
var server = app.listen(5000, function () {
    console.log('Server is listening at port 5000...');