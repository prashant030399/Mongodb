


const {MongoClient} = require('mongodb');

 
// Connection URL
const url = 'mongodb://localhost:27017';


const client= new MongoClient(url);


function getData()
{


    let result =
}



 
// Database Name
const dbName = 'myproject';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
 
  client.close();
});
