import mongoose from "mongoose"

export const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URI, {dbName: "MernStack_event_planner"})
    .then(() => {
      console.log("Database connected successfully")
    })
    .catch((err) => {
      console.log(err.message)
    })
}