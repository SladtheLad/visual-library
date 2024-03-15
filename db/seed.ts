import { db, Book } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// a few dummy books
	await db.insert(Book).values([{
	  title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', added: new Date(),
	  coverImage: {url: 'https://covers.openlibrary.org/b/id/826503-L.jpg'}
	}, {
	 title: 'The Catcher in the Rye', author: 'J D Salinger', added: new Date(),
	coverImage: {url: 'https://covers.openlibrary.org/b/id/826503-L.jpg'}
	}])

}
