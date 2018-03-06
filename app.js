var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');


//conexion db
 
  

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());


// importar modelos y controladores
var models     = require('./models/game')(app, mongoose);
var GameCtrl = require('./controllers/games');

//example route
var router = express.Router();
router.get('/', function(req, res) {
   res.send("Hello World!");
});

app.use(router);

//API Routes
var games = express.Router();

games.route('/games')
    .get(GameCtrl.findAllGames)
    .post(GameCtrl.addGame);

games.route('/games/:id')
  .get(GameCtrl.findById)
  .put(GameCtrl.updateGame)
  .delete(GameCtrl.deleteGame);

app.use('/api', games);



//Start server
app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
  });
