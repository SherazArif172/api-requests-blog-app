import { ConnectDb } from "../../../../lib/config/db";
import BlogModels from "../../../../lib/models/model";

const { NextResponse } = require("next/server");

const Connected = async () => {
  try {
    await ConnectDb();
    console.log("connected with database");
  } catch (error) {
    console.log("error in connecting", error);
  }
};

Connected();

export async function GET(params) {
  console.log("get hit");
  return NextResponse.json({ wah: "wahh" });
}

export async function POST(request) {
  console.log("get hit");
  // return NextResponse.json({ wah: "wahh" });

  const formData = await request.formData();
  // const timeStamp = Date.now();

  const BlogData = {
    title: formData.get("title"),
    name: formData.get("name"),
    description: formData.get("description"),
    author: formData.get("author"),
  };

  await BlogModels.create(BlogData);
  console.log("data has been saved");

  return NextResponse.json({ success: true, msg: "data his saved" });
}
