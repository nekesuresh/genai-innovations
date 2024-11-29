const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const chartRoutes = require('./routes/charts');
const app = express();




app.use((req,res,next)=>{

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');

    next();

})


app.use(cors()); 
app.use(bodyParser.json());
app.use('/api/charts', chartRoutes); 
app.use('/api/auth', authRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
