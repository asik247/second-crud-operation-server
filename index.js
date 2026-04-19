const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
//? MiddleWare;
app.use(cors())
app.use(express.json())
// TODO uri
// const uri = "mongodb+srv://9WwxBHCQRsqx3Ozi:<db_password>@cluster0.fdzc9ua.mongodb.net/?appName=Cluster0";
const uri = "mongodb+srv://secondCrudUsers:9WwxBHCQRsqx3Ozi@cluster0.fdzc9ua.mongodb.net/?appName=Cluster0";

// TODO Root Api / ;
app.get('/', (req, res) => {
    res.send("Root Server /")
})
//? users 
// app.get('/users', (req, res) => {
//     res.send("Root Serverssssssssss /")
// })

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
        const myDB = client.db("secondCrudUsers");
        const myColl = myDB.collection("usersDetails");
        // TODO All Method here;
        // ! simple get method;
        app.get('/users', async (req, res) => {
            const cursor = myColl.find();
            const result = await cursor.toArray();
            console.log(result);
            res.send(result)
        })
        // ! Post Method;
        app.post('/users', async (req, res) => {
            // const id = req.params.id;
            const newUsers = req.body
            // console.log(data);
            const result = await myColl.insertOne(newUsers)
            res.send(result)

        })

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
