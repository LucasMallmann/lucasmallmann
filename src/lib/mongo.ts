import { Db as Database, MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || '';
const dbName = process.env.MONGODB_DB;

let cachedClient: MongoClient = null;
let cachedDb: Database = null;

if (!uri) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

if (!dbName) {
  throw new Error(
    'Please define the MONGODB_DB environment variable inside .env.local'
  );
}

type Connection = {
  client: MongoClient;
  db: Database;
};

export async function connectToDatabase(): Promise<Connection> {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
