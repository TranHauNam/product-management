//Khởi tạo express
const express = require('express');
const app = express();
const port = 3000;

//Route
const route = require("./routes/client/index.route.js");
route(app);


//Cấu hình pug
app.set('view engine', 'pug');
app.set('views', './views');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})