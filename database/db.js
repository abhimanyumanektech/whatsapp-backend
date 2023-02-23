import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = async () => {
  const URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@whatsapp-clone.wny5wgv.mongodb.net/?retryWrites=true&w=majority`;

  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connect successfully!");
  } catch (error) {
    console.log(error);
  }
};

export default Connection;
