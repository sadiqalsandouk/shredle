import connectDb from "./lib/mongodb"

let isConnected = false

export async function register() {
  if (isConnected) {
    return
  }
  try {
    await connectDb()
    isConnected = true
    console.log("Connected to DB")
  } catch (error) {
    console.error("Failed to connect:", error)
    throw error
  }
}
