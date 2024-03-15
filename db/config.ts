import { column, defineDb, defineTable } from 'astro:db';

const Book = defineTable({
  columns: {
    id: column.number({primaryKey: true, unique: true}),
    title: column.text(),
    author: column.text(),
    added: column.date(),
    coverImage: column.json()
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    Book
  }
});
