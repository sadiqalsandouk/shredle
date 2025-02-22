import mongoose from "mongoose"

const mongodbUri = process.env.MONGODB_URI as string
const mongodbName = process.env.MONGODB_NAME as string

if (!mongodbName) {
  throw new Error("MongoDB URI is not provided")
}

if (!mongodbUri) {
  throw new Error("MONGODB Name is not provided")
}

export default async function connectDb() {
  console.log("Attempting to connect to database")
  try {
    await mongoose.connect(mongodbUri, {
      dbName: mongodbName,
    })
    console.log("Connected to database")
  } catch (error) {
    console.error("Error connecting to database", error)
    throw error
  }
}
