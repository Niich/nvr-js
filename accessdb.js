const { MongoClient } = require('mongodb');

// Currently connected to Lincoln's web-hosted database because I couldn't figure out how to connect to my locally-hosted DB through WSL, but as soon as you get a different DB set up, replace this connection string

class NvrMongo {
    constructor (connectionURL, database) {
        this.uri = connectionURL;
        this.db = database;
        this.client = new MongoClient(this.uri);
    }

    async dbconnect() {
        try {
            await this.client.connect();
            console.log("You have successfully connected to MongoDB");
        } catch (error) {
            console.error("Error connecting to MongoDB", error);
        }
    }
    
    async getCameras() {
        // await dbconnect();
        const db = this.client.db(this.db);
        const cameras = await db.collection("cameras").find().toArray();
        return cameras;
    }
    
    async getUser(){
        
    }
}

module.exports = { NvrMongo }; 

