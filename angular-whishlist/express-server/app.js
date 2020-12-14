var express = require("express"), cors = require ('cors');
var app = express();
app.use(express.json());
app.listen(3000, () => console.log("Server running on port 3000"));

app.get("/url", (req, res, next) => res.json (["Paris", "Barcelona", "Barranquilla", "Montevideo"]));

var misDestinos = [];
app.get("/my", (req, res, next) => res.json(misDestinos));
app.post("/my", (req, res, next) => {
    console.log(req.body);
    misDestinos.push(req.body.nuevo);
    res.json_(misDestinos);
});

app.get("/api/translation", (req, res, next) => res.json ([
    {lang: req.query.lang, key: 'HOLA', value: 'HOLA' + req.query.lang}
]));