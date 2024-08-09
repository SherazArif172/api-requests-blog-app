import mongoose from "mongoose";

export const ConnectDb = () => {
  mongoose.connect("");
  console.log("connect db here");
};
