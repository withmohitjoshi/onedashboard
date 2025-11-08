import mongoose from 'mongoose';

export async function connectToDB() {
  try {
    const uri = process.env.MONGODB_URL;
    if (!uri) throw new Error('URI not found');
    const { connection } = await mongoose.connect(process.env.MONGODB_URL);
    console.log('Successfully connected to MongoDB with DB:', connection.name);
  } catch (error) {
    console.error('Error while connecting to MongoDB: ', error);
    process.exit(1);
  }
}
