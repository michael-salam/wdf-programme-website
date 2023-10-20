import dbConnect from "@/server/lib/dbConnect";
import userModel from "@/server/models/user.model";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req) {
  await dbConnect();

  const body = await req.json();

  // check if the user does not exist
  const user = await userModel.findOne({ username: body.username });
  if (!user) return new Response("User does not exist", { status: 404 });

  // check if the password is correct
  const validPassword = await bcrypt.compare(body.password, user.password);
  if (!validPassword) return new Response("Incorrect password");

  try {
    // if the earlier checks are passed, we can log the user in
    // first create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    return new Response("Logged in", {
      status: 200,
      headers: { "Set-Cookie": `token=${token}` },
    });
  } catch (error) {
    return new Response(`An error occured: ${error}`, { status: 400 });
  }
}
