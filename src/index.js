const express = require("express");
const app = express();
const morgan = require('morgan');
const cors = require("cors");

app.set("port", process.env.PORT || 3000);
console.log("holamundo");
app.listen(app.get("port"));

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(require("../src/rutas/rutas"));


module.exports = app;



//const port = ('process.env.port'||4000);
