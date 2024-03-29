export default class BookStoreService {

    async getBook(id) {
        const book = BookStoreService.getData().find(item => item.id === id);
        if (!book) {
            throw new Error("can't find book");
        }
        return book;
    }

    getBooks() {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if (Math.random() > 0.95) {
                    reject(new Error('unrecognized error'))
                }
                resolve(BookStoreService.getData())
            }, 2000);
        })
    }

    static getData() {
        return [
            {
                id: 1,
                author: 'Kyle Simpson',
                title: 'You Don\'t Know JS: Up & Going',
                price: 9.39,
                bookImageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41WdbPkuINL._SX331_BO1,204,203,200_.jpg',
                description: "It’s easy to learn parts of JavaScript, but much harder to learn it completely—or even sufficiently—whether you’re new to the language or have used it for years. With the \"You Don’t Know JS\" book series, you’ll get a more complete understanding of JavaScript, including trickier parts of the language that many experienced JavaScript programmers simply avoid.\n" +
                    "\n" +
                    "The series’ first book, Up & Going, provides the necessary background for those of you with limited programming experience. By learning the basic building blocks of programming, as well as JavaScript’s core mechanisms, you’ll be prepared to dive into the other, more in-depth books in the series—and be well on your way toward true JavaScript.\n" +
                    "\n" +
                    "With this book you will:\n" +
                    "\n" +
                    "Learn the essential programming building blocks, including operators, types, variables, conditionals, loops, and functions\n" +
                    "Become familiar with JavaScript's core mechanisms such as values, function closures, this, and prototypes\n" +
                    "Get an overview of other books in the series—and learn why it’s important to understand all parts of JavaScript"
            },
            {
                id: 2,
                author: 'David Flanagan',
                title: `JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)`,
                price: 33.99,
                bookImageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51lu4ArIFYL._SX379_BO1,204,203,200_.jpg',
                description: 'Since 1996, JavaScript: The Definitive Guide has been the bible for JavaScript programmers—a programmer\'s guide and comprehensive reference to the core language and to the client side JavaScript APIs defined by web browsers.\n' +
                    '\n' +
                    'The 6th edition covers HTML5 and ECMAScript 5. Many chapters have been completely rewritten to bring them in line with today\'s best web development practices. New chapters in this edition document jQuery and server side JavaScript. It\'s recommended for experienced programmers who want to learn the programming language of the Web, and for current JavaScript programmers who want to master it.\n' +
                    '\n' +
                    '"A must have reference for expert JavaScript programmers...well organized and detailed."\n' +
                    '\n' +
                    '—Brendan Eich, creator of JavaScript, CTO of Mozilla\n' +
                    '\n' +
                    '"I made a career of what I learned from JavaScript: The Definitive Guide.”\n' +
                    '\n' +
                    '—Andrew Hedges, Tapulous'
            }];
    }
}