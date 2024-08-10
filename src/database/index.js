import mongoose from "mongoose"

const connectToDB = async () => {
    const url = "mongodb+srv://muhammadhasnain:mhasnain2024@cluster0.sx0x5wl.mongodb.net/";

    mongoose.connect(url).then(() => console.log("User database connected")).catch((err) => console.log(err));
}

export default connectToDB;