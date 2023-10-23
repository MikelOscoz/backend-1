let express = require('express');

let app = express();

app.use(express.static('public')); //elementu estatikoak kargatzeko middleware
app.use(express.urlencoded({ extended: false })); // formularioak kargatzeko middleware

app.listen( 3000, function() {
    console.log("Zerbitzaria 3000 portuan entzuten");
})
app.get("/", function(req, res) {
     res.send("Kaixo mundua!");
});

//bezeroa POST
app.post("/bezeroa",function(req,res){
    //res.send("Bezeroaren izena: " + req.body.izena);
    res.send(`Kaixo ${req.body.izena} ${req.body.abizena}`); //req.body (POST)
});

app.get('/bezeroa/:izena', function(req, res) {
     res.send("Bezeroaren izena: " + req.params.izena); //req.params (GET)
});

app.get('/bezero', function(req, res) {
     res.send("Bezeroaren izena: " + req.query.izena); //req.query (GET) (querystring)
 });
