import { Like, db } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Like).values([
    { id: 1, title: "using-mdx", likes: 2 },
    { id: 2, title: "first-post", likes: 3 },
  ]);
}
