const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');
const uuid = require('uuid')
const bcrypt = require('bcrypt')

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const commentCollection = db.collection('comment');
//TODO::REMOVE THIS BEFORE DEPLOYING
async function clearAll() {
  const result = await userCollection.deleteMany({});
  console.log(`Deleted ${result.deletedCount} documents from the collection`);
  const result1 = await commentCollection.deleteMany({});
  console.log(`Deleted ${result1.deletedCount} documents from the collection`);
}

//END OF REMOVE

function getUser(username) {
  return userCollection.findOne({ userName: username })
}

async function createUser(username, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    userName: username,
    password: passwordHash,
    token: uuid.v4()
  };
  await userCollection.insertOne(user)
  return user;
}


module.exports = {
  getUser,
  createUser,
  clearAll,
};