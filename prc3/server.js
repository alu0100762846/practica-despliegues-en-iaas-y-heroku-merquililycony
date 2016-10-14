

    // importar
    var express = require('express');
     
    // instanciar
    var app = express();
     
    // ruteo
    app.get('/', function(req, res){
      res.sendfile(__dirname + '/public/index.html');
    });

       app.get('/CAPITULO1.html', function(req, res){
      res.sendfile(__dirname + '/public/CAPITULO1.html');
    });

    app.get('/CAPITULO2.html', function(req, res){
      res.sendfile(__dirname + '/public/CAPITULO2.html');
    });

    app.get('/CAPITULO3.html', function(req, res){
      res.sendfile(__dirname + '/public/CAPITULO3.html');
    });

    app.get('/CAPITULO4.html', function(req, res){
      res.sendfile(__dirname + '/public/CAPITULO4.html');
    });

  app.get('/gitbook', function(req, res){
      res.sendfile(__dirname + '/public/gitbook');
    });

 app.get('/gitbook/style.css', function(req, res){
      res.sendfile(__dirname + '/public/gitbook/style.css');
    });

 app.get('/gitbook/theme.js', function(req, res){
      res.sendfile(__dirname + '/public/gitbook/theme.js');
    });

 app.get('/gitbook/gitbook.js', function(req, res){
      res.sendfile(__dirname + '/public/gitbook/gitbook.js');
    });


  app.get('/npm.jpg', function(req, res){
      res.sendfile(__dirname + '/public/npm.jpg');
    });

app.get('/search_index.json', function(req, res){
  // Indicamos el tipo de contenido a devolver en las cabeceras de nuestra respuesta
  res.contentType('application/json');
  res.sendfile(__dirname + '/public/search_index.json');
});

     
    // escuchar
    app.listen(8080);
     
    console.log("Servidor Express escuchando en modo %s", app.settings.env);
