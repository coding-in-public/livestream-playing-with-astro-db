export const prerender = false;

import type { APIRoute } from "astro";
import { Like, db } from "astro:db";

export const POST: APIRoute = async ({ request }) => {
  const { title } = await request.json();

  if (!title) {
    return new Response(null, {
      status: 404,
      statusText: "Not found",
    });
  }

  const req = await db.insert(Like).values({ title });

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
