const express = require('express');
const app = express();
const port = 3000;
const taskRouter = require('./Routes/taskRoute')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});

app.get("/",(req,res)=>{
    res.send("Alive");
})

app.use("/api/v1/tasks",taskRouter);

module.exports = app;