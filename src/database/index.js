import mongoose from "mongoose";

const connectToDB = async () => {
  const url = process.env.MONGODB_URL;

  mongoose
    .connect(url)
    .then(() => console.log("User database connected"))
    .catch((err) => console.log(err));
};

export default connectToDB;
