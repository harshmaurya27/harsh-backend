// require("dotenv").config({ path: "./env" });//code ki consistency kharab karata hai
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is runnig on the port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MONGODN connection failed !!,err`);
  });

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
