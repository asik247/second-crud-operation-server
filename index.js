const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
// const cros = require('cros');
const app = express();
const port = process.env.PORT || 3000;
//? MiddleWare;
// app.use(cros())
// app.use(express.json())
// TODO uri
// const uri = "mongodb+srv://9WwxBHCQRsqx3Ozi:<db_password>@cluster0.fdzc9ua.mongodb.net/?appName=Cluster0";
const uri = "mongodb+srv://secondCrudUsers:9WwxBHCQRsqx3Ozi@cluster0.fdzc9ua.mongodb.net/?appName=Cluster0";

// TODO Root Api / ;
app.get('/', (req, res) => {
    res.send("Root Server /")
})

// ? crate mongodb user;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
// TODO run funk;
async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {

    }
}
run().catch(console.dir);
//! Listinner;
app.listen(port, () => {
    console.log(`This server runing in port:${port}`);
})
//! 9WwxBHCQRsqx3Ozi  secondCrudUsers
