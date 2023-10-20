import dbConnect from "@/server/lib/dbConnect";
import userModel from "@/server/models/user.model";

import bcrypt from "bcrypt";

export async function POST(req) {
  await dbConnect();

  // get data from body
  const body = await req.json();

  // don't create account if user already exists
  const usernameExists = await userModel.findOne({ username: body.username });
  if (usernameExists)
    return new Response("User already exists", { status: 400 });

  // hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(body.password, salt);

  try {
    const userDetails = new userModel({
      firstname: body.firstname,
      lastname: body.lastname,
      username: body.username,
      password: hashedPassword,
    });

    const user = await userModel.create(userDetails);

    return new Response(JSON.stringify({ success: true, data: user }), {
      status: 200,
    });
  } catch (error) {
    return new Response(`An error occured: ${error}`, { status: 400 });
  }
}
