const { MongoClient } = require('mongodb');

// Currently connected to Lincoln's web-hosted database because I couldn't figure out how to connect to my locally-hosted DB through WSL, but as soon as you get a different DB set up, replace this connection string

const uri = 'mongodb+srv://shocuser:shocpassword@nvrjs.ormrmk6.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

async function dbconnect() {
    try {
        await client.connect();
        console.log("You have successfully connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
}

async function getCameras() {
    // await dbconnect();
    const db = client.db("nvrjsdb");
    const cameras = await db.collection("cameras").find().toArray();
    return cameras;
}

async function getUser(){
    
}

module.exports = { dbconnect, getCameras }; 

