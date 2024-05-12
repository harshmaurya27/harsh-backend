// require("dotenv").config({ path: "./env" });//code ki consistency kharab karata hai
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";

dotenv.config({ path: "./env" });

connectDB();

const app = express();

/*(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

    app.on("errror", (error) => {
      console.log("ERROR:", error);
      throw error;
    });

    app.listen(porcess.env.PORT, () => {
      console.log(`App is listening on port   ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR:", error);
    throw error;
  }
})();
*/
