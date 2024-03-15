import { Like, db } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Like).values([
    { id: "using-mdx", likes: 2 },
    { id: "first-post", likes: 3 },
  ]);
}
