import mongoose from "mongoose";

 const Connection = async (username,password) => {
 const URL = `mongodb+srv://${username}:${password}@cluster0.83b421n.mongodb.net/?retryWrites=true&w=majority`;
//const URL=`mongodb+srv://${username}:${password}@cluster0.cillxla.mongodb.net/?retryWrites=true&w=majority`
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connect to MongoDB");
  } catch (err) {
    console.log("Couldn't connect to MongoDB", err);
  }
};

export default Connection;

//sskssk