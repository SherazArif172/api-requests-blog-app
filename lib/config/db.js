import mongoose from "mongoose";

export const ConnectDb = () => {
  mongoose.connect(
    "mongodb+srv://new:xMOlhqrCBQnYGxJV@crud.8tvpgbr.mongodb.net/db-tester"
  );
  console.log("connect db here");
};
