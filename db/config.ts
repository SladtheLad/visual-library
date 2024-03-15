import { column, defineDb, defineTable } from 'astro:db';

const Book = defineTable({
  columns: {
    title: column.text(),
    author: column.text(),
    added: column.date(),
    coverImage: column.json({
      default: { url: 'https://covers.openlibrary.org/b/id/826503-L.jpg' },
    }),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    Book,
  },
});
