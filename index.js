const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {   
    res.send('Hello Cinjo! This is a sample Node.js application running on Azure App Service.');
});

app.listen(process.env.PORT || port);

// app.listen(port, () => {
//     console.log(`App is running on port ${port}`);
// });
