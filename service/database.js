const { MongoClient, ServerApiVersion } = require('mongodb');
const config = require('./dbConfig.json');
const uri = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}/`;
const bcrypt = require('bcrypt');

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const db = client.db('startup');
const userCollection = db.collection('user');
const commentCollection = db.collection('comment');


async function clearAll() {
  const result = await userCollection.deleteMany({});
  console.log(`Deleted ${result.deletedCount} documents from the collection`);
  const result1 = await commentCollection.deleteMany({});
  console.log(`Deleted ${result1.deletedCount} documents from the collection`);
}

async function getUser(username) {
  console.log('searching for user...');
  try {
    return await userCollection.findOne({ userName: username });
  } catch (err) {
    console.error(err);
  }
}

async function userExists(userName) {
  console.log('verifying user existence...');
  try {
    const user = await userCollection.findOne({ userName: userName });
    return user !== null;
  } catch (err) {
    console.error(err);
    return false;
  }
}

async function createUser(username, password, token) {
  console.log('creating user...');
  try {
    const passwordHash = await bcrypt.hash(password, 10);
    const user = {
      userName: username,
      password: passwordHash,
      token: token
    };
    await userCollection.insertOne(user);
    return user;
  } catch (err) {
    console.error(err);
  }
}


module.exports = {
  getUser,
  createUser,
  userExists,
  clearAll,
};