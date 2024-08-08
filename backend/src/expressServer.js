const { app } = require("./server");

app.get('/',(req,res)=>res.status(200).send('Service is running'))
app.use('/live-scores',require("./routes/scoreRoutes"))
app.use('/sports',require("./routes/sportsRoute"))

module.exports = app