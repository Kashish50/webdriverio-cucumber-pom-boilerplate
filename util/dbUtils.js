const MongoClient = require('mongodb').MongoClient;

var dbConnection;
var db, Client;

const yaml = require('js-yaml');
const fs = require('fs');


class DbUtils {
    async getDBconnection(dbName, url) {
        try {

            // Build the connection String and create the database connection
            Client = await MongoClient.connect(url + dbName,
                {
                    useNewUrlParser: true
                }
            )
            // db global variable 
            db = await Client.db('mydb');
        }
        catch (err) {
            return console.log('Database Connection Error!', err.message)
        }
        return db;
    }

    async selectAllRecords(db, collectionName) {
        try {
            let collection = db.collection(collectionName);
            let res = await collection.find().toArray();
            console.log("Following are all records of given collection:")
            console.log(res);
            return res;
        }
        catch (err) {
            console.log(err);
        }
    }

    async selectRecord(db, collectionName, key, value) {
        try {
            let collection = db.collection(collectionName);
            let query = []
            query = { [key]: value };
            let res = await collection.findOne(query);
            console.log("Following are all records of given collection with applied filter:")
            console.log(res);
            return res;
        }
        catch (err) {
            console.log(err);
        }
    }

    async selectRecords(db, collectionName, key, value) {
        try {
            let collection = db.collection(collectionName);
            let query = []
            query = { [key]: value };
            let res = await collection.find(query).toArray();
            console.log("Following are all records of given collection with applied filter:")
            console.log(res);
            return res;
        }
        catch (err) {
            console.log(err);
        }
    }

    async sortRecords(db, collectionName, key, sortOrder) {
        var value;
        if (sortOrder == 'ascending') {
            value = 1;
        }
        else {
            value = -1;
        }
        try {
            let collection = db.collection(collectionName);
            let mysort = []
            mysort = { [key]: value };
            let res = await collection.find().sort(mysort).toArray();
            console.log("Following are all records of given collection with applied sort order:")
            console.log(res);
        }
        catch (err) {
            console.log(err);
        }
    }

    async selectRecordNestedFilter(db, collectionName, nestedKey, key, value) {
        try {
            let collection = db.collection(collectionName);
            let query = []
            var a = key + '.' + nestedKey;
            query = { [a]: value };

            let res = await collection.find(query).toArray();
            console.log("Following are all records of given collection with applied filter:")
            console.log(res);
            return res;
        }
        catch (err) {
            console.log(err);
        }
    }

    async closeDbConnection(db) {
        await db.close();
    }

    getCustomersCollectionKeys() {
        try {
            const config = yaml.safeLoad(fs.readFileSync('tests/files/testData/customerCollectionKeys.yml', 'utf8'));
            console.log("######");
            console.log(config.city);
        } catch (e) {
            console.log(e);
        }
    }
} module.exports = DbUtils;
