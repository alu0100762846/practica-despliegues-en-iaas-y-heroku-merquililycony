var http = require('http');

var server = http.createSarver(function(req,res){
    res.writeHead(200,{'Content-Type' : 
    'text/html'});
    res.end('<h1>Hello World<h1>');
    
});

var port = Number(process.env.PORT || 3000 );

 
 server.listen(port); 