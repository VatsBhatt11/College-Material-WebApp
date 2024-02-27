import { File } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;

  try {
    connectToDb();

    const file = await File.findOne({ slug });
    return NextResponse.json(file);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch file!");
  }
};

export const DELETE = async (request, { params }) => {
  const { slug } = params;

  try {
    connectToDb();

    await File.deleteOne({ slug });
    return NextResponse.json("File deleted");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete file!");
  }
};
