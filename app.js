const express = require ('express');
const path = require('path');
const port = 3030;
const app = express();

app.use(express.static('public'));

//ROOT//
app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/index.html'));
});


//SERVER//
app.listen(port,()=>{
    console.log(`server on port https://localhost:${port}` );
});

