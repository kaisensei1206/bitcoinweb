import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!; // Fallback to local MongoDB if URI is not set
const options = { maxPoolSize: 10 }; // Adjust the pool size as needed

// Create a MongoClient instance
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}
//單俐模式
if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;
export default clientPromise;
