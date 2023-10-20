import { cookies } from "next/headers";

export async function GET(req) {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  // console.log(token);

  return new Response(token);
}
