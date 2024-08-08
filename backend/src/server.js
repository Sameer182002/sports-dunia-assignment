const express = require('express');
const cors = require('cors');
const app = express();


app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors())


app.listen(3001,err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening to 3001`);
})

module.exports = {app}
