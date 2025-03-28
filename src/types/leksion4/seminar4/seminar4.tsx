interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    isAvailable: boolean;
}

export const bookLists: Book[] = [
    {
        id: 1,
        title: "ab",
        author: "ab",
        genre: "ab",
        isAvailable: false
    },
    {
        id: 2,
        title: "bc",
        author: "bc",
        genre: "bc",
        isAvailable: false
    },
    {
        id: 3,
        title: "abcd",
        author: "abcd",
        genre: "abcd",
        isAvailable: true
    }
]
    export const isBookReturned = (book: Book) => {
        if (book.isAvailable) return {...book};
        else return "Book not available";
    };

    export const searchBook = (title: string) => {
        const foundBooks = bookLists.filter(a => a.title.includes(title));
        return foundBooks
    }