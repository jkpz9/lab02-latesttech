const express = require('express'),
    cors = require('cors')
    path = require('path'),
    app= express(),
    port = process.env.PORT || 13000;

    // use it before all routes definitions 
// app.use(cors({origin: 'http://localhost:13000'}));
//app.use(cors());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//  });
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  return next();
});

      
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function(){
    console.log("server starting on port "+port);
});

