import { File } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connectToDb();

    const files = await File.find();
    return NextResponse.json(files);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};
