//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {


if(err){
 return  console.log('Unable to connect to db server');

}
console.log('Connected to mongodb server');
const db = client.db('TodoApp');

//deleteMany
// db.collection('Todos').deleteMany({text: 'Eat launch'}).then((result) =>{
//  console.log(result);
// });
//deleteOne
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) =>{
//   console.log(result);
//  });
//FindOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
//   console.log(result);
//  });

//  db.collection('Users').deleteMany({location: 'Cape Town'}).then((result) =>{
//  console.log(result);
// });

db.collection('Todos').findOneAndDelete({id: ObjectID('5c6973619ae7a616b4728f79')}).then((result) =>{
  console.log(result);
 });
// client.close();
});