const express = require('express');
const mongoose = require('mongoose'); 
const cors = require('cors');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://lavanjan:lavan1998@invicta-dts.euh5l.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology:true});

const connection = mongoose.connection;


connection.once('open', ()=>{
    console.log("MongoDB database connection Success");
})

const defectsRouter = require('./routes/defects');
const employeesRouter = require('./routes/employees');
const projectsRouter = require('./routes/projects');

app.use('/defects', defectsRouter);
app.use('/employees', employeesRouter);
app.use('/projects', projectsRouter);


app.listen(port, ()=> {
    console.log(`server is runnign on : ${port}`);
});


