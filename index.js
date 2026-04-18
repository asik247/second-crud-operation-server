const express = require('express');
// const cros = require('cros');
const app = express();
const port = process.env.PORT || 3000;
// MiddleWare;

// Root Api / ;
app.get('/',(req,res)=>{
    res.send("Root Server /")
})
// Listinner;
app.listen(port,()=>{
    console.log(`This server runing in port:${port}`);
})

