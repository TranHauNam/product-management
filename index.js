//import env
require("dotenv").config();

//Khởi tạo express
const express = require('express');
const app = express();
const port = process.env.PORT;

//Khởi tạo và kết nối database
const database = require("./config/database.js");
database.connect();

//Route
const route = require("./routes/client/index.route.js");
route(app);

//Nhúng file tĩnh
app.use(express.static("public"));

//Cấu hình pug
app.set('view engine', 'pug');
app.set('views', './views');

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})