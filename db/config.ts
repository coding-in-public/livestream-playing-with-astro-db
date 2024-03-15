import { column, defineDb, defineTable } from "astro:db";

const Like = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    likes: column.number(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Like },
});
