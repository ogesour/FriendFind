const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/public', express.static(path.join(__dirname , 'app/public')));

require("./app/routing/htmlroutes")(app);
require("./app/routing/apiroutes")(app);

app.listen(PORT, () => {
    console.log(`Listening on  http://localhost:${PORT}`);
});
